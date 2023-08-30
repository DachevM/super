import React, { useCallback, useState } from "react";

import PromocodeAdd from "./PromocodeAdd";

import Modal from "../../UI/PopUP/Modal";
import "./promocode.css";
import { type IPromocode } from "../../../types/types";

interface HeadProps {
  promocode: IPromocode[];
  setPromocode: (value: IPromocode[]) => void;
}

const PromocodeHead = ({ promocode, setPromocode }: HeadProps) => {
  const [show, setShow] = useState<boolean>(false);
  const showModal = useCallback(() => {
    setShow(true);
  }, []);
  return (
    <div className={"promocode_head"}>
      <button className={"promocode_head_butt"} onClick={showModal}>
        Добавить промокод
      </button>
      <Modal show={show} setShow={setShow}>
        <PromocodeAdd
          setPromocode={setPromocode}
          promocode={promocode}
          setShow={setShow}
        />
      </Modal>
    </div>
  );
};

export default PromocodeHead;
