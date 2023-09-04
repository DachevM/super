import { useCallback, useState } from "react";
import { FormControl, MenuItem, Select } from "@mui/material";

import PromocodeAddSearch from "./PromocodeAddSearch";

import type React from "react";

import { type IPromocode } from "../../../Types/types";
import { initialPromocodeValue } from "../../helper";

interface PromocodeAddProps {
  promocode: IPromocode[];
  setShow: (value: boolean) => void;
  setPromocode: (v: IPromocode[]) => void;
}
const color = { color: "#737680" };
const PromocodeAdd = ({
  setShow,
  promocode,
  setPromocode,
}: PromocodeAddProps) => {
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [name, setName] = useState("");

  const newPromocodeAdd = () => {
    const newPromocode: IPromocode = {
      ...initialPromocodeValue,
      name: name,
      id: Date.now() + "",
    };
    setPromocode([...promocode, newPromocode]);
    setName("");
    setShow(false);
  };

  const ChangeInpName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    },
    []
  );

  const ChangeCategory = useCallback((e: any) => {
    setCategory(e.target.value);
  }, []);

  const ChangeSubcategory = useCallback((e: any) => {
    setSubcategory(e.target.value);
  }, []);

  return (
    <div className={"promocode_add"}>
      <div className={"promocode_add_head"}>
        <button
          onClick={useCallback(() => {
            setShow(false);
          }, [setShow])}
          className={"promocode_butt_close"}
        >
          Удалить
        </button>
        <button onClick={newPromocodeAdd} className={"promocode_butt_save"}>
          Сохранить
        </button>
      </div>
      <div className={"promocode_add_body"}>
        <>
          <label form={"outlined-basic"}>Заголовок</label>
          <input
            type={"text"}
            value={name}
            onChange={ChangeInpName}
            placeholder={"Запишите заголовок"}
            className={"promocode_descr_inp"}
          />
          <label form={"outlined-basic"}>Промокод*</label>
          <input
            type={"text"}
            placeholder={"Запишите название промокода"}
            className={"promocode_descr_inp"}
          />
          <label form={"outlined-basic"}>Процент скидки</label>
          <input
            type={"text"}
            placeholder={"Запишите процент скидки"}
            className={"promocode_descr_inp"}
          />
          <div className={"promocode_category"}>
            <FormControl fullWidth={true} size="small">
              <label form={"demo-select-small"}>Категория</label>
              <Select
                displayEmpty
                id="demo-select-small"
                value={category}
                onChange={ChangeCategory}
              >
                <MenuItem disabled value="">
                  <em style={color}>Выберите категорию</em>
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth={true} size="small">
              <label form={"demo-select-small"}>Подкатегория</label>
              <Select
                displayEmpty
                id="demo-select-small"
                value={subcategory}
                onChange={ChangeSubcategory}
              >
                <MenuItem disabled value="">
                  <em style={color}>Выберите подкатегорию</em>
                </MenuItem>
              </Select>
            </FormControl>
          </div>

          <label form={"outlined-basic"}>Бренд</label>
          <input
            type={"text"}
            placeholder={"Запишите название бренда"}
            className={"promocode_descr_inp"}
          />
          <PromocodeAddSearch promocode={promocode} />
        </>
      </div>
    </div>
  );
};

export default PromocodeAdd;
