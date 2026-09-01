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
      {/* Outer Shell using theme background utility */}
      <div className="relative min-h-screen w-full bg-background text-foreground overflow-x-hidden transition-colors duration-300 flex flex-col justify-between">
        
        {/* Full-width Animated Background Canvas */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <DotBackground
            mode="drift"
            tracking="global"
            interaction="repel"
            background={isDark ? "#0a0a0a" : "#ffffff"}
            dotColor={isDark ? "#ffffff" : "#000000"}
            lineColor={
              isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.08)"
            }
            density={1.2} 
            speed={1.2}
            dotSize={0.8} 
            linkDistance={120} 
            opacity={0.6} 
            alpha={1.2}
            interactionRadius={120}
            interactionStrength={15}
            cursorEase={40}
          />
        </div>

        <main className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex flex-col px-4 sm:px-6 lg:px-8 py-4 box-border">
        <Header />
          <AppRoutes />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;