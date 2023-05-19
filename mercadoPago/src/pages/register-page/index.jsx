import TopbarLogin from "../../components/login/topbar-login";
import FormRegister from "../../components/register/form-register";
import TitleRegister from "../../components/register/Title-register";
import PopupCorreo from "../../components/register/form-register/popup-register/popupCorreo";
import { useState } from "react";


const RegisterPage = () => {
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
        {isOpen && <PopupCorreo handleClose={handleClose} />}

        <TitleRegister />
        <FormRegister handleClick={handleClick} />
      </div>
    </section>
  );
};

export default RegisterPage;
