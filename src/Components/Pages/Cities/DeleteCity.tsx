import React, { useCallback } from "react";
import { ThemeProvider } from "@emotion/react";
import { Button } from "@mui/material";

import { theme } from "../../../Customization/Customization";
import "./cities.css";
import { type ICities } from "../../../types/types";

interface DeleteCityProps {
  setShow: (value: boolean) => void;
  city: ICities;
  removeCity: (v: ICities) => void;
}
const style = { marginBottom: "20px" };
const DeleteCity = ({ city, removeCity, setShow }: DeleteCityProps) => {
  const closeModal = useCallback(() => {
    setShow(false);
  }, []);
  return (
    <div className={"сity_delete"}>
      <div>Вы действительно хотите удалить город?</div>
      <div className={"city_name_delete"}>{city.name}</div>
      <ThemeProvider theme={theme}>
        <Button
          sx={style}
          onClick={useCallback(() => {
            removeCity(city);
          }, [])}
          fullWidth={true}
          variant="contained"
        >
          Удалить город
        </Button>
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <Button onClick={closeModal} fullWidth={true} variant="text">
          Отменить удаление
        </Button>
      </ThemeProvider>
    </div>
  );
};

export default DeleteCity;
