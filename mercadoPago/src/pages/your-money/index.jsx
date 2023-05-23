/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import optionsIcon from "../../assets/bullets.svg";
import arrow from "../../assets/arrow.svg";

import { Options } from "../../components/money/Options";
import { Link } from "react-router-dom";
import { activitiesMock } from "./mockActivity";
import { ActivityCard } from "../../components/money/ActivityCard";
import { NoActivities } from "../../components/money/NoActivities";

const YourMoney = () => {
  // eslint-disable-next-line no-unused-vars
  const [money, setMoney] = useState(0);
  const [activities, setActivities] = useState([]);
  const [modalOption, setModalOption] = useState(false);

  const handlerOptions = () => {
    setModalOption(!modalOption);
  };

  useEffect(() => {
    /* COMENTAR O DESCOMENTAR PARA VER O NO ACTIVIDADES */
    setActivities(activitiesMock);
  }, []);

  return (
    <div className="container mx-auto min-w-[340px] max-w-[1440px] px-4 py-1">
      <div className="flex flex-col bg-slate-50 p-3 ps-4 pb-2 rounded-lg my-3 text-sm shadow-md">
        <div className="flex justify-between mb-2 items-center">
          <div>
            <h2 className="font-medium">Dinero disponible</h2>
            <p className="font-semibold my-1">
              $<span className="ml-1"> {money}</span>
            </p>
          </div>
          <div className="relative">
            <button type="button" onClick={handlerOptions}>
              <img src={optionsIcon} alt="options" />
            </button>
            {modalOption && <Options />}
          </div>
        </div>
        <hr />
        <div>
          <h3 className="font-semibold mt-2">Movimientos de tu dinero</h3>
          <div className="flex flex-col font-medium text-xs">
            {activities.length > 0 ? (
              activities.map((activity, i) => {
                return <ActivityCard key={i} {...activity} />;
              })
            ) : (
              <NoActivities />
            )}
          </div>
          <div className="text-base text-[#39528D] font-semibold mt-2">
            <Link
              to={"/activities"}
              className="flex justify-between items-center"
            >
              Ver toda tu actividad
              <span>
                <img src={arrow} alt="arrow" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourMoney;
