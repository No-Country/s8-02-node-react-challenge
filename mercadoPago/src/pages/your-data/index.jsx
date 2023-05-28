import { useSelector } from "react-redux";
import { AccountData } from "../../components/yourData/AccountData";
import { PersonalDataForm } from "../../components/yourData/PersonalDataForm";
import { sliceEmail } from "../../helpers/sliceEmail";

const YourData = () => {
  const { userLogin } = useSelector((state) => state.auth.user);
  const { alias, email, fullName, dni } = userLogin;
  const data = [
    { usuario: fullName || sliceEmail(email) },
    { "Correo electrónico": email },
    { alias },
  ];

  return (
    <section className="min-w-[340px] px-4 py-5">
      <div className="bg-white px-3 py-4 rounded-md shadow-md">
        <AccountData data={data} />
      </div>
      <div className="bg-white px-3 py-4 rounded-md shadow-md mt-5">
        <PersonalDataForm dni={dni} />
      </div>
    </section>
  );
};

export default YourData;
