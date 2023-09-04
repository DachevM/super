import { type FC, useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import type * as yup from "yup";
import type React from "react";

import "./auth.css";
import { schema } from "../helper";

const Register: FC = () => {
  const [isType, setIsType] = useState<boolean>(true);
  const [registerEmail, setRegisterEmail] = useState<string>("");
  const [registerPass, setRegisterPass] = useState<string>("");
  const [registerRePass, setRegisterRePass] = useState<string>("");
  const navigate = useNavigate();
  type FormData = yup.InferType<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const handleClickShowPassword = useCallback((e: any) => {
    setIsType((isType) => !isType);
    e.preventDefault();
  }, []);

  const SavePass = useCallback((data: FormData) => {
    errors && localStorage.setItem("E-Mail", data.email);
    errors && localStorage.setItem("password", data.password);
    navigate("/auth/login");
    setRegisterRePass("");
    setRegisterEmail("");
    setRegisterPass("");
  }, []);

  const InputPassChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setRegisterPass(e.target.value);
    },
    []
  );
  const InputRePassChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setRegisterRePass(e.target.value);
    },
    []
  );

  const InputLoginChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setRegisterEmail(e.target.value);
    },
    []
  );

  return (
    <div className={"register_form"}>
      <form className={"login_box"} onSubmit={handleSubmit(SavePass)}>
        <h1 className={"enter"}>Создание учетной записи</h1>
        <div className={"inp_box"}>
          <label className={"auth_label"} form={"outlined-basic"}>
            E-mail
          </label>
          <input
            {...register("email")}
            type={"text"}
            value={registerEmail}
            onChange={InputLoginChange}
            placeholder={"Введите свой e-mail"}
            className={errors?.email ? "input_auth_error" : "input_auth"}
          />
          {errors?.email && (
            <span className={"error_message"}>{errors?.email?.message}</span>
          )}
        </div>
        <label className={"auth_label"} form={"outlined-basic"}>
          Пароль
        </label>
        <div className={"inp_box"}>
          <div className={"inp_box_pass"}>
            <input
              {...register("password")}
              type={isType ? "password" : "text"}
              value={registerPass}
              onChange={InputPassChange}
              placeholder={"Введите свой пароль"}
              className={
                errors.password ? "input_auth_pass_error" : "input_auth_pass"
              }
            />
            <button
              onClick={handleClickShowPassword}
              className={"input_box_button"}
            ></button>
          </div>
          {errors?.password && (
            <span className={"error_message"}>{errors?.password?.message}</span>
          )}
        </div>
        <div></div>
        <label className={"auth_label"} form={"outlined-basic"}>
          Повторите пароль
        </label>
        <div className={"inp_box"}>
          <div className={"inp_box_pass"}>
            <input
              {...register("passwordConfirmation")}
              type={isType ? "password" : "text"}
              value={registerRePass}
              onChange={InputRePassChange}
              placeholder={"Повторите пароль"}
              className={
                errors.passwordConfirmation
                  ? "input_auth_pass_error"
                  : "input_auth_pass"
              }
            />
            <button
              onClick={handleClickShowPassword}
              className={"input_box_button"}
            ></button>
          </div>
          {errors?.passwordConfirmation && (
            <span className={"error_message"}>
              {errors?.passwordConfirmation.message}
            </span>
          )}
        </div>
        <div className={"butt_box"}>
          <button type={"submit"} className={"auth_butt"}>
            Регистрация
          </button>
          <Link className={"link_to_auth"} to={"/auth/login"}>
            {" "}
            У меня уже есть аккаунт
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
