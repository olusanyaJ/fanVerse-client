import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import GetStarted from "./pages/GetStarted/GetStarted";
import Onboarding from "./pages/OnboardingPage/Onboarding";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
