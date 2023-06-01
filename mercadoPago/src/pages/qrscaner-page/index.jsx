import { useState } from "react";
import OptionsQrStep1 from "../../components/optionsqr/optionsqr-step1";
import OptionsQrStep2 from "../../components/optionsqr/optionsqr-step2";
import Layout from "../../components/layout";

const QrScanner = () => {
  const [pantallaActual, setPantallaActual] = useState(1);

  const handleNext = () => {
    if (pantallaActual < 2) {
      setPantallaActual(pantallaActual + 1);
    }
  };
  return (
    <Layout>
      <section>
        {pantallaActual === 1 && <OptionsQrStep1 onNext={handleNext} />}
        {pantallaActual === 2 && <OptionsQrStep2 onNext={handleNext} />}
      </section>
      {/* <section className="flex flex-col items-center justify-center">
        <div className="h-[100px] w-[328px] bg-white rounded-[10px] shadow-cardShadow my-4 px-8 flex items-center justify-between">
          <p className="font-semibold text-lg leading-[22px] text-center">
            Elige una opcion Scanear o Subir una imagen
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="bg-[#10224D] rounded-[10px] h-[48px] w-[328px] text-white font-semibold text-base leading-5 flex justify-center items-center ">
            Scanner
          </div>
          <div className="bg-[#10224D] rounded-[10px] h-[48px] w-[328px] text-white font-semibold text-base leading-5 flex justify-center items-center ">
            Upload image
          </div>
        </div>
      </section> */}
    </Layout>
  );
};

export default QrScanner;
