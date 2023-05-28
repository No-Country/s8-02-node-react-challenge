/* eslint-disable react/prop-types */
import { useState } from "react";
import { Modal } from "./Modal";
import { File } from "./File";

/* /auth/user/updatepass/id */

export const AccountData = ({ data }) => {
  const [modal, setModal] = useState(false);
  /* modal = ["correo", "ejemplo@ejemplo.com" ] */

  const handleModal = (val) => {
    setModal(val || false);
  };

  return (
    <div>
      <h2 className="text-[#39528D] font-semibold mb-2">Datos de la cuenta</h2>

      <hr />
      <div className="flex flex-col ">
        {data.map((el, i) => {
          const name = Object.keys(el)[0];
          const value = Object.values(el)[0];
          return (
            <File handleModal={handleModal} name={name} value={value} key={i} />
          );
        })}
        <File
          handleModal={handleModal}
          name={"Contraseña"}
          value={"*************"}
        />
      </div>
      {modal && (
        <Modal type={modal[0]} modal={modal} handleModal={handleModal} />
      )}
    </div>
  );
};
