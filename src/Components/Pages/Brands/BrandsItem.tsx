import React, { useCallback, useState } from "react";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";

import DeleteBrand from "./DeleteBrand";

import DeleteModal from "../../UI/PopUP/DeleteModal";
import { Img } from "../../../Images/Img";
import { type IBrands } from "../../../Types/types";

interface BrandsListProps {
  brand: IBrands;
}

const BrandsItem = ({ brand }: BrandsListProps) => {
  const [show, setShow] = useState<boolean>(false);

  const showModal = useCallback(() => {
    setShow(true);
  }, []);

  return (
    <div key={brand.id} className={"brands_body_brands"}>
      <div className={"brands_body_left_brands"}>
        <div className={"brands_image"}>
          <ImageOutlinedIcon fontSize={"large"} />
        </div>{" "}
      </div>
      <div className={"brands_body_right_brands"}>
        {brand.name}
        <div>
          {" "}
          <img className={"brands_pen"} src={Img.pen} alt={""} />
          <img
            className={"brands_trash"}
            src={Img.trash}
            alt={""}
            onClick={showModal}
          />
        </div>
        {show && (
          <DeleteModal show={show} setShow={setShow}>
            <DeleteBrand setShow={setShow} brand={brand} />
          </DeleteModal>
        )}
      </div>
    </div>
  );
};

export default BrandsItem;
