import React, { useEffect, useState } from "react";

import BannersHead from "./BannersHead";
import BannersList from "./BannersList";

import "./banners.css";

import { type IBanners } from "../../../types/types";
import { bannersAPI } from "../../../RTK/services/BannersService";

const Banners = () => {
  const { data: banner } = bannersAPI.useFetchBannersQuery("");
  const [banners, setBanners] = useState<IBanners[]>([]);
  useEffect(() => {
    setBanners(banner);
  }, [banner]);
  return (
    <div className={"banners_main"}>
      <BannersHead banners={banners} setBanners={setBanners} />
      <BannersList setBanners={setBanners} banners={banners} />
    </div>
  );
};

export default Banners;
