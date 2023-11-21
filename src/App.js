import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import GetStarted from "./pages/GetStarted/GetStarted";
import Onboarding from "./pages/OnboardingPage/Onboarding";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/get-started" element={<GetStarted />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
