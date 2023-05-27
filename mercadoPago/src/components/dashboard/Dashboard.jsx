import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

import { CgProfile } from "react-icons/cg";

import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineWallet, AiOutlineSend } from "react-icons/ai";
import { FiHelpCircle,FiLogOut  } from "react-icons/fi";
import { BsLink, BsQrCode } from "react-icons/bs";
import { MdOutlineReceipt } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { Link } from "react-router-dom";

import TopbarDashboard from "./topbar-dashboard";

const Dashboard = () => {
  const menus = [
    { name: "Inicio", link: "/", icon: AiOutlineHome },
    { name: "Perfil", link: "/profile", icon: CgProfile },
    { name: "Ayuda", link: "/", icon: FiHelpCircle },
    { name: "Tu dinero", link: "/money", icon: AiOutlineWallet, margin: true },
    { name: "Actividad", link: "/", icon: MdOutlineReceipt },
    { name: "Enviar dinero", link: "/", icon: AiOutlineSend },
    { name: "Prestamos", link: "/", icon: GiReceiveMoney, margin: true },
    { name: "Link de pago", link: "/", icon: BsLink },
    { name: "Generar QR", link: "/", icon: BsQrCode,  },
    { name: "Salir", link: "/", icon: FiLogOut,  margin: true },
  ];
  const [open, setOpen] = useState(false);
  return (
    <section className="flex gap-6 bg-white">
      <div
        className={` min-h-screen  ${
          open ? "w-64 bg-[#ECEBF6]   " : "w-16  "
        } duration-500 text-black-100 px-4 op  `}
      >
        <div className="py-3 flex justify-end">
          
          <HiMenuAlt3
            size={26}
            className="cursor-pointer   "
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="  mt-4 flex flex-col gap-1 relative  ">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={`  ${
                menu?.margin && "mt-5  "
              } group    flex items-center text-sm  gap-3.5 font-medium p-2  rounded-md`}
            >
              <div
                className={`whitespace-pre duration-500     ${
                  !open && "opacity-0 translate-x-28 overflow-hidden "
                }`}
              >
                {React.createElement(menu?.icon, { size: "20" })}
              </div>

              <h2
                style={{
                  transitionDelay: `${i + 2}00ms`,
                }}
                className={`whitespace-pre duration-300  ${
                  !open && "opacity-0 translate-x-28 overflow-hidden "
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-[#10224D] font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
