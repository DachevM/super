import { useCallback, useState } from "react";

import ProtocolsAddSearch from "./ProtocolsAddSearch";

import type React from "react";

import "./protocol.css";
import { type IProtocol } from "../../../Types/types";
import { protocolAPI } from "../../../RTK/services/ProtocolService";
import { initialProtocolValue } from "../../helper";

interface ProtocolAddProps {
  filtered: IProtocol[];

  setShow: (value: boolean) => void;
}

const ProtocolAdd = ({ filtered, setShow }: ProtocolAddProps) => {
  const [name, setName] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [protocolAdd] = protocolAPI.useProtocolAddMutation();

  const newProtocolAdd = useCallback(() => {
    const newProtocol: IProtocol = {
      ...initialProtocolValue,
      name: name,
      description: description,
      brand: {
        id: "",
        name: brand,
      },
    };
    protocolAdd(newProtocol);
    setShow(false);
  }, [brand, description, name, protocolAdd, setShow]);

  const ChangeInpName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    },
    []
  );

  const ChangeInpBrand = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setBrand(e.target.value);
    },
    []
  );
  const ChangeInpDescr = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setDescription(e.target.value);
    },
    []
  );

  return (
    <div className={"protocol_add"}>
      <div className={"protocol_add_head"}>
        <button onClick={newProtocolAdd} className={"protocol_butt_save"}>
          Сохранить
        </button>
      </div>
      <div className={"protocol_add_body"}>
        <label form={"outlined-basic"}>Название*</label>
        <input
          type={"text"}
          value={name}
          onChange={ChangeInpName}
          placeholder={"Введите название протокола"}
          className={"protocol_add_inp"}
        />
        <label form={"outlined-basic"}>Бренд*</label>
        <input
          type={"text"}
          value={brand}
          onChange={ChangeInpBrand}
          placeholder={"Выбурите бренд протокола"}
          className={"protocol_add_inp"}
        />
        <label form={"outlined-basic"}>Описание*</label>
        <input
          type={"text"}
          value={description}
          onChange={ChangeInpDescr}
          placeholder={"Введите описание"}
          className={"protocol_add_large_inp"}
        />
        <label form={"outlined-basic"}>Категория</label>
        <input
          type={"text"}
          placeholder={"Введите категорию протокола"}
          disabled={true}
          className={"protocol_add_inp"}
        />
        <>
          <ProtocolsAddSearch filtered={filtered} />
        </>
      </div>
    </div>
  );
};

export default ProtocolAdd;
