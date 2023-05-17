import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/error";
import LandingPage from "../pages/landing-page";
import Home from "../pages/home";
import Register from "../pages/register/register";
import { UserRouteProtected } from "./user/userRouteProtected";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route element={<UserRouteProtected />}>
          <Route path="/home" element={<Home />} />
          <Route path="register" element={<Register />} />
        </Route>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
