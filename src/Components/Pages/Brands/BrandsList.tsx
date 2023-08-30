import React from "react";

import BrandsItem from "./BrandsItem";

import "./brands.css";

import { type IBrands } from "../../../types/types";

interface BrandsBodyProps {
  brands: IBrands[];
}

const BrandsList = ({ brands }: BrandsBodyProps) => {
  return (
    <div className={"brands_body"}>
      <div className={"brands_body_head"}>
        <div className={"brands_body_left_head"}>Логотип бренда</div>
        <div className={"brands_body_right_head"}>Название бренда</div>
      </div>
      {brands.length > 0 ? (
        <div className={"brands_body_layout"}>
          {brands.map((brand) => (
            <BrandsItem key={brand.id} brand={brand} />
          ))}
        </div>
      ) : (
        <p>Здесь пока нет брендов</p>
      )}
    </div>
  );
};

export default BrandsList;
