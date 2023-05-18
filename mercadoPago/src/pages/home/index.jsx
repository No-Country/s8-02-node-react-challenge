import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

const Home = () => {
  return (
    <>
      {/* Agregar componente Menu o NavBar */}
      <div className='flex-col justify-center font-Montserrat bg-[#ECEBF6] pl-4 pr-4 pt-[16px]'>
        <div className='rounded-lg bg-white shadow-cardShadow h-[140px] mb-[20px] '>
          <div className='flex justify-between items-center text-sm pt-[21px] pl-[21px] pr-[21px]'>
            <p>Dinero disponible</p>
            <Link
              href="#"
              className="bg-bgButton text-colorButton rounded-md p-1 text-[12px] font-semibold"
            >
              {" "}
              Tu CVU{" "}
            </Link>
          </div>
          <div className="font-semibold flex justify-between -mt-2 pr-[21px] pl-[21px]">
            <div>
              <div className="flex items-center">
                <p className="text-[16px]">0 00</p>
                <AiOutlineEye className="w-6 h-4" />
              </div>
              <p className="text-[12px] pb-2">$ 0,00 a liquidar</p>
            </div>
            <svg
              className="w-[6.68px] h-3 mt-3 text-border mr-[6px]"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.747355 11.7527C0.588539 11.5703 0.506193 11.3586 0.500316 11.1174C0.494423 10.8762 0.576769 10.6704 0.747355 10.4998L5.22952 6.01763L0.7297 1.51784C0.570884 1.35903 0.494423 1.15021 0.500316 0.891392C0.506193 0.632592 0.588539 0.423785 0.747355 0.264969C0.929694 0.0826302 1.13851 -0.00560101 1.3738 0.000275188C1.60908 0.00615138 1.81201 0.0943826 1.9826 0.264969L7.11765 5.40002C7.21176 5.49413 7.27794 5.59118 7.31617 5.69119C7.3544 5.79119 7.37351 5.9 7.37351 6.01763C7.37351 6.13528 7.3544 6.2441 7.31617 6.3441C7.27794 6.44409 7.21176 6.54114 7.11765 6.63527L2.00023 11.7527C1.82966 11.9233 1.62379 12.0056 1.38262 11.9997C1.14145 11.9938 0.929694 11.9115 0.747355 11.7527Z"
                fill="#333333"
              />
            </svg>
          </div>
          <div className="flex gap-2 items-center justify-between font-semibold border-t-2 border-borderHome text-colorButton text-[12px] pl-[21px] pr-[21px]">
            <button className="bg-bgButton p-1 rounded-[4px] mt-[10px]">
              Ingresar dinero
            </button>
            <button className="bg-bgButton p-1 rounded-[4px] mt-[10px]">
              Transferir dinero
            </button>
          </div>
        </div>

        <div className='flex-col bg-[#D9D9D9] rounded-t-[10px] pb-[50px] rounded-b-[10px]'>
          <div className='bg-white w-full rounded-t-[10px]'>
            <h2 className='pt-[22px] pl-[24px] pb-[5px]'>TU ACTIVIDAD</h2>
          </div>
          <div className='bg-white mt-2 pl-[22px] pr-[22px] font-[500]'>
            <ul className='mt-2 text-[#39528D]'>
              <li className='flex justify-between pt-[36px]'>
                <div className='flex gap-2 items-center'>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="#39528D"/>
                  </svg>
                  <p>Label</p>
                </div>
                <p>100+</p>
              </li>
              <li className='flex justify-between pt-[58px]'>
                <div className='flex gap-2 items-center'>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="#39528D"/>
                  </svg>
                  <p>Label</p>
                </div>
                <p>100+</p>
              </li>
              <li className='flex justify-between pt-[58px]'>
                <div className='flex gap-2 items-center'>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="#39528D"/>
                  </svg>
                  <p>label</p>
                </div>
                <p>100+</p>
              </li>
              <li className='flex justify-between pt-[58px]'>
                <div className='flex gap-2 items-center'>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="#39528D"/>
                  </svg>
                  <p>Label</p>
                </div>
                <p>100+</p>
              </li>
              <li className='flex justify-between pt-[58px]'>
                <div className='flex gap-2 items-center'>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="#39528D"/>
                  </svg>
                  <p>Label</p>
                </div>
                <p>100+</p>
              </li>
              <li className='flex justify-between pt-[58px] pb-[41px]'>
                <div className='flex gap-2 items-center'>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="#39528D"/>
                  </svg>
                  <p>Label</p>
                </div>
                <p>100+</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
