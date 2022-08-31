import "./App.scss";
import TopNavigation from "./components/ui/top-navigation/TopNavigation";
import { LandingPage } from "./pages";
import { LANDING_PAGE } from "./routes";
import { Routes, Route } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className="container">
        <TopNavigation />
        <Routes>
          <Route path={LANDING_PAGE} element={<LandingPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
