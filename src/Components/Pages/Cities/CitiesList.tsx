import React from "react";

import CitiesItem from "./CitiesItem";

import "./cities.css";

import { type ICities } from "../../../Types/types";

interface CitiesHeadProps {
  cities: ICities[];
  setCities: (v: ICities[]) => void;
}

const CitiesList = ({ cities, setCities }: CitiesHeadProps) => {
  return (
    <div className={"cities_body"}>
      <div className={"cities_body_head"}>
        <div className={"cities_body_left_head"}>Город</div>
        <div className={"cities_body_right_head"}>Адрес</div>
      </div>
      {cities.length > 0 ? (
        <div className={"cities_body_layout"}>
          {cities.map((elem) => (
            <CitiesItem
              key={elem.id}
              cities={cities}
              setCities={setCities}
              city={elem}
            />
          ))}
        </div>
      ) : (
        <p>Здесь пока нет городов</p>
      )}
    </div>
  );
};

export default CitiesList;
