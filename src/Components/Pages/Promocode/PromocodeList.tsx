import React from "react";

import "./promocode.css";
import { type IPromocode } from "../../../Types/types";
import { Img } from "../../../Images/Img";
interface PromocodeBodyProps {
  promocode: IPromocode[];
  setPromocode: (value: IPromocode[]) => void;
}
const PromocodeList = ({ promocode, setPromocode }: PromocodeBodyProps) => {
  const removePromocode = (promo: IPromocode) => {
    setPromocode(promocode.filter((e) => e.id !== promo.id));
  };

  return (
    <div className={"promocode_body"}>
      <div className={"promocode_body_head"}>Заголовок</div>
      {promocode.length !== 0 ? (
        <div className={"promocode_body_layout"}>
          {promocode.map((elem) => (
            <div key={elem.id} className={"promocode_body_banners"}>
              <div className={"promocode_body_right_banners"}>
                {elem.name}
                <div>
                  <img className={"promocode_pen"} src={Img.pen} alt={""} />
                  <img
                    className={"promocode_trash"}
                    src={Img.trash}
                    alt={""}
                    onClick={() => {
                      removePromocode(elem);
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Здесь пока нет промокодов</p>
      )}
    </div>
  );
};

export default PromocodeList;
