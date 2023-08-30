import { useCallback, useMemo, useState } from "react";
import { TextField } from "@mui/material";

import type React from "react";

import { type IBanners } from "../../../types/types";
import { Img } from "../../../images/Img";

interface BannerAddProps {
  setShow: (value: boolean) => void;
  banners: IBanners[];
  setBanners: (v: IBanners[]) => void;
}

const BannerAdd = ({ setShow, banners, setBanners }: BannerAddProps) => {
  const [search, setSearch] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [percent, setPercent] = useState<string>("");
  const newBannerAdd = useCallback(() => {
    const newBanner: IBanners = {
      name,
      description,
      percent,
      id: String(Date.now()),
      createdAt: "",
      updatedAt: "",
      image: "",
      mobileImage: "",
      availableFor: "",
      type: "",
      promocode: {
        id: "",
        name: "",
        promocode: null,
        percent: 0,
        price: null,
      },
      products: [],
    };

    setBanners([...banners, newBanner]);
    setName("");
    setShow(false);
  }, []);

  const searchedProd = useMemo(() => {
    return banners.map((elem) =>
      elem.products.filter((e) =>
        e.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [banners, search]);

  console.log(searchedProd.map((e) => e.map((d) => d.id)));

  return (
    <div className={"banners_add"}>
      <div className={"banners_add_head"}>
        <button
          onClick={useCallback(() => {
            setShow(false);
          }, [])}
          className={"banners_butt_close"}
        >
          Удалить
        </button>
        <button onClick={newBannerAdd} className={"banners_butt_save"}>
          Сохранить
        </button>
      </div>
      <div className={"banners_add_body"}>
        <div className={"edit_descr"}>
          <label form={"outlined-basic"}>Заголовок</label>
          <input
            type={"text"}
            value={name}
            onChange={useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
              setName(e.target.value);
            }, [])}
            placeholder={"Напишите заголовок"}
            className={"banners_descr_inp"}
          />
          <label form={"outlined-basic"}>Краткое описание</label>
          <input
            type={"text"}
            value={description}
            onChange={useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
              setDescription(e.target.value);
            }, [])}
            placeholder={"Краткое описание"}
            className={"banners_descr_inp"}
          />
          <label form={"outlined-basic"}>Процент скидки</label>
          <input
            type={"text"}
            value={percent}
            onChange={useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
              setPercent(e.target.value);
            }, [])}
            placeholder={"Запишите процент скидки"}
            className={"banners_descr_inp"}
          />
          <label form={"outlined-basic"}>Баннер</label>
          <input
            type={"text"}
            placeholder={"Вставьте ссылку на Google Drive"}
            className={"banners_descr_inp"}
          />

          {searchedProd.map((elem) =>
            elem.map((e) => (
              <div key={e.id} className={"banner_products_section"}>
                <div className={"banner_product_name"}>{e.name}</div>
                <div>{e.brand.name}</div>
                <div>
                  <img
                    className={"banners_add_trash"}
                    src={Img.trash}
                    alt={""}
                  />
                </div>
              </div>
            ))
          )}
          <div className={"banners_add_search"}>
            <TextField
              size={"small"}
              value={search}
              onChange={useCallback(
                (e: React.ChangeEvent<HTMLInputElement>) => {
                  setSearch(e.target.value);
                },
                []
              )}
              fullWidth={true}
              className={"products_search_inp"}
              placeholder={"Поиск по товарам"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerAdd;
