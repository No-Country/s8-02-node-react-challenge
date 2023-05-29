import { useSelector } from "react-redux";
import { AccountData } from "../../components/yourData/AccountData";
import { PersonalDataForm } from "../../components/yourData/PersonalDataForm";
import { sliceEmail } from "../../helpers/sliceEmail";
import { useState } from "react";
import { Modal } from "../../components/yourData/Modal";

const YourData = () => {
  const { userLogin } = useSelector((state) => state.auth.user);
  const { alias, email, fullname, dni, phone } = userLogin;
  const data = [
    { Usuario: fullname || sliceEmail(email) },
    { "Correo electrónico": email },
    { Alias: alias },
  ];
  const [modal, setModal] = useState(false);
  /* modal = ["correo", "ejemplo@ejemplo.com" ] */
  const handleModal = (val) => {
    setModal(val || false);
  };

  return (
    <section className="min-w-[340px] px-4 py-5 flex flex-col">
      <article className="bg-white px-3 py-4 rounded-md shadow-md w-full max-w-[600px]">
        <AccountData data={data} modal={modal} handleModal={handleModal} />
      </article>
      <article className="bg-white px-3 py-4 rounded-md shadow-md mt-5 w-full max-w-[600px]">
        <PersonalDataForm
          dni={dni}
          phone={phone}
          modal={modal}
          handleModal={handleModal}
        />
      </article>
      {modal && (
        <Modal type={modal[0]} modal={modal} handleModal={handleModal} />
      )}
    </section>
  );
};

export default YourData;
