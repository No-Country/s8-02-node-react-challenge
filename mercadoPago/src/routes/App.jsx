import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/error";
import LandingPage from "../pages/landing-page";
import Home from "../pages/home";
import { UserRouteProtected } from "./user/userRouteProtected";
import LoginPage from "../pages/login-page";
import RegisterPage from "../pages/register-page";
import YourMoney from "../pages/your-money";
import Profile from "../pages/profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<UserRouteProtected />}>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/money" element={<YourMoney />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
