import { useEffect, useRef } from "react";

type Mode = "orbit" | "drift";
type Tracking = "off" | "global" | "local";
type Interaction = "off" | "repel" | "attract";

export interface DotBackgroundProps {
  mode?: Mode;
  tracking?: Tracking;
  interaction?: Interaction;
  density?: number; // 0.3 - 3
  speed?: number; // 0 - 3
  dotSize?: number; // 0.5 - 6
  linkDistance?: number; // 0 - 260
  opacity?: number; // 0 - 1
  alpha?: number; // 0.2 - 3 (brightness multiplier)
  cursorEase?: number; // 0 - 100
  interactionRadius?: number; // 30 - 420
  interactionStrength?: number; // 0 - 60
  background?: string; // hex or rgb/rgba
  dotColor?: string;
  lineColor?: string;
  style?: React.CSSProperties;
  className?: string;
}

interface Dot {
  i: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseR: number;
  baseA: number;
  phase: number;
}

const defaults: Required<
  Omit<DotBackgroundProps, "style" | "className">
> = {
  mode: "drift",
  interaction: "repel",
  tracking: "global",
  density: 1,
  speed: 1,
  dotSize: 2,
  linkDistance: 140,
  background: "#000000",
  dotColor: "#ffffff",
  lineColor: "#8a8a8a",
  opacity: 1,
  alpha: 1.4,
  interactionRadius: 140,
  interactionStrength: 18,
  cursorEase: 40,
};

