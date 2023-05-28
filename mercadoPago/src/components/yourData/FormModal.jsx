/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useSelector } from "react-redux";
import { patchUser } from "../../../services/patchUser";
import axios from "axios";

// eslint-disable-next-line react/prop-types
export const FormModal = ({ placeholder, type }) => {
  const { user } = useSelector((state) => state.auth);
  const [error, setError] = useState(false);

  const { token, userLogin } = user;

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = "";
    if (type !== "Contraseña") {
      const { value } = e.target[0];
      data = value;
      if (value.trim().length <= 2) {
        return setError("Pocos caracteres");
      } else {
        setError(false);
      }
    } else {
      const [actual, nueva, confirmar] = e.target;
      nueva.value !== confirmar.value
        ? setError("Las contraseñas deben ser iguales")
        : setError(false);
    }

    if (error === false) {
      const values = {
        [type]: data,
      };

      /*  patchUser(userLogin._id, values, token.token)
        .then((resp) => console.log(resp))
        .catch((err) => console.log(err)); */
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {type !== "Contraseña" ? (
        <input
          type={type !== "Correo electrónico" ? "text" : "email"}
          name=""
          id=""
          className="p-2 my-4 border-[#63c5e9] border rounded-lg w-full "
          placeholder={placeholder}
        />
      ) : (
        <>
          <input
            type="password"
            className="p-2 my-2 border-[#63c5e9] border rounded-lg w-full "
            placeholder="Contraseña"
          />
          <input
            type="password"
            className="p-2 my-2 border-[#63c5e9] border rounded-lg w-full "
            placeholder="Nueva Contraseña"
          />
          <input
            type="password"
            className="p-2 my-2 border-[#63c5e9] border rounded-lg w-full "
            placeholder="Repetir"
          />
        </>
      )}
      <div className="text-[#9f3c3c] h-[16px] mb-2 text-sm translate-y-[-5px]">
        {error}
      </div>

      <button
        type="submit"
        className=" w-full bg-[#10224D] text-white p-2 rounded-lg"
      >
        Confirmar cambios
      </button>
    </form>
  );
};
