import React from "react";

import "./banners.css";
import { type IBanners } from "../../../types/types";
import { Img } from "../../../images/Img";
interface BanersBodyProps {
  banners: IBanners[];
  setBanners: (value: IBanners[]) => void;
}

const BannersList = ({ banners, setBanners }: BanersBodyProps) => {
  const removeBanner = (banner: IBanners) => {
    setBanners(banners.filter((e) => e.id !== banner.id));
  };
  return (
    <div className={"banners_body"}>
      <div className={"banners_body_head"}>Заголовок</div>
      {banners && banners.length !== 0 ? (
        <div className={"banners_body_layout"}>
          {banners.map((elem) => (
            <div key={elem.id} className={"banners_body_banners"}>
              <div className={"banners_body_right_banners"}>
                {elem.name}
                <div>
                  <img className={"banners_pen"} src={Img.pen} alt={""} />
                  <img
                    className={"banners_trash"}
                    src={Img.trash}
                    alt={""}
                    onClick={() => {
                      removeBanner(elem);
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
          <div className={"ten_banners"}>Максимум 10 баннеров</div>
        </div>
      ) : (
        <p>Здесь пока нет баннеров</p>
      )}
    </div>
  );
};

export default BannersList;
