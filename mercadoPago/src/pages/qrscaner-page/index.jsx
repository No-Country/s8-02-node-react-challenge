import { useState } from "react";
import OptionsQrStep1 from "../../components/optionsqr/optionsqr-step1";
import OptionsQrStep2 from "../../components/optionsqr/optionsqr-step2";
import Layout from "../../components/layout";
import OptionsQrStep3 from "../../components/optionsqr/optionsqr-step3";
import OptionsQrStep4 from "../../components/optionsqr/optionsqr-step4";
import moment from "moment";

const QrScanner = () => {
  const [pantallaActual, setPantallaActual] = useState(1);
  const [scannedData, setScannedData] = useState(null);
  const currentDateTime = moment().format("DD [de] MMMM YYYY - HH:mm[hs.]");
  const handleNext = () => {
    if (pantallaActual < 4) {
      setPantallaActual(pantallaActual + 1);
    }
  };
  return (
    <Layout>
      <section>
        {pantallaActual === 1 && (
          <OptionsQrStep1 onNext={handleNext} setScannedData={setScannedData} />
        )}
        {pantallaActual === 2 && (
          <OptionsQrStep2 onNext={handleNext} scannedData={scannedData} />
        )}
        {pantallaActual === 3 && (
          <OptionsQrStep3
            onNext={handleNext}
            scannedData={scannedData}
            currentDateTime={currentDateTime}
          />
        )}
        {pantallaActual === 4 && (
          <OptionsQrStep4
            scannedData={scannedData}
            currentDateTime={currentDateTime}
          />
        )}
      </section>
    </Layout>
  );
};

export default QrScanner;
