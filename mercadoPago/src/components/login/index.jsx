import { useState } from "react";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineInfoCircle,
} from "react-icons/ai";

const Login = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="bg-[#ECEBF6] w-full h-screen flex flex-col items-center">
      <header className="h-16 w-full bg-[#10224D] shadow-cardShadow px-6 flex justify-between items-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.8441 23.1124L0.370423 12.6387C0.234163 12.5025 0.138368 12.362 0.083036 12.2172C0.0276789 12.0725 0 11.915 0 11.7447C0 11.5743 0.0276789 11.4168 0.083036 11.2721C0.138368 11.1273 0.234163 10.9868 0.370423 10.8506L10.8696 0.351368C11.0995 0.121459 11.3869 0.00437121 11.7318 0.00010511C12.0767 -0.00416099 12.3768 0.121434 12.6323 0.376889C12.8877 0.623837 13.0176 0.919744 13.0218 1.26461C13.0261 1.60947 12.9005 1.90963 12.645 2.16509L4.34273 10.4674H22.7227C23.0889 10.4674 23.3933 10.5887 23.636 10.8314C23.8787 11.0741 24 11.3785 24 11.7447C24 12.1108 23.8787 12.4152 23.636 12.6579C23.3933 12.9006 23.0889 13.0219 22.7227 13.0219H4.34273L12.6706 21.3498C12.9005 21.5797 13.0176 21.8692 13.0218 22.2183C13.0261 22.5674 12.9005 22.8655 12.645 23.1124C12.3981 23.3679 12.1001 23.4956 11.7509 23.4956C11.4018 23.4956 11.0995 23.3679 10.8441 23.1124Z"
            fill="white"
          />
        </svg>
      </header>
      <h1 className="font-extrabold text-[32px] leading-[37px] text-center text-[#6F0B19] mb-3 mt-[56px]">
        ¡Es un gusto tenerte de regreso!
      </h1>
      <p className="font-semibold text-lg leading-[22px] text-center mb-[56px]">
        Inicia sesión para disfrutar de todos nuestros servicios.
      </p>
      <form
        action=""
        className="flex flex-col items-center justify-center gap-2"
      >
        <div className="w-[328px] h-[184px] bg-white rounded-[10px] shadow-cardShadow flex">
          <AiOutlineInfoCircle className="w-6 h-6 mt-3 ml-3" />

          <div className="flex flex-col gap-5 mt-6">
            <input
              className="font-medium text-base leading-[16px] placeholder:text-black h-[48px] w-[272px] pl-2 focus:outline-none border-b-2 border-black"
              type="text"
              placeholder="Correo electrónico"
            />
            <div className="relative flex bg-black">
              <input
                className="font-medium text-base leading-[16px] placeholder:text-black h-[48px] w-[272px] pl-2 focus:outline-none border-b-2 border-black block"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handleChange}
                placeholder="Contraseña"
              />
              {showPassword ? (
                <AiOutlineEye
                  onClick={toggleShowPassword}
                  className="absolute w-8 h-8 bottom-2 right-2"
                />
              ) : (
                <AiOutlineEyeInvisible
                  onClick={toggleShowPassword}
                  className="absolute w-8 h-8 bottom-2 right-2"
                />
              )}
            </div>
          </div>
        </div>
        <button className="text-lg font-semibold leading-[22px] text-white w-[328px] h-[48px] bg-[#10224D] rounded-[10px]">
          Iniciar sesión
        </button>
      </form>
      <div className="flex items-center justify-center gap-2 mt-2">
        <p className="text-sm font-semibold leading-[17px]">
          ¿No tienes cuenta?
        </p>
        <p className="text-[#6F0B19] text-sm leading-[17px] font-semibold">
          CREAR UNA CUENTA
        </p>
      </div>
    </section>
  );
};

export default Login;
