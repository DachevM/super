import React, { useCallback, useState } from "react";

import BannerAdd from "./BannerAdd";

import Modal from "../../UI/PopUP/Modal";
import "./banners.css";
import { type IBanners } from "../../../Types/types";
interface HeadProps {
  banners: IBanners[];
}
const BannersHead = ({ banners }: HeadProps) => {
  const [show, setShow] = useState<boolean>(false);

  const showModal = useCallback(() => {
    setShow(true);
  }, []);

  return (
    <div className={"banners_head"}>
      <button className={"banners_head_butt"} onClick={showModal}>
        Добавить баннер
      </button>
      {show && (
        <Modal show={show} setShow={setShow}>
          <BannerAdd banners={banners} setShow={setShow} />
        </Modal>
      )}
    </div>
  );
};

export default BannersHead;
