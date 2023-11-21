import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import GetStarted from "./pages/GetStarted/GetStarted";
import Onboarding from "./pages/OnboardingPage/Onboarding";
import SignupPage from "./pages/SignupPage/SignupPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/sign-up" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
