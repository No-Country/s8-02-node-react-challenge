import { Link } from "react-router-dom";

export const Options = () => {
  return (
    <div className="flex flex-col absolute min-w-max  right-0 bg-white rounded-lg shadow-md p-2 font-medium">
      <Link to={"/addmoney"} className="p-2  hover:bg-slate-200  rounded-sm">
        Ingresar dinero
      </Link>
      <Link to={"/transfer"} className="p-2  hover:bg-slate-200  rounded-sm">
        Transferir dinero
      </Link>
      <hr />
      <Link to={"/profile"} className="p-2  hover:bg-slate-200 rounded-sm">
        Tu CVU
      </Link>
    </div>
  );
};
