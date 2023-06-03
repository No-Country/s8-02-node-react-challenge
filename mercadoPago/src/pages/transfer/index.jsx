import React from "react";
import { Link } from "react-router-dom";

const Transfer = () => {
  return (
    <div className="flex flex-col gap-4 justify-center bg-[#ECEBF6] py-[16px] px-4">
      <div className="rounded-lg bg-white shadow-cardShadow  mb-[20px] h-[152px]">
        <h2 className="font-semibold text-lg ml-4  pt-4 mb-6 ">
          Elegí a qué cuenta transferir
        </h2>
        <hr className=" m-auto border-[#33333366]  " />
      </div>

      <div className="flex-col  shadow-cardShadow ">
        <div className="bg-white w-full rounded-lg h-[304px] ">
          <h2 className="font-semibold text-lg ml-4  pt-4 mb-6 ">
            Cuentas recientes
          </h2>
          <hr className=" m-auto border-[#33333366]  " />
          <div className="flex justify-center mt-[56px]">
            <svg
              className=" "
              width="116"
              height="120"
              viewBox="0 0 116 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="116"
                height="120"
                rx="10"
                fill="#AACCFF"
                fill-opacity="0.2"
              />
              <rect
                x="1"
                y="1"
                width="114"
                height="118"
                rx="9"
                stroke="#696969"
                stroke-opacity="0.2"
                stroke-width="2"
              />
            </svg>
          </div>
          <p>holaaaa
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
