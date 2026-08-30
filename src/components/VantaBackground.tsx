import { useEffect, useRef, useState, type ReactNode } from "react";
import * as THREE from "three";
import * as VANTA_MODULE from "vanta/dist/vanta.birds.min";

interface VantaBackgroundProps {
  children?: ReactNode;
}

function resolveBirds(mod: any): any {
  const candidates = [mod, mod?.default, mod?.default?.default];
  const fn = candidates.find((c) => typeof c === "function");
  if (!fn) {
    console.error(
      "Could not resolve VANTA.BIRDS as a function. Module shape:",
      mod,
    );
  }
  return fn;
}

export default function VantaBackground({ children }: VantaBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    const BIRDS = resolveBirds(VANTA_MODULE);

    if (BIRDS && !vantaEffect && vantaRef.current) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          birdSize: 1.2 ,
          wingSpan: 22.0,
          speedLimit: 2.0,
          separation: 51.0,
          quantity: 3.0,
        }),
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} style={{ width: "100%", height: "100vh" }}>
      {children}
    </div>
  );
}
