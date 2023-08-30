import { useCallback, useMemo, useState } from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { FormControl, MenuItem, Select, TextField } from "@mui/material";

import type React from "react";

import { type IPromocode } from "../../../types/types";

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
  const [search, setSearch] = useState("");

  const searchedProd = useMemo(() => {
    return promocode.map((elem) =>
      elem.products.filter((e) =>
        e.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [promocode, search]);

  const newPromocodeAdd = () => {
    const newPromocode: IPromocode = {
      name,
      id: Date.now() + "",
      percent: 0,
      promocode: "",
      catalog_product: {
        id: "",
        name: "",
        position: 0,
        __v: 0,
      },
      sub_catalog_product: {
        id: "",
        name: "",
        position: 0,
        catalog_product: "",
        __v: 0,
      },
      products: [],
    };
    setPromocode([...promocode, newPromocode]);
    setName("");
    setShow(false);
  };

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
            onChange={useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
              setName(e.target.value);
            }, [])}
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
                onChange={useCallback((e: any) => {
                  setCategory(e.target.value);
                }, [])}
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
                onChange={useCallback((e: any) => {
                  setSubcategory(e.target.value);
                }, [])}
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
          <div className={"promocode_products"}>
            <div>Товары протокола</div>
            <div className={"promocode_products"}>
              {searchedProd.map((elem) =>
                elem.map((e) => (
                  <div key={e.id} className={"promocode_products_section"}>
                    <div className={"promocode_product_name"}>{e.name}</div>
                    <div className={"promocode_product_brand"}>
                      {e.brand.name}
                    </div>
                    <div>
                      <DeleteOutlineOutlinedIcon cursor={"pointer"} />
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className={"promocode_add_search"}>
              <TextField
                size={"small"}
                value={search}
                onChange={useCallback((e: any) => {
                  setSearch(e.target.value);
                }, [])}
                fullWidth={true}
                className={"promocode_search_inp"}
                placeholder={"Поиск по товарам"}
              />
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default PromocodeAdd;
