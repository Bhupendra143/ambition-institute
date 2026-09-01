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

  // Sync the 'dark' class onto the root <html> tag for index.css variables to activate
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
      <div style={{ position: "relative", minHeight: "100vh", background: "#0a0a0a" }}>
        <Header />
        {/* Background Layer */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
      {/* Outer Shell using theme background utility and strict overflow containment */}
      <div className="relative min-h-screen w-full bg-background text-foreground overflow-x-hidden transition-colors duration-300">
        {/* Full-width Animated Background Canvas (Dynamic theme colors) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
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
            dotSize={1.5} 
            linkDistance={120} 
            opacity={0.6} 
            alpha={1.2}
            interactionRadius={120}
            interactionStrength={15}
            cursorEase={40}
          />
        </div>

        {/* Primary Page Layout Container */}
        <div className="relative z-10 min-h-screen w-full max-w-7xl mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8 py-10 box-border">
          <AppRoutes />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
export default App;