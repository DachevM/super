import { useCallback, useState } from "react";

import type React from "react";

import "./cities.css";

import { type ICities } from "../../../types/types";

interface CitiesHeadProps {
  cities: ICities[];
  setCities: (v: ICities[]) => void;
}

const CitiesHead = ({ cities, setCities }: CitiesHeadProps) => {
  const [name, setCityName] = useState<string>("");
  const [address, setCityAddress] = useState<string>("");

  const newCityAdd = useCallback(() => {
    const newCity = {
      name,
      address,
      id: String(Date.now()),
    };
    setCities([...cities, newCity]);
    setCityName("");
    setCityAddress("");
  }, []);
  return (
    <div className={"cities_head"}>
      <input
        value={name}
        onChange={useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
          setCityName(e.target.value);
        }, [])}
        type={"text"}
        placeholder={"Введите название города"}
        className={"cities_head_inp"}
      />
      <input
        value={address}
        onChange={useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
          setCityAddress(e.target.value);
        }, [])}
        type={"text"}
        placeholder={"Введите адрес"}
        className={"cities_head_inp"}
      />
      <button className={"cities_head_butt"} onClick={newCityAdd}>
        Добавить город
      </button>
    </div>
  );
};

export default CitiesHead;
