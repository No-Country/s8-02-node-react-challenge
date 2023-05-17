import TopbarLogin from "../../components/login/topbar-login";
import FormLogin from "../../components/login/form-login";
import { useState } from "react";
import PopupLogin from "../../components/login/popup-login";
import TitleLogin from "../../components/login/Title-login";

const LoginPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <section className="bg-[#ECEBF6] w-full h-screen flex flex-col items-center">
      <TopbarLogin />
      <div className="relative">
        {isOpen && <PopupLogin handleClose={handleClose} />}
        <TitleLogin />
        <FormLogin handleClick={handleClick} />
      </div>
    </section>
  );
};

export default LoginPage;
