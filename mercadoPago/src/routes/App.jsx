import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ErrorPage from "../pages/error";
import LandingPage from "../pages/landing-page";
import Home from "../pages/home";
import { UserRouteProtected } from "./user/userRouteProtected";
import LoginPage from "../pages/login-page";
import RegisterPage from "../pages/register-page";
import YourMoney from "../pages/your-money";
import Profile from "../pages/profile/Profile";
import YourData from "../pages/your-data";
import QrLink from "../pages/qrlink-page";
import AddMoney from "../pages/addmoney";
import CardsPage from "../pages/cards-page";
import Transfer from "../pages/transfer";

import TopBarTransfer from "../components/tranfer-components/topBarTransfer";
import { AddAccount } from "../pages/transfer/addAccount";


// import Activity from "../pages/activity/Activity";
// import Details from "../pages/activity/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/qrlink" element={<QrLink />} />

        <Route path="/register" element={<RegisterPage />} />
        <Route element={<UserRouteProtected />}>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/money" element={<YourMoney />} />
          <Route path="/data" element={<YourData />} />
          <Route path="/addmoney" element={<AddMoney />} />

          <Route path="/cards" element={<CardsPage />} />
          {/* <Route path="/activity" element={<Activity />} /> */}
          {/* <Route path="/activity/:id" element={<Details />} /> */}
          <Route path="/transfer" element= {<TopBarTransfer/>}>
            <Route index element={<Transfer />} />
            <Route
              path="/transfer/addacoount"
              element={ <AddAccount/>
              
              }
            />

            {/* <Route path="check" element={<TransferCheck />} /> */}
            <Route
              path="amount"
              element={
                <div>
                  <h1>Comprobante</h1>
                  <Link
                    className=" bg-slate-400 p-2"
                    to="/transfer/preconfirmation"
              
                  >
                    CONFIRMAR MONTO
                  </Link>
                </div>
              }
            />
            <Route
              path="preconfirmation"
              element={
                <div>
                  <h1>pre confirmation</h1>
                  <Link className=" bg-slate-400 p-2" to="/transfer/voucher">
                    Confirmar transferencia
                  </Link>
                </div>
              }
            />
            <Route
              path="voucher"
              element={
                <div>
                  <h1>Comprobante</h1>
                  <button className=" bg-slate-400 p-2">
                    Descargar comprobante
                  </button>
                </div>
              }
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
