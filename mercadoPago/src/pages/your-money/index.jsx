/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import optionsIcon from "../../assets/bullets.svg";

import { Options } from "../../components/money/Options";
import { Link } from "react-router-dom";
import { ActivityCard } from "../../components/money/ActivityCard";
import { NoActivities } from "../../components/money/NoActivities";
import { useSelector } from "react-redux";
import Layout from "../../components/layout";
import { AiOutlineRight } from "react-icons/ai";
import { baseUrl } from "../../../axios/axiosInstance";
import { LoadingModal } from "../../components/LoadingModal";

const YourMoney = () => {
  // eslint-disable-next-line no-unused-vars

  const [activities, setActivities] = useState([]);
  const [loading, setloading] = useState(true);

  const [modalOption, setModalOption] = useState(false);

  //Dejo Provisorio para mostrar al tl
  const { user } = useSelector((state) => state.auth);

  const balance = user.update.balance || 0;

  const handlerOptions = () => {
    setModalOption(!modalOption);
  };

  const fetching = async () => {
    return baseUrl
      .get(`/auth/activity/activities/${user.update._id}/5`, {
        headers: {
          Authorization: user.token.token,
        },
      }) //.UserAccountId
      .then(({ data }) => data)
      .catch((err) => err);
  };

  useEffect(() => {
    fetching()
      .then(({ activities }) => setActivities(activities))
      .catch((err) => console.log(err))
      .finally(() => setloading(false));
  }, []);

  console.log(activities);

  return (
    <Layout>
      <div className="container mx-auto min-w-[340px] max-w-[800px] px-4 py-1">
        <div className="flex flex-col p-3 pb-2 my-3 text-sm rounded-lg shadow-md bg-slate-50 ps-4">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h2 className="font-medium">Dinero disponible</h2>
              <p className="my-1 font-semibold">
                $<span className="ml-1"> {balance}</span>
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
            <h3 className="mt-2 font-semibold">Movimientos de tu dinero</h3>
            <div className="flex flex-col text-xs font-medium">
              {loading ? (
                <LoadingModal />
              ) : activities.length > 0 ? (
                activities.map((data, i) => {
                  return <ActivityCard key={i} {...data} />;
                })
              ) : (
                <NoActivities />
              )}
            </div>
            <div className="text-base text-[#39528D] font-semibold mt-2">
              <Link
                to={"/activity"}
                className="flex items-center justify-between"
              >
                Ver toda tu actividad
                <span>
                  <AiOutlineRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default YourMoney;
