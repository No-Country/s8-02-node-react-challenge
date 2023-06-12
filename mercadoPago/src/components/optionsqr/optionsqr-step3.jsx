import { AiOutlineClockCircle } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
import { Link } from "react-router-dom";

const OptionsQrStep3 = ({ onNext, scannedData, currentDateTime }) => {
  const { user, mount } = scannedData;
  const { fullname, cvu } = user;
  return (
    <section className="flex flex-col items-center">
      <div className="w-[328px] h-[536px] rounded-[10px] shadow-cardShadow mt-6">
        <div className="h-[248px] bg-[#008744] rounded-t-[10px] flex flex-col items-center justify-center">
          <div className="w-[100px] h-[100px] rounded-full bg-white flex justify-center items-center relative">
            <svg
              width="54"
              height="53"
              viewBox="0 0 54 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.1335 44.9333C10.5557 44.9333 10.0779 44.7444 9.70016 44.3666C9.32239 43.9888 9.1335 43.5111 9.1335 42.9333V24.2666C9.1335 23.7333 9.3335 23.2777 9.7335 22.9C10.1335 22.5222 10.6002 22.3333 11.1335 22.3333C11.7113 22.3333 12.1891 22.5222 12.5668 22.9C12.9446 23.2777 13.1335 23.7555 13.1335 24.3333V43C13.1335 43.5333 12.9335 43.9888 12.5335 44.3666C12.1335 44.7444 11.6668 44.9333 11.1335 44.9333ZM27.2668 44.9333C26.6891 44.9333 26.2113 44.7444 25.8335 44.3666C25.4557 43.9888 25.2668 43.5111 25.2668 42.9333V24.2666C25.2668 23.7333 25.4668 23.2777 25.8668 22.9C26.2668 22.5222 26.7335 22.3333 27.2668 22.3333C27.8446 22.3333 28.3224 22.5222 28.7002 22.9C29.0779 23.2777 29.2668 23.7555 29.2668 24.3333V43C29.2668 43.5333 29.0668 43.9888 28.6668 44.3666C28.2668 44.7444 27.8002 44.9333 27.2668 44.9333ZM2.26683 52.9333C1.7335 52.9333 1.27794 52.7333 0.900163 52.3333C0.522385 51.9333 0.333496 51.4666 0.333496 50.9333C0.333496 50.3555 0.522385 49.8777 0.900163 49.5C1.27794 49.1222 1.75572 48.9333 2.3335 48.9333H51.7335C52.2668 48.9333 52.7224 49.1333 53.1002 49.5333C53.4779 49.9333 53.6668 50.4 53.6668 50.9333C53.6668 51.5111 53.4779 51.9888 53.1002 52.3666C52.7224 52.7444 52.2446 52.9333 51.6668 52.9333H2.26683ZM42.8668 44.9333C42.2891 44.9333 41.8113 44.7444 41.4335 44.3666C41.0557 43.9888 40.8668 43.5111 40.8668 42.9333V24.2666C40.8668 23.7333 41.0668 23.2777 41.4668 22.9C41.8668 22.5222 42.3335 22.3333 42.8668 22.3333C43.4446 22.3333 43.9224 22.5222 44.3002 22.9C44.6779 23.2777 44.8668 23.7555 44.8668 24.3333V43C44.8668 43.5333 44.6668 43.9888 44.2668 44.3666C43.8668 44.7444 43.4002 44.9333 42.8668 44.9333ZM29.0002 0.733285L52.2002 13.9333C52.6446 14.2 53.0002 14.5333 53.2668 14.9333C53.5335 15.3333 53.6668 15.7777 53.6668 16.2666C53.6668 16.8888 53.4224 17.3888 52.9335 17.7666C52.4446 18.1444 51.8891 18.3333 51.2668 18.3333H2.7335C2.11127 18.3333 1.55572 18.1444 1.06683 17.7666C0.577941 17.3888 0.333496 16.8888 0.333496 16.2666C0.333496 15.7777 0.477941 15.3222 0.766829 14.9C1.05572 14.4777 1.42239 14.1555 1.86683 13.9333L25.0002 0.733285C25.6224 0.377729 26.2891 0.199951 27.0002 0.199951C27.7113 0.199951 28.3779 0.377729 29.0002 0.733285Z"
                fill="#008744"
              />
            </svg>
            <span className="absolute bottom-[5px] right-[5px] w-5 h-5 rounded-full bg-[#005F1C] flex justify-center items-center">
              <BsCheck className="text-white" />
            </span>
          </div>
          <p className="text-white font-bold text-2xl leading-[29px] mx-4 text-center">
            Ya Transferimos tu dinero
          </p>
        </div>
        <div className="h-[80px] bg-white flex items-center justify-start gap-6 pl-8">
          <span className="rounded-full h-12 w-12 border-[1px] flex justify-center items-center">
            <AiOutlineClockCircle className="w-6 h-6" />
          </span>
          <p className="font-bold text-xs leading-[15px]">{currentDateTime}</p>
        </div>
        <div className="h-[80px] bg-white flex items-center justify-start gap-6 pl-8">
          <span className="rounded-full h-12 w-12 border-[1px] flex justify-center items-center">
            <svg
              width="24"
              height="18"
              viewBox="0 0 24 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.8182 10.1818C12.9091 10.1818 12.1363 9.86366 11.5 9.22729C10.8636 8.59093 10.5454 7.8182 10.5454 6.90911C10.5454 6.00002 10.8636 5.22729 11.5 4.59093C12.1363 3.95456 12.9091 3.63638 13.8182 3.63638C14.7273 3.63638 15.5 3.95456 16.1363 4.59093C16.7727 5.22729 17.0909 6.00002 17.0909 6.90911C17.0909 7.8182 16.7727 8.59093 16.1363 9.22729C15.5 9.86366 14.7273 10.1818 13.8182 10.1818ZM5.45452 13.8182C4.95452 13.8182 4.52649 13.6402 4.17044 13.2841C3.81438 12.9281 3.63635 12.5 3.63635 12V1.81816C3.63635 1.31816 3.81438 0.890137 4.17044 0.534082C4.52649 0.178027 4.95452 0 5.45452 0H22.1818C22.6818 0 23.1099 0.178027 23.4659 0.534082C23.822 0.890137 24 1.31816 24 1.81816V12C24 12.5 23.822 12.9281 23.4659 13.2841C23.1099 13.6402 22.6818 13.8182 22.1818 13.8182H5.45452ZM7.99999 12H19.6364C19.6364 11.2909 19.8833 10.6894 20.3773 10.1955C20.8712 9.70153 21.4727 9.45455 22.1818 9.45455V4.36364C21.4727 4.36364 20.8712 4.11666 20.3773 3.62272C19.8833 3.12877 19.6364 2.52726 19.6364 1.81816H7.99999C7.99999 2.52726 7.75302 3.12877 7.25907 3.62272C6.76513 4.11666 6.16361 4.36364 5.45452 4.36364V9.45455C6.16361 9.45455 6.76513 9.70153 7.25907 10.1955C7.75302 10.6894 7.99999 11.2909 7.99999 12ZM1.81816 17.4545C1.31816 17.4545 0.890136 17.2765 0.534082 16.9205C0.178027 16.5644 0 16.1364 0 15.6364V4.18181C0 3.92425 0.0874273 3.70834 0.262282 3.53408C0.437136 3.35985 0.6538 3.27273 0.912273 3.27273C1.17075 3.27273 1.38635 3.35985 1.55907 3.53408C1.7318 3.70834 1.81816 3.92425 1.81816 4.18181V15.6364H19.8182C20.0758 15.6364 20.2917 15.7238 20.4659 15.8987C20.6402 16.0735 20.7273 16.2902 20.7273 16.5487C20.7273 16.8071 20.6402 17.0227 20.4659 17.1955C20.2917 17.3682 20.0758 17.4545 19.8182 17.4545H1.81816Z"
                fill="black"
              />
            </svg>
          </span>
          <p className="font-bold text-xs leading-[15px]">${mount}</p>
        </div>
        <div className="h-[128px] bg-white flex flex-col justify-center items-start pl-[32px] gap-3 rounded-b-[10px]">
          <p className="font-medium text-xs leading-[15px] text-[#ADADAD]">
            Para
          </p>
          <p className="text-base font-semibold leading-5">{fullname}</p>
          <p className="font-medium text-xs leading-[15px]">
            <span className="text-[#ADADAD]">CVU: </span>
            {cvu}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 my-4">
        <Link to={"/home"}>
          <div className="w-[160px] h-[48px] flex justify-center items-center">
            <p className="text-[#10224D] font-bold text-sm leading-[17px] cursor-pointer">
              Ir al inicio
            </p>
          </div>
        </Link>
        <div
          onClick={onNext}
          className="w-[160px] h-[48px] bg-[#10224D] rounded-[10px] flex justify-center items-center cursor-pointer"
        >
          <p className="text-white font-semibold text-sm leading-[17px]">
            Ver comprobante
          </p>
        </div>
      </div>
    </section>
  );
};

export default OptionsQrStep3;
