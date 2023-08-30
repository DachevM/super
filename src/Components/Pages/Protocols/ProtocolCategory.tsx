import { useCallback, useState } from "react";

import type React from "react";

import { Img } from "../../../images/Img";
import "./protocol.css";
import { type IProtocolCategory } from "../../../types/types";

interface CategoryProps {
  protocolsCategory: IProtocolCategory[];
  setSelected: (value: IProtocolCategory) => void;
  setProtocols: (value: IProtocolCategory[]) => void;
}

const ProtocolCategory = ({
  protocolsCategory,
  setProtocols,
  setSelected,
}: CategoryProps): JSX.Element => {
  const [name, setProtocolsName] = useState<string>("");
  const removeCategory = (protocolCategory: IProtocolCategory): void => {
    setProtocols(protocolsCategory.filter((e) => e.id !== protocolCategory.id));
  };

  const newProtocols = useCallback((): void => {
    const newProtocol = {
      name,
      id: String(Date.now()),
    };
    setProtocols([...protocolsCategory, newProtocol]);
    setProtocolsName("");
  }, [name, protocolsCategory, setProtocols]);

  return (
    <div className={"protocolsCategory"}>
      <div className={"protocolsCategory_head"}>
        <input
          value={name}
          onChange={useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
            setProtocolsName(e.target.value);
          }, [])}
          type={"text"}
          placeholder={"Введите название категории протокола"}
          className={"protocols_head_inp"}
        />
        <button
          className={"protocols_category_head_butt"}
          onClick={newProtocols}
        >
          Добавить категорию протокола
        </button>
      </div>
      <div>
        <div className={"protocolsCategory_body_head"}>Название категории</div>
        {protocolsCategory && protocolsCategory.length !== 0 ? (
          <div className={"protocolsCategory_data"}>
            {protocolsCategory.map((elem) => (
              <div key={elem.id} className={"protocolsCategory_body_data"}>
                <div
                  onClick={() => {
                    setSelected(elem);
                  }}
                  className={"protocolsCategory_body_data_name"}
                >
                  {elem.name}
                </div>
                <div>
                  <img className={"protocols_pen"} src={Img.pen} alt={""} />
                  <img
                    className={"protocols_trash"}
                    src={Img.trash}
                    alt={""}
                    onClick={() => {
                      removeCategory(elem);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Здесь пока нет категорий протоколов</p>
        )}
      </div>
    </div>
  );
};

export default ProtocolCategory;
