import React from "react";

const register = () => {
  return (
    <div className="flex min-h-full flex-col bg-[#ECEBF6] justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
          ¡Bienvenido a <span className="text-[#10224D]">Wallet</span>
          <spam className="text-[#6F0B19]">pay!</spam>{" "}
        </h2>

        <h1 className="text-center text-1xl font-bold ">
          Registrate hoy y haz tu vida mas facil.
        </h1>
      </div>

      <div className="bg-white rounded-md shadow-inner mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6 p-8">
          <div>
            <div className="mt-2">
              <input
                placeholder="Correo electronico"
                className="border-b-2 border-b-stone-900 py-1 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between"></div>
            <div className="mt-2">
              <input
                placeholder="DNI"
                className="border-b-2 border-b-neutral-900 py-1 focus:outline-none"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between"></div>
            <div className="mt-2">
              <input
                placeholder="Contraseña"
                className="border-b-2 border-b-stone-900 py-1 focus:outline-none"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between"></div>
            <div className="mt-2">
              <input
                placeholder="Confirmar contraseña"
                className="border-b-2 border-b-stone-900 py-1 focus:outline-none"
              />
            </div>
          </div>

          <div></div>
        </form>
      </div>
      <div>
        <button
          type="submit"
          class="flex w-full mt-4 justify-center rounded-md bg-[#10224D] px-3 py-1.5 text-sm font-semibold leading-6 text-white "
        >
          Crear cuenta
        </button>
      </div>
    </div>
  );
};

export default register;
