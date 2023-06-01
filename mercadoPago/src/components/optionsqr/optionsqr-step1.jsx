// import { BrowserMultiFormatReader } from "@zxing/library";
import React, { useState, useEffect, useRef } from "react";
// import { z } from "zod";

// const qrSchema = z.object({
//   user: z.object(),
//   mount: z.string(),
// });

const OptionsQrStep1 = ({ onNext }) => {
  // const [data, setData] = useState({
  //   user: "",
  //   mount: 0,
  // });
  // const [status, setStatus] = useState(
  //   data.mount > 0 ? "scanned" : "not-scanned"
  // );
  // const videoRef = useRef(null);

  // useEffect(() => {
  //   const codeReader = new BrowserMultiFormatReader();
  //   codeReader
  //     .decodeFromVideoDevice(undefined, videoRef.current, (result, error) => {
  //       if (status !== "scanned" && data.mount == 0) {
  //         setStatus("scanning");
  //         if (result) {
  //           try {
  //             const dataParsed = JSON.parse(result.getText());
  //             qrSchema.parse(dataParsed);
  //             console.log(dataParsed);
  //             setData(dataParsed);
  //             setStatus("scanned");
  //             codeReader.reset();
  //             // setCloseCam(true);
  //           } catch (error) {
  //             setStatus("parse-error");
  //             return;
  //           }
  //         }
  //         if (error) {
  //           setStatus("not-scanned");
  //         }
  //       }
  //     })
  //     .catch((_error) => {
  //       setStatus("scanning-error");
  //     });
  // }, []);
  // console.log(data);
  return (
    <div className="flex flex-col h-screen items-center bg-[#10224D]">
      <p className="font-bold text-[28px] leading-[34px] my-5 text-white">
        Escanear código QR
      </p>
      <div className="w-[328px] h-[328px] rounded-[10px] shadow-cardShadow bg-white/40 flex justify-center items-center">
        <div className="w-[300px] h-[300px]">
          {/* <video ref={videoRef} style={{ width: "100%", height: "100%" }} /> */}
        </div>
      </div>
      <p className="font-semibold text-sm leading-[17px] mt-4 w-[328px] text-center text-white">
        Colocá un código QR dentro del rectángulo del visor para escanearlo.
      </p>
      <div className="flex flex-col items-center justify-center gap-4 my-3">
        <div className="bg-[#ffffff] rounded-[10px] h-[48px] w-[328px] font-semibold text-base leading-5 flex justify-center items-center ">
          Scanner
        </div>
        <div className="bg-[#ffffff] rounded-[10px] h-[48px] w-[328px] font-semibold text-base leading-5 flex justify-center items-center ">
          Upload image
        </div>
      </div>
    </div>
  );
};

export default OptionsQrStep1;
