import Item from '../../components/ItemProfile/Item'
import Header from '../../components/header/Header'

import Dato from '../../assets/svg/Dato.svg'
import Seguridad from '../../assets/svg/Seguridad.svg'
import Tarjeta from '../../assets/svg/Tarjeta.svg'
import Direction from '../../assets/svg/Directions.svg'

const  Profile = () => {
    return (
        <>
            <Header dato={'Tus Datos'}/>
            <div className='h-28 flex items-center gap-4 bg-[#10224D] shadow-insetShadow pl-4 pr-[23px]'>
                <div>
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="64" height="64" rx="32" fill="white"/>
                        <path d="M24.26 38.75C25.52 37.87 26.77 37.195 28.01 36.725C29.25 36.255 30.58 36.02 32 36.02C33.42 36.02 34.755 36.255 36.005 36.725C37.255 37.195 38.51 37.87 39.77 38.75C40.65 37.67 41.275 36.58 41.645 35.48C42.015 34.38 42.2 33.22 42.2 32C42.2 29.1 41.225 26.675 39.275 24.725C37.325 22.775 34.9 21.8 32 21.8C29.1 21.8 26.675 22.775 24.725 24.725C22.775 26.675 21.8 29.1 21.8 32C21.8 33.22 21.99 34.38 22.37 35.48C22.75 36.58 23.38 37.67 24.26 38.75ZM31.9944 32.9C30.8381 32.9 29.865 32.5031 29.075 31.7094C28.285 30.9157 27.89 29.9407 27.89 28.7844C27.89 27.6281 28.2869 26.655 29.0806 25.865C29.8743 25.075 30.8493 24.68 32.0056 24.68C33.1619 24.68 34.135 25.0769 34.925 25.8706C35.715 26.6643 36.11 27.6393 36.11 28.7956C36.11 29.9519 35.7131 30.925 34.9194 31.715C34.1257 32.505 33.1507 32.9 31.9944 32.9ZM32.014 44C30.3647 44 28.81 43.685 27.35 43.055C25.89 42.425 24.615 41.565 23.525 40.475C22.435 39.385 21.575 38.1123 20.945 36.657C20.315 35.2017 20 33.6467 20 31.992C20 30.3373 20.315 28.785 20.945 27.335C21.575 25.885 22.435 24.615 23.525 23.525C24.615 22.435 25.8877 21.575 27.343 20.945C28.7983 20.315 30.3533 20 32.008 20C33.6627 20 35.215 20.315 36.665 20.945C38.115 21.575 39.385 22.435 40.475 23.525C41.565 24.615 42.425 25.8853 43.055 27.336C43.685 28.7866 44 30.3366 44 31.986C44 33.6353 43.685 35.19 43.055 36.65C42.425 38.11 41.565 39.385 40.475 40.475C39.385 41.565 38.1147 42.425 36.664 43.055C35.2134 43.685 33.6634 44 32.014 44ZM32 42.2C33.1 42.2 34.175 42.04 35.225 41.72C36.275 41.4 37.31 40.84 38.33 40.04C37.31 39.32 36.27 38.77 35.21 38.39C34.15 38.01 33.08 37.82 32 37.82C30.92 37.82 29.85 38.01 28.79 38.39C27.73 38.77 26.69 39.32 25.67 40.04C26.69 40.84 27.725 41.4 28.775 41.72C29.825 42.04 30.9 42.2 32 42.2ZM32 31.1C32.68 31.1 33.235 30.885 33.665 30.455C34.095 30.025 34.31 29.47 34.31 28.79C34.31 28.11 34.095 27.555 33.665 27.125C33.235 26.695 32.68 26.48 32 26.48C31.32 26.48 30.765 26.695 30.335 27.125C29.905 27.555 29.69 28.11 29.69 28.79C29.69 29.47 29.905 30.025 30.335 30.455C30.765 30.885 31.32 31.1 32 31.1Z" fill="#39528D"/>
                        <rect x="5" y="5" width="54" height="54" rx="27" stroke="#10224D" strokeWidth="2"/>
                    </svg>
                </div>
                <div className=' text-white'>
                    <h2 className='font-semibold text-lg leading-[21.94px]'>NombreDefault</h2>
                    <span className='font-medium text-sm leading-[17.07px]'>ejemplogenerico345@correo.com</span>
                </div>
            </div>

            <div className='bg-[#AACCFF] h-10 flex items-center justify-between pl-4 pr-6 rounded-[100px] mt-6 ml-4 mr-4'>
                <p className='font-semibold text-base'>CVU y Alias</p>
                <svg className='mr-6' width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.247355 11.7527C0.0885389 11.5703 0.00619254 11.3586 0.000316349 11.1174C-0.00557749 10.8762 0.0767689 10.6704 0.247355 10.4998L4.72952 6.01763L0.2297 1.51784C0.070884 1.35903 -0.00557749 1.15021 0.000316349 0.891392C0.00619254 0.632592 0.0885389 0.423785 0.247355 0.264969C0.429694 0.0826302 0.63851 -0.00560101 0.873805 0.000275188C1.10908 0.00615138 1.31201 0.0943826 1.4826 0.264969L6.61765 5.40002C6.71176 5.49413 6.77794 5.59118 6.81617 5.69119C6.8544 5.79119 6.87351 5.9 6.87351 6.01763C6.87351 6.13528 6.8544 6.2441 6.81617 6.3441C6.77794 6.44409 6.71176 6.54114 6.61765 6.63527L1.50023 11.7527C1.32966 11.9233 1.12379 12.0056 0.882619 11.9997C0.641448 11.9938 0.429694 11.9115 0.247355 11.7527Z" fill="#10224D"/>
                </svg>
            </div>

            <div className=''>
                <Item icon={Dato} title={'Tus Datos'} description={'Datos Validados'} />
                <Item icon={Seguridad} title={'Seguridad'} description={'Tenés Configuraciones Pendientes.'} />
                <Item icon={Tarjeta} title={'Tarjetas'} description={'Tarjetas guardadas en tu cuenta.'} />
                <Item icon={Direction} title={'Direcciones'} description={'Direcciones guardadas en tu cuenta.'} />
            </div>
        </>
    )
}

export default Profile