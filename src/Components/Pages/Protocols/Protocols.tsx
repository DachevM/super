import React, { useCallback, useState } from "react";

import ProtocolAdd from "./ProtocolAdd";

import Modal from "../../UI/PopUP/Modal";
import { Img } from "../../../Images/Img";
import "./protocol.css";
import { type IProtocol } from "../../../Types/types";
import { protocolAPI } from "../../../RTK/services/ProtocolService";

interface ProtocolProps {
  filtered: IProtocol[];
}

const Protocols = ({ filtered }: ProtocolProps) => {
  const [show, setShow] = useState<boolean>(false);
  const [deleteProtocol] = protocolAPI.useDeleteProtocolMutation();

  const showModal = useCallback(() => {
    setShow(true);
  }, []);

  const removeProtocol = (item: IProtocol) => {
    deleteProtocol(item);
  };

  return (
    <div className={"protocols"}>
      <div className={"protocols_head"}>
        <button className={"protocols_head_butt"} onClick={showModal}>
          Добавить протокол
        </button>
      </div>

      <div>
        <div className={"protocolsCategory_body_head"}>Название протокола</div>
        {filtered && filtered.length !== 0 ? (
          <div className={"protocolsCategory_data"}>
            {filtered &&
              filtered.map((elem) => (
                <div key={elem.id}>
                  {show && (
                    <Modal show={show} setShow={setShow}>
                      <ProtocolAdd
                        key={elem.id}
                        filtered={filtered}
                        setShow={setShow}
                      />
                    </Modal>
                  )}

                  <div key={elem.id} className={"protocolsCategory_body_data"}>
                    <div className={"protocolsCategory_body_data_name"}>
                      {elem.name}
                    </div>

                    <div>
                      <img className={"protocols_pen"} src={Img.pen} alt={""} />
                      <img
                        onClick={() => removeProtocol(elem)}
                        className={"protocols_trash"}
                        src={Img.trash}
                        alt={""}
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <p>Здесь пока нет протоколов</p>
        )}
      </div>
    </div>
  );
};

export default Protocols;
