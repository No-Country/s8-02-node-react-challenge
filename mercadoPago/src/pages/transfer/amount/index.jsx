import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import { useLocation, useNavigate } from "react-router-dom";
import { formatPrice } from "../../../helpers/formatPrice";

export const Amount = () => {
  const { user } = useSelector((state) => state.auth);
  const { state } = useLocation();

  const balance = user?.update?.balance || 0;

  const [inputAmount, setinputAmount] = useState("");

  const inputRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputAmount > 0 && inputAmount <= balance) {
      const data = state;
      data.amount = inputAmount;

      navigate("/transfer/preconfirm", {
        state: data,
      });
    }
  };

  useEffect(() => {
    let width = Number(inputAmount.length) + "ch";
    inputRef.current.style.width = width;
  }, [inputAmount]);

  return (
    <section className="flex min-w-[340px] flex-col items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="p-4 w-full h-full flex flex-col max-w-[450px]"
      >
        <div className="bg-white py-5 px-4 text-center font-semibold rounded-[10px]">
          <h1 className="  text-lg">¿Cuanto querés transferir?</h1>
          <div className="w-full flex justify-center items-center">
            <span>$</span>
            <input
              ref={inputRef}
              type="text"
              name="amount"
              placeholder="0"
              inputMode="decimal"
              onChange={(e) => {
                const { value } = e.target;
                const valFormat = value.replace(/\D/g, "");

                setinputAmount(valFormat);
              }}
              value={inputAmount}
              className=" inline-block text-[40px] min-w-[1ch] outline-none"
            />
          </div>
          <p className=" font-medium text-[#33333366]">
            {formatPrice(balance)} disponibles
          </p>
        </div>
        <button
          type="submit"
          className=" bg-[#10224D] p-2 text-white mt-3 rounded-[10px]"
        >
          Continuar
        </button>
      </form>
    </section>
  );
};
