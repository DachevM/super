import React, { useCallback } from "react";

import "./brands.css";
import { type IBrands } from "../../../Types/types";
import { BrandX } from "../../../Mobx/store/brandsX";

interface DeleteBrandProps {
  setShow: (value: boolean) => void;
  brand: IBrands;
}
const DeleteBrand = ({ brand, setShow }: DeleteBrandProps) => {
  const closeModal = useCallback(() => {
    setShow(false);
  }, [setShow]);

  const removeBrands = (branda: IBrands) => {
    BrandX.removeBrand(branda);
    setShow(false);
  };

  const removeClick = useCallback(() => {
    removeBrands(brand);
  }, [brand, removeBrands]);

  return (
    <div className={"delete_brand"}>
      <div>Вы действительно хотите удалить бренд?</div>
      <div className={"delete_brand_name"}>{brand.name}</div>
      <button onClick={removeClick} className={"brand_delete"}>
        Удалить бренд
      </button>
      <button onClick={closeModal} className={"banners_delete_cancel"}>
        Отменить удаление
      </button>
    </div>
  );
};

export default DeleteBrand;
