import { Link } from 'react-router-dom'
import { AiOutlineEye, AiOutlineMenu, AiOutlineQuestionCircle } from 'react-icons/ai'
import Empty from '../../components/activity/Empty'
import Item from '../../components/activity/Item'

const Home = () => {
  return (
    <>
      <div className='bg-[#10224D] h-16 flex items-center text-white justify-between pl-6 pr-[26px]'>
        <AiOutlineMenu className='text-2xl'/>
        <p className='font-semibold'>Inicio</p>
        <div className='flex gap-[26px]'>
          <AiOutlineQuestionCircle className='w-6 h-6' />
          <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.99999 20.4C0.71667 20.4 0.47917 20.3039 0.28749 20.1115C0.0958298 19.9192 0 19.6808 0 19.3965C0 19.1122 0.0958298 18.875 0.28749 18.685C0.47917 18.4951 0.71667 18.4 0.99999 18.4H2.48001V9.48003C2.48001 7.83337 2.97667 6.3517 3.96999 5.03502C4.96333 3.71836 6.26667 2.88003 7.88001 2.52003V1.66002C7.88001 1.1867 8.04677 0.7917 8.38029 0.47502C8.71383 0.15836 9.11883 3.05176e-05 9.59529 3.05176e-05C10.0718 3.05176e-05 10.4783 0.15836 10.815 0.47502C11.1517 0.7917 11.32 1.1867 11.32 1.66002V2.52003C12.9333 2.88003 14.24 3.71836 15.24 5.03502C16.24 6.3517 16.74 7.83337 16.74 9.48003V18.4H18.2C18.4833 18.4 18.7208 18.4962 18.9125 18.6886C19.1042 18.8809 19.2 19.1192 19.2 19.4035C19.2 19.6879 19.1042 19.925 18.9125 20.115C18.7208 20.305 18.4833 20.4 18.2 20.4H0.99999ZM9.6 24C8.95334 24 8.39167 23.765 7.91499 23.295C7.43833 22.825 7.2 22.26 7.2 21.6H12C12 22.26 11.765 22.825 11.295 23.295C10.825 23.765 10.26 24 9.6 24ZM4.47999 18.4H14.74V9.48003C14.74 8.04003 14.2467 6.82003 13.26 5.82003C12.2733 4.82003 11.0633 4.32003 9.63 4.32003C8.19666 4.32003 6.97999 4.82003 5.97999 5.82003C4.97999 6.82003 4.47999 8.04003 4.47999 9.48003V18.4Z" fill="white"/>
          </svg>
        </div>
      </div>

      <div className='flex-col gap-4 justify-center font-Montserrat bg-[#ECEBF6] pl-[16px] pr-[16px] pt-[16px]'>
        <div className='rounded-lg bg-white shadow-cardShadow h-[140px] mb-[20px]'>
          <div className='flex justify-between items-center text-sm pt-[21px] pl-[21px] pr-[21px]'>
            <p>Dinero disponible</p>
            <Link href='#' className='bg-bgButton text-colorButton rounded-md pl-[7px] pr-[7px] text-center text-[12px] font-semibold'> Tu CVU </Link>
          </div>
          <div className='font-semibold flex justify-between -mt-2 pr-[21px] pl-[21px]'>
            <div>
              <div className='flex items-center'>
                <p className='text-[16px]'>0 00</p>
                <AiOutlineEye className='w-6 h-4'/>
              </div>
              <p className='text-[12px] pb-2'>$ 0,00 a liquidar</p>
            </div>
              <svg className='w-[6.68px] h-3 mt-3 text-border mr-[6px]' viewBox='0 0 8 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M0.747355 11.7527C0.588539 11.5703 0.506193 11.3586 0.500316 11.1174C0.494423 10.8762 0.576769 10.6704 0.747355 10.4998L5.22952 6.01763L0.7297 1.51784C0.570884 1.35903 0.494423 1.15021 0.500316 0.891392C0.506193 0.632592 0.588539 0.423785 0.747355 0.264969C0.929694 0.0826302 1.13851 -0.00560101 1.3738 0.000275188C1.60908 0.00615138 1.81201 0.0943826 1.9826 0.264969L7.11765 5.40002C7.21176 5.49413 7.27794 5.59118 7.31617 5.69119C7.3544 5.79119 7.37351 5.9 7.37351 6.01763C7.37351 6.13528 7.3544 6.2441 7.31617 6.3441C7.27794 6.44409 7.21176 6.54114 7.11765 6.63527L2.00023 11.7527C1.82966 11.9233 1.62379 12.0056 1.38262 11.9997C1.14145 11.9938 0.929694 11.9115 0.747355 11.7527Z' fill='#333333'/>
            </svg>
          </div>
          <hr className='w-[90%] m-auto border-[#33333366]'/>
          <div className='flex gap-2 items-center justify-between font-semibold  text-colorButton text-[12px] pl-[21px] pr-[21px]'> {/*border-t-2 border-borderHome */}
            <button className='bg-bgButton p-1 rounded-[4px] mt-[10px] w-full'>Ingresar dinero</button>
            <button className='bg-bgButton p-1 rounded-[4px] mt-[10px] w-full'>Transferir dinero</button>
          </div>
        </div>

        <div className='flex-col bg-borderHome rounded-t-[10px] rounded-b-xl h-fit shadow-cardShadow'>
          <div className='bg-white w-full rounded-t-[10px]'>
            <h2 className='p-4 font-semibold'>TU ACTIVIDAD</h2>
          </div>
          {/*<Empty />*/}
          <Item /> {/* Componente de la actividad del usuario */}
          <div className='flex justify-between items-center pt-4 pb-4 pl-4 pr-[29.25px] bg-white mt-[0.5px] cursor-pointer rounded-b-xl'>
            <Link href='#' className='font-[600] text-[#39528D]'>Ver toda tu actividad</Link> {/* text-[#33333366]*/}
            <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.49471 23.5053C0.177078 23.1407 0.0123851 22.7171 0.000632698 22.2348C-0.011155 21.7525 0.153538 21.3408 0.49471 20.9996L9.45903 12.0353L0.4594 3.03569C0.141768 2.71805 -0.011155 2.30042 0.000632698 1.78278C0.0123851 1.26518 0.177078 0.84757 0.49471 0.529937C0.859387 0.16526 1.27702 -0.011202 1.74761 0.000550377C2.21816 0.0123028 2.62403 0.188765 2.9652 0.529937L13.2353 10.8C13.4235 10.9883 13.5559 11.1824 13.6323 11.3824C13.7088 11.5824 13.747 11.8 13.747 12.0353C13.747 12.2706 13.7088 12.4882 13.6323 12.6882C13.5559 12.8882 13.4235 13.0823 13.2353 13.2705L3.00046 23.5053C2.65932 23.8465 2.24758 24.0112 1.76524 23.9994C1.2829 23.9877 0.859387 23.823 0.49471 23.5053Z" fill="#39528D" /> {/*fill="#333333" fillOpacity="0.4"*/}
            </svg>
          </div>
        </div>

        <div className='bg-white rounded-[10px] mt-4 flex gap-2 items-center pl-4 pr-[32.25px] pt-4 pb-4 shadow-cardShadow'>
          <div className=''>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="48" rx="24" fill="#AACCFF" />
              <path d="M13.6364 31.4545C13.2 31.4545 12.8182 31.2909 12.4909 30.9636C12.1636 30.6364 12 30.2545 12 29.8182V15.6364C12 15.2 12.1636 14.8182 12.4909 14.4909C12.8182 14.1636 13.2 14 13.6364 14H32.1818C32.6182 14 33 14.1636 33.3273 14.4909C33.6545 14.8182 33.8182 15.2 33.8182 15.6364V22.1545H13.6364V29.8182H23.7C23.9318 29.8182 24.1261 29.897 24.283 30.0548C24.4398 30.2125 24.5182 30.408 24.5182 30.6411C24.5182 30.8743 24.4398 31.0682 24.283 31.2227C24.1261 31.3773 23.9318 31.4545 23.7 31.4545H13.6364ZM13.6364 18.3636H32.1818V15.6364H13.6364V18.3636ZM31.0909 30.3636H28.6364C28.4045 30.3636 28.2102 30.2848 28.0534 30.127C27.8966 29.9693 27.8182 29.7738 27.8182 29.5407C27.8182 29.3075 27.8966 29.1136 28.0534 28.9591C28.2102 28.8045 28.4045 28.7273 28.6364 28.7273H31.0909V26.2727C31.0909 26.0409 31.1698 25.8466 31.3275 25.6898C31.4852 25.533 31.6807 25.4545 31.9139 25.4545C32.147 25.4545 32.3409 25.533 32.4955 25.6898C32.65 25.8466 32.7273 26.0409 32.7273 26.2727V28.7273H35.1818C35.4136 28.7273 35.608 28.8061 35.7648 28.9639C35.9216 29.1216 36 29.3171 36 29.5502C36 29.7834 35.9216 29.9773 35.7648 30.1318C35.608 30.2864 35.4136 30.3636 35.1818 30.3636H32.7273V32.8182C32.7273 33.05 32.6484 33.2443 32.4907 33.4011C32.3329 33.558 32.1375 33.6364 31.9043 33.6364C31.6711 33.6364 31.4773 33.558 31.3227 33.4011C31.1682 33.2443 31.0909 33.05 31.0909 32.8182V30.3636Z" fill="#39528D"/>
            </svg>
          </div>
          <div className='flex justify-between w-full'>
            <p className='text-[14px] font-semibold'>Agregá tus tarjetas</p>
            <div className=''>
              <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.49471 23.5053C0.177078 23.1407 0.0123851 22.7171 0.000632698 22.2348C-0.011155 21.7525 0.153538 21.3408 0.49471 20.9996L9.45903 12.0353L0.4594 3.03569C0.141768 2.71805 -0.011155 2.30042 0.000632698 1.78278C0.0123851 1.26518 0.177078 0.84757 0.49471 0.529937C0.859387 0.16526 1.27702 -0.011202 1.74761 0.000550377C2.21816 0.0123028 2.62403 0.188765 2.9652 0.529937L13.2353 10.8C13.4235 10.9883 13.5559 11.1824 13.6323 11.3824C13.7088 11.5824 13.747 11.8 13.747 12.0353C13.747 12.2706 13.7088 12.4882 13.6323 12.6882C13.5559 12.8882 13.4235 13.0823 13.2353 13.2705L3.00046 23.5053C2.65932 23.8465 2.24758 24.0112 1.76524 23.9994C1.2829 23.9877 0.859387 23.823 0.49471 23.5053Z" fill="#000000"/>
              </svg>
            </div>
          </div>
        </div>

        <div className='bg-white mt-4 rounded-lg flex pt-4 pl-4 pb-4 h-[102px] shadow-cardShadow'>
          <div className='flex-col '>
            <h2 className='font-semibold text-sm pb-2'>Prestamos</h2>
            <p className='text-xs font-medium leading-4 '>Consultá las opciones de financiamiento disponibles para vos o tu negocio</p>
          </div>
          <div className='flex justify-end items-center pr-[33.25px] pt-1'>
            <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.49471 23.5053C0.177078 23.1407 0.0123851 22.7171 0.000632698 22.2348C-0.011155 21.7525 0.153538 21.3408 0.49471 20.9996L9.45903 12.0353L0.4594 3.03569C0.141768 2.71805 -0.011155 2.30042 0.000632698 1.78278C0.0123851 1.26518 0.177078 0.84757 0.49471 0.529937C0.859387 0.16526 1.27702 -0.011202 1.74761 0.000550377C2.21816 0.0123028 2.62403 0.188765 2.9652 0.529937L13.2353 10.8C13.4235 10.9883 13.5559 11.1824 13.6323 11.3824C13.7088 11.5824 13.747 11.8 13.747 12.0353C13.747 12.2706 13.7088 12.4882 13.6323 12.6882C13.5559 12.8882 13.4235 13.0823 13.2353 13.2705L3.00046 23.5053C2.65932 23.8465 2.24758 24.0112 1.76524 23.9994C1.2829 23.9877 0.859387 23.823 0.49471 23.5053Z" fill="#000000"/>
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
