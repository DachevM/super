import { useCallback, useState } from "react";

import BannerAddSearch from "./BannerAddSearch";

import type React from "react";

import { type IBanners } from "../../../Types/types";
import { initialBannerValue } from "../../helper";
import { bannersAPI } from "../../../RTK/services/BannersService";

interface BannerAddProps {
  setShow: (value: boolean) => void;
  banners: IBanners[];
}

const BannerAdd = ({ setShow, banners }: BannerAddProps) => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [percent, setPercent] = useState<string>("");
  const [bannersAdd] = bannersAPI.useBannersAddMutation();

  const newBannerAdd = async () => {
    const newBanner: IBanners = {
      ...initialBannerValue,
      name: name,
      description: description,
      percent: percent,
      id: String(Date.now()),
    };
    await bannersAdd(newBanner);
    setName("");
    setShow(false);
  };
  console.log(banners);
  const showModalChange = useCallback(() => {
    setShow(false);
  }, [setShow]);

  const ChangeInpName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    },
    []
  );

  const ChangeInpDescription = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setDescription(e.target.value);
    },
    []
  );

  const ChangeInpPercent = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPercent(e.target.value);
    },
    []
  );

  return (
    <div className={"banners_add"}>
      <div className={"banners_add_head"}>
        <button onClick={showModalChange} className={"banners_butt_close"}>
          Удалить
        </button>
        <button onClick={newBannerAdd} className={"banners_butt_save"}>
          Сохранить
        </button>
      </div>
      <div className={"banners_add_body"}>
        <div>
          <label form={"outlined-basic"}>Заголовок</label>
          <input
            type={"text"}
            value={name}
            onChange={ChangeInpName}
            placeholder={"Напишите заголовок"}
            className={"banners_descr_inp"}
          />
          <label form={"outlined-basic"}>Краткое описание</label>
          <input
            type={"text"}
            value={description}
            onChange={ChangeInpDescription}
            placeholder={"Краткое описание"}
            className={"banners_descr_inp"}
          />
          <label form={"outlined-basic"}>Процент скидки</label>
          <input
            type={"text"}
            value={percent}
            onChange={ChangeInpPercent}
            placeholder={"Запишите процент скидки"}
            className={"banners_descr_inp"}
          />
          <label form={"outlined-basic"}>Баннер</label>
          <input
            type={"text"}
            placeholder={"Вставьте ссылку на Google Drive"}
            className={"banners_descr_inp"}
          />
          <BannerAddSearch banners={banners} />
        </div>
      </div>
    </div>
  );
};

export default BannerAdd;
