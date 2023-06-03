import React from "react";
import { Link } from "react-router-dom";


const Transfer = () => {
  return (
    <>

      <div className="flex flex-col gap-4 justify-center bg-[#ECEBF6] py-[16px] px-4">
        <div className="rounded-lg bg-white shadow-cardShadow  mb-[20px] h-[152px]">
          <h2 className="font-semibold text-lg ml-4  pt-4 mb-6 ">
            Elegí a qué cuenta transferir
          </h2>
          <hr className=" m-auto border-[#33333366]  " />
          <Link to="/transfer/addacoount">
            <div className="flex items-center p-4">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.9951 31.6666C19.6002 31.6666 19.2709 31.5336 19.007 31.2674C18.7431 31.0011 18.6111 30.6713 18.6111 30.2778V21.3889H9.72222C9.32872 21.3889 8.99886 21.2553 8.73263 20.9881C8.46644 20.721 8.33334 20.39 8.33334 19.9951C8.33334 19.6002 8.46644 19.2708 8.73263 19.0069C8.99886 18.743 9.32872 18.6111 9.72222 18.6111H18.6111V9.72219C18.6111 9.32869 18.7447 8.99883 19.0118 8.7326C19.279 8.46641 19.61 8.33331 20.0049 8.33331C20.3998 8.33331 20.7292 8.46641 20.9931 8.7326C21.2569 8.99883 21.3889 9.32869 21.3889 9.72219V18.6111H30.2778C30.6713 18.6111 31.0012 18.7447 31.2674 19.0118C31.5336 19.279 31.6667 19.61 31.6667 20.0049C31.6667 20.3997 31.5336 20.7291 31.2674 20.993C31.0012 21.2569 30.6713 21.3889 30.2778 21.3889H21.3889V30.2778C21.3889 30.6713 21.2553 31.0011 20.9882 31.2674C20.721 31.5336 20.39 31.6666 19.9951 31.6666Z"
                  fill="black"
                />
              </svg>
              <div className="flex w-full justify-between">
                <div className="font-medium text-[12px] ml-4  ">
                  <h2 className="">Nueva cuenta</h2>
                  <span className="text-[#33333366]">con CBU, CVU o alias</span>
                </div>
              </div>
              <svg
                width="14"
                height="24"
                viewBox="0 0 14 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.49471 23.5053C0.177078 23.1407 0.0123851 22.7171 0.000632698 22.2348C-0.011155 21.7525 0.153538 21.3408 0.49471 20.9996L9.45903 12.0353L0.4594 3.03569C0.141768 2.71805 -0.011155 2.30042 0.000632698 1.78278C0.0123851 1.26518 0.177078 0.84757 0.49471 0.529937C0.859387 0.16526 1.27702 -0.011202 1.74761 0.000550377C2.21816 0.0123028 2.62403 0.188765 2.9652 0.529937L13.2353 10.8C13.4235 10.9883 13.5559 11.1824 13.6323 11.3824C13.7088 11.5824 13.747 11.8 13.747 12.0353C13.747 12.2706 13.7088 12.4882 13.6323 12.6882C13.5559 12.8882 13.4235 13.0823 13.2353 13.2705L3.00046 23.5053C2.65932 23.8465 2.24758 24.0112 1.76524 23.9994C1.2829 23.9877 0.859387 23.823 0.49471 23.5053Z"
                  fill="#333333"
                  fillOpacity="0.4"
                />
              </svg>
            </div>
          </Link>
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
                  fillOpacity="0.2"
                />
                <rect
                  x="1"
                  y="1"
                  width="114"
                  height="118"
                  rx="9"
                  stroke="#696969"
                  strokeOpacity="0.2"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <p className=" p-6 px-8 text-[16px] text-center font-medium leading-4 ">
              Aca verás las cuentas a las que hayas transferido dinero.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transfer;
