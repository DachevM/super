import React from "react";

import BannersHead from "./BannersHead";
import BannersList from "./BannersList";

import "./banners.css";

import { bannersAPI } from "../../../RTK/services/BannersService";

const Banners = () => {
  const { data: banner } = bannersAPI.useFetchBannersQuery("");

  return (
    <div className={"banners_main"}>
      <BannersHead banners={banner} />
      <BannersList banners={banner} />
    </div>
  );
};

export default Banners;
