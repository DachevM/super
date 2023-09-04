import { useCallback, useState } from "react";

import type React from "react";

import "./brands.css";

import { BrandX } from "../../../Mobx/store/brandsX";

const BrandsHead = () => {
  const [name, setName] = useState<string>("");
  const [icon, setIcon] = useState<string>("");
  const newBrandAdd = () => {
    const newBrand = {
      id: String(Date.now()),
      name: name,
      icon: icon,
      margin: 0,
    };
    BrandX.addBrand(newBrand);
    setName("");
    setIcon("");
  };

  const ChangeInpName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    },
    []
  );

  const ChangeInpIcon = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setIcon(e.target.value);
    },
    []
  );
  return (
    <div className={"brands_head"}>
      <input
        value={name}
        onChange={ChangeInpName}
        type={"text"}
        placeholder={"Введите название бренда"}
        className={"brands_head_inp"}
      />
      <input
        value={icon}
        onChange={ChangeInpIcon}
        type={"text"}
        placeholder={"Загрузите логотип бренда"}
        className={"brands_head_inp"}
      />
      <button className={"brands_head_butt"} onClick={newBrandAdd}>
        Добавить бренд
      </button>
    </div>
  );
};

export default BrandsHead;
