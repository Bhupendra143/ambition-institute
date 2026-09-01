import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import DotBackground from "./components/DotBackground";
import AppRoutes from "./routes/AppRoutes.route";
import Header from "./components/Header";
import { useTheme } from "./context/ThemeContext";
import Footer from "./components/layout/Footer";

const App: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-[#0a0a0a] text-foreground">
        <Header />

        <div className="relative overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <DotBackground
              mode="drift"
              tracking="global"
              interaction="repel"
              background={isDark ? "#0a0a0a" : "#ffffff"}
              dotColor={isDark ? "#ffffff" : "#000000"}
              lineColor={isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.08)"}
              density={1.2}
              speed={1.2}
              dotSize={1.5}
              linkDistance={120}
              opacity={0.6}
              alpha={1.2}
              interactionRadius={120}
              interactionStrength={15}
              cursorEase={40}
            />
          </div>

          <div className="relative z-10 min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 box-border">
            <AppRoutes />
          </div>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;