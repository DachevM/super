import { useCallback, useContext, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";

import type React from "react";

import { theme } from "../../Customization/Customization";
import { AuthContext } from "../../Context/context";

import "./auth.css";

const AuthLogin = () => {
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleClickShowPassword = useCallback(() => {
    setShowPassword((show) => !show);
  }, []);
  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPass, setLoginPass] = useState<string>("");

  const auth = useCallback(() => {
    if (
      localStorage.getItem("E-Mail") === loginEmail &&
      localStorage.getItem("password") === loginPass
    ) {
      setIsAuth(true);
      navigate("/products");
    } else {
      alert("Неверные учетные данные");
    }
    setLoginEmail("");
    setLoginPass("");
  }, []);

  return (
    <div className={"login_form"}>
      <Box className={"login_box"}>
        <h1>Вход в учетную запись</h1>
        <div className={"inp_box"}>
          <InputLabel htmlFor="outlined-basic">E-Mail</InputLabel>
          <TextField
            value={loginEmail}
            onChange={useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
              setLoginEmail(e.target.value);
            }, [])}
            placeholder={"Введите свой e-mail"}
            className={"auth_inp"}
            id="outlined-basic"
            variant="outlined"
          />
        </div>
        <div className={"inp_box"}>
          <InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
          <OutlinedInput
            value={loginPass}
            onChange={useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
              setLoginPass(e.target.value);
            }, [])}
            placeholder={"Введите свой пароль"}
            className={"auth_inp"}
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </div>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Запомнить меня"
        />
        <div className={"butt_box"}>
          <ThemeProvider theme={theme}>
            <Button onClick={auth} color="primary" variant="contained">
              Войти
            </Button>
          </ThemeProvider>
          <Link className={"link_to_auth"} to={"/auth/register"}>
            {" "}
            У меня еще нет аккаунта
          </Link>
        </div>
      </Box>
    </div>
  );
};

export default AuthLogin;
