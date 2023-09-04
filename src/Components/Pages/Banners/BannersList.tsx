import React from "react";

import "./banners.css";
import { type IBanners } from "../../../Types/types";
import { Img } from "../../../Images/Img";
import { bannersAPI } from "../../../RTK/services/BannersService";
interface BanersBodyProps {
  banners: IBanners[];
}

const BannersList = ({ banners }: BanersBodyProps) => {
  const [deleteBanner] = bannersAPI.useDeleteBannerMutation();

  const removeBanner = (banner: IBanners) => {
    deleteBanner(banner);
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
