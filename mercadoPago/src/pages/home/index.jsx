import { Link } from "react-router-dom";
import Empty from "../../components/activity/Empty";
import Item from "../../components/activity/Item";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Layout from "../../components/layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const monto = user?.update.balance;
  const navigate = useNavigate();

  //Mostrar o no la contraseña
  const [isShow, setIsShow] = useState(false);

  //Separar el monto, la parte entera y decimal
  function separarEnterosDecimales(num) {
    let parteEntera = Math.floor(num);
    let parteDecimal = ((num - parteEntera) * 100).toFixed(0);

    return [parteEntera, parteDecimal];
  }

  let entero = separarEnterosDecimales(monto);
  let decimal = separarEnterosDecimales(monto);

  const [data, setData] = useState([]);
  const [error, setError] = useState("e");
  const [isLoading, setIsLoading] = useState(true);

  //Token provisional
  //let token2 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDc2YjU1YzI4Y2I5N2FhZWJiNzliZDMiLCJpYXQiOjE2ODU1NjQwNDMsImV4cCI6MTc3MTk2NDA0M30.fMWtq__N1sSKJlqJWdfp2TCi_j7evok6be2CGPDaWp8";


  const token = user.token.token;
  const id = user.update._id;

  useEffect(() => {
    setIsLoading(true);
    const instance = axios.create({
      baseURL: "https://api-wallet.onrender.com",
      headers: { Authorization: token },
    });

    instance
      .get(`/auth/activity/activities/${id}`) //.UserAccountId
      .then((response) => {
        setIsLoading(false);
        setData(response.data.activities);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.response.data.error);
      })
  }, []);

  let tam = data.length;
  let dataView = data[--tam];

  const hourSlice = () => {
    return dataView?.updatedAt.slice(11, -8);
  };

  return (
    <>
      <Layout>
        {
          isLoading ? <Loader/> : (
          <div className="flex flex-col gap-4 justify-center font-Montserrat bg-[#ECEBF6] py-[16px] px-4 max-w-[700px]  m-auto">
            <div className="rounded-lg bg-white shadow-cardShadow h-40 mb-[20px]">
              <div className="flex justify-between items-center text-sm pt-[21px] pl-[21px] pr-[21px]">
                <p className="font-semibold text-xs">Dinero disponible</p>
                <Link
                  href="#"
                  className="bg-bgButton text-colorButton rounded-md pl-[7px] pr-[7px] text-center text-[12px] font-semibold"
                >
                  {" "}
                  Tu CVU{" "}
                </Link>
              </div>
              <div className="font-semibold flex justify-between -mt-2 pr-[21px] pl-[21px]">
                <div className="pt-[13px] w-full">
                  <div className="flex items-center">
                    <p className="text-[16px]">
                      {isShow ? "$ ***" : `$ ${entero[0]}`}
                      <span
                        className="text-xs"
                        style={{ display: `${isShow ? "none" : "inline"}` }}
                      >
                        .{decimal[1]}
                      </span>
                    </p>
                    {isShow ? (
                      <svg
                        className="ml-[22.35px] cursor-pointer"
                        onClick={() => setIsShow(!isShow)}
                        width="25"
                        height="17"
                        viewBox="0 0 25 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.3565 13.1177C13.6915 13.1177 14.8255 12.6505 15.7585 11.716C16.6915 10.7816 17.1581 9.64684 17.1581 8.31189C17.1581 6.97693 16.6908 5.84293 15.7564 4.90991C14.8219 3.97688 13.6872 3.51037 12.3522 3.51037C11.0172 3.51037 9.88325 3.9776 8.95022 4.91207C8.0172 5.84656 7.55068 6.98127 7.55068 8.31622C7.55068 9.65118 8.01792 10.7852 8.95238 11.7182C9.88687 12.6512 11.0216 13.1177 12.3565 13.1177ZM12.35 11.381C11.4969 11.381 10.7732 11.0824 10.1789 10.4852C9.58454 9.88803 9.28739 9.16286 9.28739 8.30971C9.28739 7.45657 9.58599 6.73285 10.1832 6.13854C10.7804 5.54423 11.5056 5.24707 12.3587 5.24707C13.2119 5.24707 13.9356 5.54568 14.5299 6.14289C15.1242 6.74008 15.4214 7.46525 15.4214 8.31841C15.4214 9.17154 15.1227 9.89527 14.5255 10.4896C13.9283 11.0839 13.2032 11.381 12.35 11.381ZM12.3544 16.6281C9.79856 16.6281 7.46754 15.9399 5.36131 14.5635C3.25507 13.187 1.63933 11.3559 0.514084 9.07014C0.456883 8.9787 0.415959 8.86572 0.391312 8.73117C0.366684 8.59662 0.35437 8.45758 0.35437 8.31406C0.35437 8.17054 0.366684 8.0315 0.391312 7.89694C0.415959 7.7624 0.456883 7.64941 0.514084 7.55797C1.63935 5.27219 3.25509 3.44108 5.36131 2.06463C7.46754 0.688191 9.79856 -3.05176e-05 12.3544 -3.05176e-05C14.9102 -3.05176e-05 17.2412 0.688191 19.3474 2.06463C21.4537 3.44108 23.0694 5.27219 24.1947 7.55797C24.2519 7.64941 24.2928 7.7624 24.3174 7.89694C24.3421 8.0315 24.3544 8.17054 24.3544 8.31406C24.3544 8.45758 24.3421 8.59662 24.3174 8.73117C24.2928 8.86572 24.2519 8.9787 24.1947 9.07014C23.0694 11.3559 21.4537 13.187 19.3474 14.5635C17.2412 15.9399 14.9102 16.6281 12.3544 16.6281ZM12.3513 14.7806C14.5396 14.7806 16.5499 14.194 18.3821 13.0208C20.2143 11.8475 21.6107 10.2786 22.5715 8.31406C21.6107 6.34947 20.2153 4.78057 18.3852 3.60734C16.5551 2.43413 14.5459 1.84753 12.3575 1.84753C10.1691 1.84753 8.15884 2.43413 6.32666 3.60734C4.49447 4.78057 3.09185 6.34947 2.11879 8.31406C3.09185 10.2786 4.49343 11.8475 6.32352 13.0208C8.15364 14.194 10.1629 14.7806 12.3513 14.7806Z"
                          fill="black"
                        />
                      </svg>
                    ) : (
                      <svg
                        onClick={() => setIsShow(!isShow)}
                        className="ml-[22.35px] cursor-pointer"
                        width="24"
                        height="22"
                        viewBox="0 0 24 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.2679 11.7229L14.9192 10.3742C15.2948 9.21016 15.0454 8.21246 14.1709 7.38105C13.2964 6.54964 12.3018 6.30331 11.187 6.64204L9.83834 5.2933C10.1524 5.10854 10.4927 4.97306 10.8591 4.88685C11.2256 4.80063 11.6059 4.75751 12 4.75751C13.3364 4.75751 14.4711 5.22403 15.4041 6.15705C16.3372 7.09008 16.8037 8.22479 16.8037 9.5612C16.8037 9.95534 16.7575 10.3387 16.6651 10.7113C16.5727 11.0839 16.4403 11.4211 16.2679 11.7229ZM19.8337 15.2702L18.5589 14.0139C19.3965 13.3918 20.1309 12.7005 20.7621 11.94C21.3934 11.1794 21.8784 10.3865 22.2171 9.5612C21.2933 7.57197 19.9276 5.99691 18.1201 4.83603C16.3126 3.67512 14.3341 3.09467 12.1848 3.09467C11.4888 3.09467 10.7837 3.15626 10.0693 3.27944C9.35487 3.40261 8.76056 3.55658 8.28635 3.74134L6.86372 2.30023C7.54733 1.99847 8.35718 1.7475 9.29329 1.54733C10.2294 1.34719 11.1624 1.24711 12.0924 1.24711C14.6359 1.24711 16.9607 1.93533 19.067 3.31178C21.1732 4.68822 22.7714 6.51886 23.8614 8.8037C23.9169 8.89608 23.9538 9.00847 23.9723 9.14087C23.9908 9.27328 24 9.41339 24 9.5612C24 9.70901 23.9892 9.85219 23.9677 9.99076C23.9461 10.1293 23.9107 10.2448 23.8614 10.3372C23.3995 11.3287 22.8283 12.2402 22.1478 13.0716C21.4673 13.903 20.6959 14.6359 19.8337 15.2702ZM20.425 21.0531L16.4342 17.1362C15.7875 17.3764 15.0839 17.5597 14.3233 17.6859C13.5628 17.8122 12.7883 17.8753 12 17.8753C9.41955 17.8753 7.07005 17.1871 4.95151 15.8106C2.83295 14.4342 1.22864 12.6035 0.138568 10.3187C0.0831409 10.214 0.0461894 10.0985 0.0277136 9.97228C0.00923787 9.84603 0 9.70901 0 9.5612C0 9.41339 0.0123141 9.27175 0.0369423 9.13627C0.0615889 9.00077 0.0954642 8.88683 0.138568 8.79445C0.526559 7.96304 1.01 7.16858 1.58891 6.41108C2.16782 5.65357 2.83604 4.94225 3.59354 4.27713L0.886836 1.56119C0.708231 1.38259 0.618928 1.16857 0.618928 0.91915C0.618928 0.669727 0.711307 0.452637 0.896065 0.26788C1.07467 0.0892933 1.2933 0 1.55196 0C1.81062 0 2.02925 0.0892933 2.20783 0.26788L21.7183 19.7783C21.8845 19.9446 21.9692 20.1493 21.9723 20.3926C21.9754 20.6359 21.8907 20.8499 21.7183 21.0346C21.552 21.2255 21.3395 21.321 21.0808 21.321C20.8222 21.321 20.6036 21.2317 20.425 21.0531ZM4.86837 5.57041C4.23402 6.0631 3.63048 6.67589 3.05773 7.40877C2.48498 8.14164 2.05388 8.85912 1.76442 9.5612C2.70053 11.5504 4.08775 13.1255 5.92609 14.2864C7.76443 15.4473 9.83833 16.0277 12.1478 16.0277C12.6774 16.0277 13.1978 15.9954 13.709 15.9307C14.2202 15.8661 14.6359 15.7752 14.9562 15.6582L13.4411 14.1247C13.2379 14.2048 13.0069 14.2648 12.7483 14.3048C12.4896 14.3449 12.2402 14.3649 12 14.3649C10.6759 14.3649 9.54426 13.9015 8.60508 12.9746C7.6659 12.0477 7.19631 10.9099 7.19631 9.5612C7.19631 9.30869 7.21633 9.05927 7.25637 8.81293C7.29639 8.56658 7.35643 8.33563 7.43651 8.12009L4.86837 5.57041Z"
                          fill="black"
                        />
                      </svg>
                    )}
                  </div>
                  <p className="text-xs pb-[10px] pt-[15px]">
                    {isShow ? "$ ***" : "$ 0,00"} a liquidar
                  </p>
                </div>
                <Link to={"/money"} className="mt-[14px]">
                  <svg
                    className="w-[6.87px] h-3 mt-3 text-border mr-[6px]"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.747355 11.7527C0.588539 11.5703 0.506193 11.3586 0.500316 11.1174C0.494423 10.8762 0.576769 10.6704 0.747355 10.4998L5.22952 6.01763L0.7297 1.51784C0.570884 1.35903 0.494423 1.15021 0.500316 0.891392C0.506193 0.632592 0.588539 0.423785 0.747355 0.264969C0.929694 0.0826302 1.13851 -0.00560101 1.3738 0.000275188C1.60908 0.00615138 1.81201 0.0943826 1.9826 0.264969L7.11765 5.40002C7.21176 5.49413 7.27794 5.59118 7.31617 5.69119C7.3544 5.79119 7.37351 5.9 7.37351 6.01763C7.37351 6.13528 7.3544 6.2441 7.31617 6.3441C7.27794 6.44409 7.21176 6.54114 7.11765 6.63527L2.00023 11.7527C1.82966 11.9233 1.62379 12.0056 1.38262 11.9997C1.14145 11.9938 0.929694 11.9115 0.747355 11.7527Z"
                      fill="#333333"
                    />
                  </svg>
                </Link>
              </div>
              <hr className="w-[90%] m-auto border-[#33333366] border-[1.5px]" />
              <div className="flex gap-2 items-center justify-center font-semibold  text-colorButton text-[12px] pl-[21px] pr-[21px]">
                {/*border-t-2 border-borderHome */}
                <Link to="/addmoney">
                  <button
                    className="bg-bgButton p-1 rounded-[4px] mt-[10px] w-[139px] h-[24px] flex justify-center items-center cursor-pointer"
                    onClick={() => navigate("/addmoney")}
                  >
                    Ingresar dinero
                  </button>
                </Link>
                <Link to={"/transfer"}>
                  {" "}
                  <button className="bg-bgButton p-1 rounded-[4px] w-[139px] mt-[10px] h-[24px]">
                    Transferir Dinero
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex-col bg-borderHome rounded-t-[10px] rounded-b-xl h-fit shadow-cardShadow bg-[#EBEBEB]">
              <div className="bg-white w-full rounded-t-[10px]">
                <h2 className="p-4 font-semibold mb-[1px]">TU ACTIVIDAD</h2>
              </div>
              {data.length < 1 ? (
                <Empty />
              ) : (
                <Item
                  alias={dataView?.destinyAccountId.alias}
                  monto={dataView?.amount}
                  hora={hourSlice()}
                  id={dataView?._id}
                  border={"rounded-none"}
                />
              )}
              <div
                onClick={() => navigate("/activity")}
                className="flex justify-between items-center pt-4 pb-4 pl-4 pr-[29.25px] bg-white mt-[0.5px] cursor-pointer rounded-b-xl"
              >
                <button className="font-[600] text-[#39528D]">
                  Ver toda tu actividad
                </button>
                <svg
                  width="14"
                  height="24"
                  viewBox="0 0 14 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.49471 23.5053C0.177078 23.1407 0.0123851 22.7171 0.000632698 22.2348C-0.011155 21.7525 0.153538 21.3408 0.49471 20.9996L9.45903 12.0353L0.4594 3.03569C0.141768 2.71805 -0.011155 2.30042 0.000632698 1.78278C0.0123851 1.26518 0.177078 0.84757 0.49471 0.529937C0.859387 0.16526 1.27702 -0.011202 1.74761 0.000550377C2.21816 0.0123028 2.62403 0.188765 2.9652 0.529937L13.2353 10.8C13.4235 10.9883 13.5559 11.1824 13.6323 11.3824C13.7088 11.5824 13.747 11.8 13.747 12.0353C13.747 12.2706 13.7088 12.4882 13.6323 12.6882C13.5559 12.8882 13.4235 13.0823 13.2353 13.2705L3.00046 23.5053C2.65932 23.8465 2.24758 24.0112 1.76524 23.9994C1.2829 23.9877 0.859387 23.823 0.49471 23.5053Z"
                    fill="#39528D"
                  />
                </svg>
              </div>
            </div>

            <div className="bg-white rounded-[10px] mt-4 flex gap-2 items-center pl-4 pr-[32.25px] pt-4 pb-4 shadow-cardShadow">
              <div className="">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="48" height="48" rx="24" fill="#AACCFF" />
                  <path
                    d="M13.6364 31.4545C13.2 31.4545 12.8182 31.2909 12.4909 30.9636C12.1636 30.6364 12 30.2545 12 29.8182V15.6364C12 15.2 12.1636 14.8182 12.4909 14.4909C12.8182 14.1636 13.2 14 13.6364 14H32.1818C32.6182 14 33 14.1636 33.3273 14.4909C33.6545 14.8182 33.8182 15.2 33.8182 15.6364V22.1545H13.6364V29.8182H23.7C23.9318 29.8182 24.1261 29.897 24.283 30.0548C24.4398 30.2125 24.5182 30.408 24.5182 30.6411C24.5182 30.8743 24.4398 31.0682 24.283 31.2227C24.1261 31.3773 23.9318 31.4545 23.7 31.4545H13.6364ZM13.6364 18.3636H32.1818V15.6364H13.6364V18.3636ZM31.0909 30.3636H28.6364C28.4045 30.3636 28.2102 30.2848 28.0534 30.127C27.8966 29.9693 27.8182 29.7738 27.8182 29.5407C27.8182 29.3075 27.8966 29.1136 28.0534 28.9591C28.2102 28.8045 28.4045 28.7273 28.6364 28.7273H31.0909V26.2727C31.0909 26.0409 31.1698 25.8466 31.3275 25.6898C31.4852 25.533 31.6807 25.4545 31.9139 25.4545C32.147 25.4545 32.3409 25.533 32.4955 25.6898C32.65 25.8466 32.7273 26.0409 32.7273 26.2727V28.7273H35.1818C35.4136 28.7273 35.608 28.8061 35.7648 28.9639C35.9216 29.1216 36 29.3171 36 29.5502C36 29.7834 35.9216 29.9773 35.7648 30.1318C35.608 30.2864 35.4136 30.3636 35.1818 30.3636H32.7273V32.8182C32.7273 33.05 32.6484 33.2443 32.4907 33.4011C32.3329 33.558 32.1375 33.6364 31.9043 33.6364C31.6711 33.6364 31.4773 33.558 31.3227 33.4011C31.1682 33.2443 31.0909 33.05 31.0909 32.8182V30.3636Z"
                    fill="#39528D"
                  />
                </svg>
              </div>
              <div
                onClick={() => navigate("/cards")}
                className="flex justify-between w-full cursor-pointer"
              >
                <p className="text-[14px] font-semibold">Agregá tus tarjetas</p>
                <div className="">
                  <svg
                    width="14"
                    height="24"
                    viewBox="0 0 14 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.49471 23.5053C0.177078 23.1407 0.0123851 22.7171 0.000632698 22.2348C-0.011155 21.7525 0.153538 21.3408 0.49471 20.9996L9.45903 12.0353L0.4594 3.03569C0.141768 2.71805 -0.011155 2.30042 0.000632698 1.78278C0.0123851 1.26518 0.177078 0.84757 0.49471 0.529937C0.859387 0.16526 1.27702 -0.011202 1.74761 0.000550377C2.21816 0.0123028 2.62403 0.188765 2.9652 0.529937L13.2353 10.8C13.4235 10.9883 13.5559 11.1824 13.6323 11.3824C13.7088 11.5824 13.747 11.8 13.747 12.0353C13.747 12.2706 13.7088 12.4882 13.6323 12.6882C13.5559 12.8882 13.4235 13.0823 13.2353 13.2705L3.00046 23.5053C2.65932 23.8465 2.24758 24.0112 1.76524 23.9994C1.2829 23.9877 0.859387 23.823 0.49471 23.5053Z"
                      fill="#000000"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white mt-4 rounded-lg flex justify-between pt-4 pl-4 pb-4 h-[102px] shadow-cardShadow">
              <div className="flex-col ">
                <h2 className="pb-2 text-sm font-semibold">Prestamos</h2>
                <p className="text-xs font-medium leading-4 ">
                  {" "}
                  Consultá las opciones de financiamiento disponibles para vos o
                  tu negocio
                </p>
              </div>
              <div className="flex justify-end items-center pr-[33.25px] pt-1">
                <svg
                  width="14"
                  height="24"
                  viewBox="0 0 14 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.49471 23.5053C0.177078 23.1407 0.0123851 22.7171 0.000632698 22.2348C-0.011155 21.7525 0.153538 21.3408 0.49471 20.9996L9.45903 12.0353L0.4594 3.03569C0.141768 2.71805 -0.011155 2.30042 0.000632698 1.78278C0.0123851 1.26518 0.177078 0.84757 0.49471 0.529937C0.859387 0.16526 1.27702 -0.011202 1.74761 0.000550377C2.21816 0.0123028 2.62403 0.188765 2.9652 0.529937L13.2353 10.8C13.4235 10.9883 13.5559 11.1824 13.6323 11.3824C13.7088 11.5824 13.747 11.8 13.747 12.0353C13.747 12.2706 13.7088 12.4882 13.6323 12.6882C13.5559 12.8882 13.4235 13.0823 13.2353 13.2705L3.00046 23.5053C2.65932 23.8465 2.24758 24.0112 1.76524 23.9994C1.2829 23.9877 0.859387 23.823 0.49471 23.5053Z"
                    fill="#000000"
                  />
                </svg>
              </div>
            </div>
          </div>
          )
        }
      </Layout>
    </>
  );
};

export default Home;
