import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";

import BrandsHead from "./BrandsHead";
import BrandsList from "./BrandsList";

import "./brands.css";
import { BrandX } from "../../../Mobx/store/brandsX";

const Brands = observer(() => {
  useEffect(() => {
    void BrandX.fetchBrandsX();
  }, []);

  return (
    <div className={"brands_main"}>
      <BrandsHead />
      <BrandsList brands={BrandX.brands} />
    </div>
  );
});
Brands.displayName = "Brands";
export default Brands;
