/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
export const PersonalDataForm = ({ dni, phone, modal, handleModal }) => {
  return (
    <>
      <h2 className="text-[#39528D] font-semibold mb-3">Datos personales</h2>
      <hr />
      <div className=" mt-3 flex flex-col justify-center w-[90%]">
        <h3 className="capitalize text-[#39528D] font-semibold">Documento</h3>
        <div className=" flex justify-between items-center">
          <p className=" w-[90%] font-medium overflow-x-hidden">{dni} </p>
        </div>
      </div>
      <div className=" mt-3 flex flex-col justify-center w-[90%]">
        <h3 className="capitalize text-[#39528D] font-semibold">Teléfono</h3>
        <div
          className={`flex ${
            !phone ? "justify-end" : " justify-between "
          } items-center`}
        >
          {phone ? (
            <p className=" w-[90%] font-medium overflow-x-hidden">{phone}</p>
          ) : (
            <button
              onClick={() =>
                handleModal(["Agregar teléfono", "Ingresar número"])
              }
              type="button"
              className="text-[#39528D]  font-medium text-sm"
            >
              Agregar
            </button>
          )}
        </div>
      </div>
    </>
  );
};
