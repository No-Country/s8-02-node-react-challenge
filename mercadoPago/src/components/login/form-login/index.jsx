import { useEffect, useState } from "react";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import useLogin from "../../../hooks/useLogin";

const FormLogin = ({ handleClick }) => {
  const [dataForm, setDataForm] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

  const { error, isLoading, postData } = useLogin({
    onSuccess: (data) => {
      dispatch(login(data));
      navigate("/home");
    },
    onError: (error) => {
      console.log(error);
      console.log("Pass o contraseña incorrecto");
    },
  });

  const { isLoggedIn } = useSelector((state) => state.auth);

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dataForm.email !== "" && dataForm.password !== "") {
      postData("/auth/user/login", dataForm);
    }
    console.log("Complete todos los campos...");
  };

  useEffect(() => {
    if (isLoggedIn) navigate("/home");
  }, [isLoggedIn]);

  return (
    <form
      onSubmit={handleSubmit}
      action=""
      className="flex flex-col items-center justify-center gap-2"
    >
      <div className="w-[328px] h-[184px] bg-white rounded-[10px] shadow-cardShadow flex">
        <AiOutlineInfoCircle
          onClick={handleClick}
          className="w-6 h-6 mt-3 ml-3 text-[#6F0B19]"
        />

        <div className="flex flex-col gap-5 mt-2">
          <div className="group">
            <label
              className="font-semibold text-xs leading-[15px] pl-2 invisible group-hover:visible group-hover:text-[#39528D]"
              htmlFor="email"
            >
              Correo electrónico
            </label>
            <input
              id="email"
              className="font-medium text-base leading-[16px] placeholder:text-black h-[32px] w-[272px] pl-2 focus:outline-none border-b-2 border-black group-hover:border-[#39528D] placeholder:focus-visible:invisible"
              type="text"
              onChange={handleChange}
              placeholder="Correo electrónico"
              name="email"
              disabled={isLoading}
            />
          </div>
          <div className="relative flex group">
            <div>
              <label
                className="font-semibold text-xs leading-[15px] pl-2 invisible group-hover:visible group-hover:text-[#39528D]"
                htmlFor="pass"
              >
                Contraseña
              </label>
              <input
                id="pass"
                className="font-medium text-base leading-[16px] placeholder:text-black h-[32px] w-[272px] pl-2 focus:outline-none border-b-2 border-black block group-hover:border-[#39528D] placeholder:focus-visible:invisible"
                type={showPassword ? "text" : "password"}
                // value={password}
                onChange={handleChange}
                placeholder="Contraseña"
                name="password"
                disabled={isLoading}
              />
              {showPassword ? (
                <AiOutlineEye
                  onClick={toggleShowPassword}
                  className="absolute w-8 h-8 bottom-2 right-8 group-hover:text-[#39528D]"
                />
              ) : (
                <AiOutlineEyeInvisible
                  onClick={toggleShowPassword}
                  className="absolute w-8 h-8 bottom-2 right-8 group-hover:text-[#39528D]"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {isLoading ? <p>Cargando...</p> : null}
      <button
        type="submit"
        className="text-lg font-semibold leading-[22px] text-white w-[328px] h-[48px] bg-[#10224D] rounded-[10px]"
      >
        Iniciar sesión
      </button>
      {error && <p>Error en la constraseña ...</p>}
      <div className="flex items-center justify-center gap-2 mt-2">
        <p className="text-sm font-semibold leading-[17px]">
          ¿No tienes cuenta?
        </p>
        <Link to="/register">
          <p className="text-[#6F0B19] text-sm leading-[17px] font-semibold">
            CREAR UNA CUENTA
          </p>
        </Link>
      </div>
    </form>
  );
};

export default FormLogin;
