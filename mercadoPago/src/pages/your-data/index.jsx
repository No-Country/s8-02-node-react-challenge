import { useSelector } from "react-redux";
import { AccountData } from "../../components/yourData/AccountData";
import { PersonalDataForm } from "../../components/yourData/PersonalDataForm";
import { sliceEmail } from "../../helpers/sliceEmail";
import { useEffect } from "react";
import axios from "axios";

const YourData = () => {
  const { userLogin } = useSelector((state) => state.auth.user);
  const { alias, email, fullName, dni } = userLogin;
  const data = [
    { usuario: fullName || sliceEmail(email) },
    { "Correo electrónico": email },
    { alias },
  ];

  const fetching = async () => {
    const request = await fetch(
      "https://api-wallet.onrender.com/auth/user/login",
      {
        method: "POST",
        body: JSON.stringify({
          email: "yannokaise@gmail.com",
          password: "123456789",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await request.json();
    return result;
  };
  useEffect(() => {
    /*  fetching().then((el) => console.log(el)); */
    axios
      .post("https://api-wallet.onrender.com/auth/user/login", {
        email: "yannokaise@gmail.com",
        password: "123456789",
      })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, []);

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
