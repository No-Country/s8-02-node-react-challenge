import React from "react";
import { Link } from "react-router-dom";


const FormRegister = () => {


  return (
    <div className="flex  flex-col bg-[#ECEBF6] justify-center px-6  ">
      <div className="bg-white rounded-md shadow-inner  ">
        <form className="space-y-6 p-8">
          <div className="group">
            <label
              className="font-semibold text-xs leading-[15px] pl-2 invisible group-hover:visible group-hover:text-[#39528D]"
              htmlFor="email"
            >
              Correo electrónico
            </label>
            <input
              id="Correo electrónico"
              className="font-medium text-base leading-[16px] placeholder:text-black h-[32px] w-[272px] pl-2 focus:outline-none border-b-2 border-black group-hover:border-[#39528D] placeholder:focus-visible:invisible"
              type="text"
              placeholder="Correo electrónico"
             
            />
          </div>
          <div className="group">
            <label
              className="font-semibold text-xs leading-[15px] pl-2 invisible group-hover:visible group-hover:text-[#39528D]"
             
            >
              DNI
            </label>
            <input
              id="dni"
              className="font-medium text-base leading-[16px] placeholder:text-black h-[32px] w-[272px] pl-2 focus:outline-none border-b-2 border-black group-hover:border-[#39528D] placeholder:focus-visible:invisible"
              type="text"
              placeholder="DNI"
            />
          </div>
          <div className="group">
            <label
              className="font-semibold text-xs leading-[15px] pl-2 invisible group-hover:visible group-hover:text-[#39528D]"
           
            >
              Contraseña
            </label>

            <input
            
              id="contraseña"
              className="font-medium text-base leading-[16px] placeholder:text-black h-[32px] w-[272px] pl-2 focus:outline-none border-b-2 border-black group-hover:border-[#39528D] placeholder:focus-visible:invisible"
             type="password"
              placeholder="Contraseña"
            />
            
           
          </div>
          <div className="group">
            <label
              className="font-semibold text-xs leading-[15px] pl-2 invisible group-hover:visible group-hover:text-[#39528D]"
              htmlFor="email"
            >
              Confirmar contraseña
            </label>
            <input
              id="confirmar contraseña"
              className="font-medium text-base leading-[16px] placeholder:text-black h-[32px] w-[272px] pl-2 focus:outline-none border-b-2 border-black group-hover:border-[#39528D] placeholder:focus-visible:invisible"
              type="password"
              placeholder="Confirmar contraseña"
            />
          </div>
        </form>
      </div>
      <button
          type="submit"
          className="flex w-full mt-4 justify-center rounded-md bg-[#10224D] px-3 py-1.5 text-sm font-semibold leading-6 text-white "
        >
          Crear cuenta
        </button>
      <div>
        
      </div>
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
    </div>
  );
};

export default FormRegister;
