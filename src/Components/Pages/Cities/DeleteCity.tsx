import React, { useCallback } from "react";

import "./cities.css";
import { type ICities } from "../../../Types/types";

interface DeleteCityProps {
  setShow: (value: boolean) => void;
  city: ICities;
  removeCity: (v: ICities) => void;
}
const DeleteCity = ({ city, removeCity, setShow }: DeleteCityProps) => {
  const closeModal = useCallback(() => {
    setShow(false);
  }, [setShow]);

  const removeClick = useCallback(() => {
    removeCity(city);
  }, [city, removeCity]);

  return (
    <div className={"сity_delete"}>
      <div>Вы действительно хотите удалить город?</div>
      <div className={"city_name_delete"}>{city.name}</div>
      <button onClick={removeClick} className={"city_delete"}>
        Удалить город
      </button>
      <button onClick={closeModal} className={"city_delete_cancel"}>
        Отменить удаление
      </button>
    </div>
  );
};

export default DeleteCity;
