/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { patchUser } from "../../../services/patchUser";
import { updateData } from "../../features/auth/authSlice";
import { renameInputs } from "../../helpers/renameInputs";
import { PasswordInputs } from "./PasswordInputs";

// eslint-disable-next-line react/prop-types
export const FormModal = ({ placeholder, type, handleModal }) => {
  const { user } = useSelector((state) => state.auth);
  const [error, setError] = useState(false);
  const [phoneNum, setphoneNum] = useState("");

  const dispatch = useDispatch();
  const noPassType = type !== "Contraseña";

  const { token, userLogin } = user;

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = "";
    if (noPassType) {
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

      /* PETICION PARA COMPROBAR ANTIGUA */
      data = nueva;
    }

    if (error === false) {
      let name = renameInputs(type);

      const values = {
        [name]: data,
      };
      console.log(values);

      patchUser(userLogin._id, values, token.token)
        .then(({ data }) => {
          dispatch(updateData(data.user));
          setTimeout(() => handleModal(false), 1000);
        })
        .catch((err) => console.log(err));
    }
  };

  const order = (n) => {
    /* 011 2345-6789 */
    if (n.length > 3) {
      const num = n.replace(/\D/g, "");
      let code = num.slice(0, 3);
      let number = num
        .slice(3)
        .replace(/([0-9]{4})/g, "$1-")
        .trim();
      if (number[number.length - 1] === "-") {
        number = number.slice(0, -1);
      }
      return code + " " + number;
    } else return n;
  };

  return (
    <form onSubmit={handleSubmit}>
      {noPassType && type !== "phone" && type !== "Agregar teléfono" ? (
        <input
          type={type !== "Correo electrónico" ? "text" : "email"}
          className="p-2 my-4 border-[#63c5e9] border rounded-lg w-full "
          placeholder={placeholder}
        />
      ) : (
        !noPassType && <PasswordInputs />
      )}

      {type == "Agregar teléfono" && (
        <>
          <label className=" text-xs font-medium" htmlFor="number">
            Teléfono
          </label>
          <input
            type="text"
            className="  appearance-textfield  p-2 my-4 mt-2 border-[#63c5e9] border rounded-lg w-full "
            name="phone"
            id="number"
            value={phoneNum}
            minLength="13"
            maxLength="16"
            onChange={(e) => setphoneNum(order(e.target.value))}
          />
          <p className=" text-xs">Código de area + N°. Ejemplo: 011 2345-678</p>

          <div className="text-[#9f3c3c] h-[16px] mb-2 text-sm translate-y-[-5px]">
            {error}
          </div>
          <div className="flex">
            <button
              type="submit"
              className="font-semibold w-[50%] bg-[#10224D] text-white p-2 rounded-lg"
            >
              Guardar
            </button>

            <button
              type="submit"
              onClick={() => handleModal(false)}
              className=" font-semibold w-[50%] text-[#10224D] p-2 rounded-lg"
            >
              Cancelar
            </button>
          </div>
        </>
      )}

      {type != "Agregar teléfono" && (
        <>
          <div className="text-[#9f3c3c] h-[16px] mb-2 text-sm translate-y-[-5px]">
            {error}
          </div>
          <button
            type="submit"
            className="font-semibold w-full bg-[#10224D] text-white p-2 rounded-lg"
          >
            Confirmar cambios
          </button>
        </>
      )}
    </form>
  );
};
