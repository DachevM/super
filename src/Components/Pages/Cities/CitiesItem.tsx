import React, { useCallback, useState } from "react";

import DeleteCity from "./DeleteCity";

import DeleteModal from "../../UI/PopUP/DeleteModal";
import { Img } from "../../../Images/Img";
import "./cities.css";
import { type ICities } from "../../../Types/types";
interface CitiesListProps {
  cities: ICities[];
  setCities: (value: ICities[]) => void;
  city: ICities;
}

const CitiesItem = ({ city, setCities, cities }: CitiesListProps) => {
  const [show, setShow] = useState<boolean>(false);

  const showModal = useCallback(() => {
    setShow(true);
  }, []);

  const removeCity = useCallback(
    (city: ICities) => {
      setCities(cities.filter((e) => e.id !== city.id));
      setShow(false);
    },
    [cities, setCities]
  );

  return (
    <div key={city.id} className={"cities_body_cities"}>
      <div className={"cities_body_left_cities"}>{city.name}</div>
      <div className={"cities_body_right_cities"}>
        {city.address}
        <div>
          <img className={"cities_pen"} src={Img.pen} alt={""} />
          <img
            className={"cities_trash"}
            src={Img.trash}
            alt={""}
            onClick={showModal}
          />
        </div>
        {show && (
          <DeleteModal show={show} setShow={setShow}>
            <DeleteCity setShow={setShow} city={city} removeCity={removeCity} />
          </DeleteModal>
        )}
      </div>
    </div>
  );
};

export default CitiesItem;
