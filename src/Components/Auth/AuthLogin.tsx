import { useCallback, useContext, useState } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import type React from "react";

import { AuthContext } from "../../Context/context";

import "./auth.css";

const AuthLogin = () => {
  const [isType, setIsType] = useState<boolean>(true);
  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPass, setLoginPass] = useState<string>("");
  const [authError, setAuthError] = useState<boolean>(false);
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClickShowPassword = useCallback((e: any) => {
    setIsType((isType) => !isType);
    e.preventDefault();
  }, []);

  const auth = useCallback(
    (e: any) => {
      e.preventDefault();
      if (
        localStorage.getItem("E-Mail") === loginEmail &&
        localStorage.getItem("password") === loginPass
      ) {
        setIsAuth(true);
        navigate("/products");
      } else {
        setAuthError(true);
      }
      setLoginEmail("");
      setLoginPass("");
    },
    [loginEmail, loginPass, navigate, setIsAuth]
  );

  const InputPassChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLoginPass(e.target.value);
    },
    []
  );

  const InputLoginChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLoginEmail(e.target.value);
    },
    []
  );

  return (
    <div className={"login_form"}>
      <form className={"login_box"}>
        <h1 className={"enter"}>Вход в учетную запись</h1>
        <div className={"inp_box"}>
          <label className={"auth_label"} form={"outlined-basic"}>
            E-mail
          </label>
          <input
            type={"text"}
            value={loginEmail}
            onChange={InputLoginChange}
            placeholder={"Введите свой e-mail"}
            className={authError ? "input_auth_error" : "input_auth"}
          />
          {authError && (
            <span className={"error_message"}>Неверный логин или пароль</span>
          )}
        </div>

        <label className={"auth_label"} form={"outlined-basic"}>
          Пароль
        </label>
        <div className={"inp_box_pass"}>
          <input
            type={isType ? "password" : "text"}
            value={loginPass}
            onChange={InputPassChange}
            placeholder={"Введите свой пароль"}
            className={authError ? "input_auth_pass_error" : "input_auth_pass"}
          />
          <button
            onClick={handleClickShowPassword}
            className={"input_box_button"}
          ></button>
        </div>
        {authError && (
          <span className={"error_message"}>Неверный логин или пароль</span>
        )}
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label={"Запомнить меня"}
        />
        <div className={"butt_box"}>
          <button onClick={auth} className={"auth_butt"}>
            Войти
          </button>
          <Link className={"link_to_auth"} to={"/auth/register"}>
            {" "}
            У меня еще нет аккаунта
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AuthLogin;
