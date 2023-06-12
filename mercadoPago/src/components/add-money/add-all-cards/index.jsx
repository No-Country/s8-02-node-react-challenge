import CardDebito from "./card-debito";
import americanexpress from "../../../assets/cards/americanexpress.svg";
import visa from "../../../assets/cards/visa.svg";
import mastercard from "../../../assets/cards/mastercard.svg";
import { useSelector } from "react-redux";

const AddAllCards = ({ onNext, setDataForm }) => {
  const { user } = useSelector((state) => state.auth);
  const { cards } = user?.update;

  const handleClick = (number, cvv, bank) => {
    console.log(number);

    setDataForm((prev) => ({
      ...prev,
      cardNumber: number,
      cvv: cvv,
      bank: bank,
    }));
    onNext();
  };

  return (
    <div className="flex flex-col justify-center items-center gap-[16px] mt-6 ">
      {cards?.map((el) => (
        <div
          key={el._id}
          onClick={() => handleClick(el.user_number, el.cvv, el.bank)}
        >
          <CardDebito
            setDataForm={setDataForm}
            number={el.user_number}
            image={visa}
            background1="linear-gradient(90deg, rgba(143,42,240,1) 33%, rgba(173,97,245,1) 66%)"
          />
        </div>
      ))}
      {/* <div onClick={onNext}>
        <CardDebito
          image={mastercard}
          background1="linear-gradient(90deg, rgba(14,181,237,1) 33%, rgba(94,210,248,1) 66%)"
        />
      </div>
      <div onClick={onNext}>
        <CardDebito
          image={americanexpress}
          background1="linear-gradient(90deg, rgba(197,164,82,1) 33%, rgba(246,219,145,1) 66%)"
        />
      </div> */}
    </div>
  );
};

export default AddAllCards;
