import React, { useCallback } from "react";
import { ThemeProvider } from "@emotion/react";
import { Button } from "@mui/material";

import { theme } from "../../../Customization/Customization";
import "./brands.css";
import { type IBrands } from "../../../types/types";
import { BrandX } from "../../../Mobx/store/brandsX";

interface DeleteBrandProps {
  setShow: (value: boolean) => void;
  brand: IBrands;
}
const style = { marginBottom: "20px" };
const DeleteBrand = ({ brand, setShow }: DeleteBrandProps) => {
  const closeModal = useCallback(() => {
    setShow(false);
  }, []);

  const removeBrands = (branda: IBrands) => {
    BrandX.removeBrand(branda);
    setShow(false);
  };

  return (
    <div className={"delete_brand"}>
      <div>Вы действительно хотите удалить бренд?</div>
      <div className={"delete_brand_name"}>{brand.name}</div>
      <ThemeProvider theme={theme}>
        <Button
          sx={style}
          onClick={useCallback(() => {
            removeBrands(brand);
          }, [])}
          fullWidth={true}
          variant="contained"
        >
          Удалить бренд
        </Button>
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <Button onClick={closeModal} fullWidth={true} variant="text">
          Отменить удаление
        </Button>
      </ThemeProvider>
    </div>
  );
};

export default DeleteBrand;
