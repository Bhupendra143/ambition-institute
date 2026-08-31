import DotBackground from "./components/DotBackground";
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from "./routes/AppRoutes.route";

function App() {
  return (
    <BrowserRouter>
      <div style={{ position: "relative", minHeight: "100vh", background: "#0a0a0a" }}>
        {/* Background Layer */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <DotBackground
            mode="drift"
            tracking="global"
            interaction="repel"
            background="#0a0a0a"
            dotColor="#ffffff"
            lineColor="#666666"
            density={1.2}
            speed={0.8}
            dotSize={2}
            linkDistance={140}
            opacity={1}
            alpha={1.4}
            interactionRadius={140}
            interactionStrength={18}
            cursorEase={40}
          />
        </div>

        {/* Dynamic Route Content */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
            textAlign: "center",
            padding: "0 24px",
          }}
        >
          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;