export default function DotBackground(props: DotBackgroundProps) {
  const p = { ...defaults, ...props };

  const wrapRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const mouseRef = useRef({
    targetX: 0,
    targetY: 0,
    x: 0,
    y: 0,
    inside: false,
    hasInit: false,
  });

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const speed = p.speed;
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const motionScale = prefersReducedMotion ? 0.45 : 1;

    let w = 1;
    let h = 1;

    const clamp = (v: number, a: number, b: number) =>
      Math.max(a, Math.min(b, v));

    // Map 0-100 to internal lerp factor 0-0.30
    const easeToLerp = (ease: number) =>
      clamp(clamp(ease, 0, 100) / 100 * 0.3, 0, 0.3);

    // Accepts hex OR rgb/rgba strings
    const toRgba = (input: string, alpha: number) => {
      const s = (input || "").trim();
      if (s.startsWith("rgba(") || s.startsWith("rgb(")) {
        const nums = s
          .replace(/rgba?\(/, "")
          .replace(")", "")
          .split(",")
          .map((v) => parseFloat(v.trim()));
        const r = nums[0] ?? 0;
        const g = nums[1] ?? 0;
        const b = nums[2] ?? 0;
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
      }
      const hx = s.replace("#", "").trim();
      const full =
        hx.length === 3
          ? hx
              .split("")
              .map((c) => c + c)
              .join("")
          : hx.slice(0, 6);
      const n = parseInt(full || "000000", 16);
      const r = (n >> 16) & 255;
      const g = (n >> 8) & 255;
      const b = n & 255;
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    const resize = () => {
      const r = wrap.getBoundingClientRect();
      w = Math.max(1, Math.floor(r.width));
      h = Math.max(1, Math.floor(r.height));
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const m = mouseRef.current;
      if (!m.hasInit) {
        m.targetX = w * 0.5;
        m.targetY = h * 0.5;
        m.x = m.targetX;
        m.y = m.targetY;
        m.hasInit = true;
      }
    };

    const ro = new ResizeObserver(resize);
    ro.observe(wrap);
    resize();

    const rebuildDots = (): Dot[] => {
      const count = clamp(
        Math.floor(((w * h) / 12000) * p.density),
        20,
        320
      );
      const cx = w * 0.5;
      const cy = h * 0.5;
      return Array.from({ length: count }).map((_, i) => {
        const r = Math.min(w, h) * (0.15 + Math.random() * 0.35);
        const a = Math.random() * Math.PI * 2;
        return {
          i,
          x: cx + Math.cos(a) * r,
          y: cy + Math.sin(a) * r,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          baseR: r,
          baseA: a,
          phase: Math.random() * Math.PI * 2,
        };
      });
    };

    let dots = rebuildDots();
    let lastArea = w * h;

    const onWindowPointerMove = (e: PointerEvent) => {
      if (p.tracking !== "global") return;
      const r = wrap.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      const inside = x >= 0 && x <= r.width && y >= 0 && y <= r.height;
      const m = mouseRef.current;
      m.targetX = x;
      m.targetY = y;
      m.inside = inside;
    };

    if (p.tracking === "global") {
      window.addEventListener("pointermove", onWindowPointerMove, {
        passive: true,
      });
    }

    const step = (tMs: number) => {
      const t = (tMs / 1000) * motionScale;
      const area = w * h;
      if (Math.abs(area - lastArea) / Math.max(1, lastArea) > 0.3) {
        dots = rebuildDots();
        lastArea = area;
      }

      // Cursor easing
      const m = mouseRef.current;
      const lerp = easeToLerp(p.cursorEase);
      if (lerp > 0) {
        m.x += (m.targetX - m.x) * lerp;
        m.y += (m.targetY - m.y) * lerp;
      } else {
        m.x = m.targetX;
        m.y = m.targetY;
      }

      // Background
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = p.background;
      ctx.fillRect(0, 0, w, h);

      const cx = w * 0.5;
      const cy = h * 0.5;
      const interactionEnabled =
        p.interaction !== "off" && p.tracking !== "off";
      const ir = Math.max(10, p.interactionRadius);
      const ir2 = ir * ir;
      const strength = p.interactionStrength * motionScale;
      const alphaBoost = clamp(p.alpha, 0.2, 3);

      for (const d of dots) {
        if (p.mode === "orbit") {
          const a =
            d.baseA + t * speed * 0.7 + Math.sin(t * 0.6 + d.phase) * 0.15;
          const rr = d.baseR * (0.92 + 0.08 * Math.sin(t * 1.2 + d.phase));
          d.x = cx + Math.cos(a) * rr;
          d.y = cy + Math.sin(a) * rr;
        } else {
          d.x += d.vx * speed * motionScale;
          d.y += d.vy * speed * motionScale;
          if (d.x < -20) d.x = w + 20;
          if (d.x > w + 20) d.x = -20;
          if (d.y < -20) d.y = h + 20;
          if (d.y > h + 20) d.y = -20;
        }

        if (interactionEnabled && m.inside) {
          const dx = d.x - m.x;
          const dy = d.y - m.y;
          const dist2 = dx * dx + dy * dy;
          if (dist2 < ir2) {
            const dist = Math.sqrt(dist2) || 1;
            const falloff = 1 - dist / ir;
            const dirx = dx / dist;
            const diry = dy / dist;
            const sign = p.interaction === "repel" ? 1 : -1;
            const push = sign * falloff * falloff * strength;
            d.x += dirx * push;
            d.y += diry * push;
          }
        }
      }

      // Links
      const maxD = Math.max(20, p.linkDistance);
      const maxD2 = maxD * maxD;
      ctx.lineWidth = 1;
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const a = dots[i];
          const b = dots[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < maxD2) {
            const d = Math.sqrt(d2);
            const alpha = (1 - d / maxD) * 0.55 * p.opacity * alphaBoost;
            ctx.strokeStyle = toRgba(p.lineColor, clamp(alpha, 0, 1));
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Dots
      for (const d of dots) {
        const pulse = 0.8 + 0.2 * Math.sin(t * 2 + d.phase);
        const r = Math.max(0.6, p.dotSize * pulse);
        const alpha = 0.95 * p.opacity * alphaBoost;
        ctx.fillStyle = toRgba(p.dotColor, clamp(alpha, 0, 1));
        ctx.beginPath();
        ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      if (p.tracking === "global") {
        window.removeEventListener("pointermove", onWindowPointerMove);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    p.mode,
    p.interaction,
    p.tracking,
    p.density,
    p.speed,
    p.dotSize,
    p.linkDistance,
    p.background,
    p.dotColor,
    p.lineColor,
    p.opacity,
    p.alpha,
    p.interactionRadius,
    p.interactionStrength,
    p.cursorEase,
  ]);

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (p.tracking !== "local") return;
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const m = mouseRef.current;
    m.targetX = e.clientX - r.left;
    m.targetY = e.clientY - r.top;
    m.inside = true;
  };

  const onPointerLeave = () => {
    if (p.tracking !== "local") return;
    mouseRef.current.inside = false;
  };

  return (
    <div
      ref={wrapRef}
      className={props.className}
      onPointerMove={p.tracking === "local" ? onPointerMove : undefined}
      onPointerLeave={p.tracking === "local" ? onPointerLeave : undefined}
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        pointerEvents: p.tracking === "global" ? "none" : "auto",
        touchAction: p.tracking === "local" ? "none" : "auto",
        ...props.style,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
    </div>
  );
}