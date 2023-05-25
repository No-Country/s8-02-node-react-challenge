import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { useState } from "react";

const FormRegister = ({ handleClick }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowPassword1 = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form
    
    
      className="flex flex-col items-center justify-center gap-2"
    >
      <div className="w-[328px] h-[328px] bg-white rounded-[10px] shadow-cardShadow flex">
   
        <div className="flex flex-col  mt-2">
        <div className="group">
            <label
              className="font-semibold text-xs leading-[15px] pl-2 invisible group-hover:visible group-hover:text-[#39528D]"
              htmlFor="email"
            >
              Correo electrónico
            </label>
            <input
              id="email"
              className="font-medium text-base leading-[16px] placeholder:text-black h-[32px] w-[272px] pl-2 focus:outline-none border-b-2 border-black group-hover:border-[#39528D] placeholder:focus-visible:invisible"
              type="text"
              // onChange={handleChange}
              placeholder="Correo electrónico"
              name="email"
            />
          </div>
          
          <div className="group">
            <label
              className="font-semibold text-xs leading-[15px] pl-2 invisible group-hover:visible group-hover:text-[#39528D]"
              htmlFor="email"
            >
              DNI
            </label>
            <input
              id="dni"
              className="font-medium text-base leading-[16px] placeholder:text-black h-[32px] w-[272px] pl-2 focus:outline-none border-b-2 border-black group-hover:border-[#39528D] placeholder:focus-visible:invisible"
              type="text"
              // onChange={handleChange}
              placeholder="DNI"
              name="dni"
            />
          </div>
          <div className="group">
            <label
              className="font-semibold text-xs leading-[15px] pl-2 invisible group-hover:visible group-hover:text-[#39528D]"
              htmlFor="email"
            >
              Contraseña
            </label>
            <input
              id="contraseña"
              className="font-medium text-base leading-[16px] placeholder:text-black h-[32px] w-[272px] pl-2 focus:outline-none border-b-2 border-black group-hover:border-[#39528D] placeholder:focus-visible:invisible"
              type="text"
              placeholder="contraseña"
              name="contraseña"
            />
          </div>
          <div className="relative flex group">
            <div>
              <label
                className="font-semibold text-xs leading-[15px] pl-2 invisible group-hover:visible group-hover:text-[#39528D]"
                htmlFor="pass"
              >
                Confirmar contraseña
              </label>
              <input
                id="pass"
                className="font-medium text-base leading-[16px] placeholder:text-black h-[32px] w-[272px] pl-2 focus:outline-none border-b-2 border-black block group-hover:border-[#39528D] placeholder:focus-visible:invisible"
                type={showPassword ? "text" : "password"}
                placeholder="confirmar contraseña"
                name="confirmar contraseña"
              />
              {showPassword ? (
                <AiOutlineEye
                  onClick={toggleShowPassword}
                  className="absolute w-8 h-8 bottom-2 right-8 group-hover:text-[#39528D]"
                />
              ) : (
                <AiOutlineEyeInvisible
                  onClick={toggleShowPassword}
                  className="absolute w-8 h-8 bottom-2 right-8 group-hover:text-[#39528D]"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="text-lg font-semibold leading-[22px] text-white w-[328px] h-[48px] bg-[#10224D] rounded-[10px]"
      >
        Registrate
      </button>
      <div className="flex items-center justify-center gap-2 mt-2">
        <p className="text-sm font-semibold leading-[17px]">
        ¿ya tenes cuenta?
        </p>
        <Link to="/login">
          <p className="text-[#6F0B19] text-sm leading-[17px] font-semibold">
            ACCEDER
          </p>
        </Link>
      </div>
    </form>
    // <div className="flex  flex-col bg-[#ECEBF6] justify-center px-6  ">
    //   <div className="bg-white rounded-md shadow-inner  ">
    //     <form className="space-y-6 p-2">
    //       <div className="group flex justify-center items-center">
    //         <AiOutlineInfoCircle
    //           onClick={handleClick}
    //           className="w-8 h-8 text-[#6F0B19]"
    //         />
    //         <div className="relative">
    //           <label
    //             className="font-semibold text-xs leading-[15px] pl-2 invisible group-hover:visible group-hover:text-[#39528D]"
    //             htmlFor="email"
    //           >
    //             Correo electrónico
    //           </label>
    //           <input
    //             id="Correo electrónico"
    //             className="font-medium text-base leading-[16px] placeholder:text-black h-[32px] w-[272px] pl-2 focus:outline-none border-b-2 border-black group-hover:border-[#39528D] placeholder:focus-visible:invisible"
    //             type="text"
    //             placeholder="Correo electrónico"
    //           />
    //         </div>
    //       </div>
    //       <div className="group flex justify-center items-center">
    //         <AiOutlineInfoCircle

    //           className="w-6 h-6  text-[#6F0B19]"
    //         />
    //         <div className="relative">
    //           <label className="font-semibold text-xs leading-[15px] pl-2 invisible group-hover:visible group-hover:text-[#39528D]">
    //             DNI
    //           </label>
    //           <input
    //             id="dni"
    //             className="font-medium text-base leading-[16px] placeholder:text-black h-[32px] w-[272px] pl-2 focus:outline-none border-b-2 border-black group-hover:border-[#39528D] placeholder:focus-visible:invisible"
    //             type="text"
    //             placeholder="DNI"
    //           />
    //         </div>
    //       </div>
    //       <div className="group flex justify-center items-center ">
    //         <AiOutlineInfoCircle className="w-8 h-6   text-[#6F0B19]" />
    //         <div className="relative">
    //           <label className="font-semibold text-xs leading-[15px] pl-2 invisible group-hover:visible group-hover:text-[#39528D]">
    //             Contraseña
    //           </label>

    //           <input
    //             id="contraseña"
    //             className="font-medium text-base leading-[16px] placeholder:text-black h-[32px] w-[272px] pl-2 focus:outline-none border-b-2 border-black group-hover:border-[#39528D] placeholder:focus-visible:invisible"
    //             type={showPassword ? "text" : "password"}
    //             placeholder="Contraseña"
    //           />

    //           {showPassword ? (
    //             <AiOutlineEye
    //               onClick={toggleShowPassword}
    //               className="absolute w-8 h-8 bottom-2 right-2 group-hover:text-[#39528D]"
    //             />
    //           ) : (
    //             <AiOutlineEyeInvisible
    //               onClick={toggleShowPassword}
    //               className="absolute w-8 h-8 bottom-2 right-2 group-hover:text-[#39528D]"
    //             />
    //           )}
    //         </div>
    //       </div>
    //       <div className="group flex justify-center items-center">
    //         <AiOutlineInfoCircle className="w-8 h-8  text-[#6F0B19]" />
    //         <div className="relative">
    //           <label
    //             className="font-semibold text-xs leading-[15px] pl-2 invisible group-hover:visible group-hover:text-[#39528D]"
    //             htmlFor="email"
    //           >
    //             Confirmar contraseña
    //           </label>
    //           <input
    //             id="confirmar contraseña"
    //             className="font-medium text-base leading-[16px] placeholder:text-black h-[32px] w-[272px] pl-2 focus:outline-none border-b-2 border-black group-hover:border-[#39528D] placeholder:focus-visible:invisible"
    //             type="password"
    //             placeholder="Confirmar contraseña"
    //           />
    //           {showPassword ? (
    //             <AiOutlineEye
    //               onClick={toggleShowPassword}
    //               className="absolute w-8 h-8 bottom-2 right-2 group-hover:text-[#39528D]"
    //             />
    //           ) : (
    //             <AiOutlineEyeInvisible
    //               onClick={toggleShowPassword}
    //               className="absolute w-8 h-8 bottom-2 right-2 group-hover:text-[#39528D]"
    //             />
    //           )}
    //         </div>
    //       </div>
    //     </form>
    //   </div>
    //   <button
    //     type="submit"
    //     className="flex w-full mt-4 justify-center rounded-md bg-[#10224D] px-3 py-1.5 text-sm font-semibold leading-6 text-white "
    //   >
    //     Crear cuenta
    //   </button>
    //   <div className="flex items-center justify-center gap-2 mt-2">
    //     <p className="text-sm font-semibold leading-[17px]">
    //       ¿ya tenes cuenta?
    //     </p>
    //     <Link to="/login">
    //       <p className="text-[#6F0B19] text-sm leading-[17px] font-semibold">
    //         ACCEDER
    //       </p>
    //     </Link>
    //   </div>
    // </div>
  );
};

export default FormRegister;
