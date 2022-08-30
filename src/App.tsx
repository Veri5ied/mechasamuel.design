import "./App.scss";
import TopNavigation from "./components/ui/top-navigation/TopNavigation";
import { LandingPage } from "./pages";
import { LANDING_PAGE } from "./routes";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <TopNavigation />
      <Routes>
        <Route path={LANDING_PAGE} element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
