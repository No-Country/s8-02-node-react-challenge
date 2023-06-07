/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import IconProfile from "../../../public/profileTransferIcon.svg";

export const ActivityCard = ({
  type,
  destinyAccountId,
  amount,
  updatedAt,
  _id,
}) => {
  const navigate = useNavigate();

  const newType = type === "recharge" ? "Recarga" : "Transferencia recibida";
  const { alias } = destinyAccountId;
  const hourSlice = (h) => h.slice(11, -8);

  /*   <Link to={`/activity/${id}`}> */
  return (
    <>
      <div
        onClick={() => navigate(`/activity/${_id}`)}
        className="flex justify-between items-center my-2 cursor-pointer"
      >
        <div className="flex items-center">
          <img src={IconProfile} alt="profile" />
          <p className="ml-2">
            {newType}
            <br />
            <span className="text-[#33333366]">de {alias}</span>
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-[#008744] font-semibold">
            $<span className="ml-1">{amount}</span>
          </p>
          <span className="text-[#33333366]">{hourSlice(updatedAt)}</span>
        </div>
      </div>
      <hr />
    </>
  );
};
