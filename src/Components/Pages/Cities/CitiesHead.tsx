import { useCallback, useState } from "react";

import type React from "react";

import "./cities.css";

import { type ICities } from "../../../Types/types";

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
  }, [address, cities, name, setCities]);

  const ChangeInpName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCityName(e.target.value);
    },
    []
  );

  const ChangeInpAddress = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCityAddress(e.target.value);
    },
    []
  );

  return (
    <div className={"cities_head"}>
      <input
        value={name}
        onChange={ChangeInpName}
        type={"text"}
        placeholder={"Введите название города"}
        className={"cities_head_inp"}
      />
      <input
        value={address}
        onChange={ChangeInpAddress}
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
