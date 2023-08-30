import { useCallback, useState } from "react";

import type React from "react";

import { Img } from "../../../images/Img";
import { useAppDispatch } from "../../../Redux/hooks";
import {
  addCategory,
  removeSub,
} from "../../../Redux/action-creators/subcategoryAction";
import "./categories.css";
import { type ISubCategory } from "../../../types/types";
interface SubcategoryProps {
  filtered: ISubCategory[];
}

const Subcategories = ({ filtered }: SubcategoryProps) => {
  const [name, setCategName] = useState<string>("");
  const dispatch = useAppDispatch();
  const removeSubcategories = (sub: ISubCategory) => {
    return dispatch(removeSub(sub));
  };

  const newSubcategories = () => {
    const newSubcategories = {
      name,
      position: 0,
      id: String(Date.now()),
      catalog_product: "",
      __v: 0,
    };
    if (newSubcategories.name.length !== 0)
      dispatch(addCategory(newSubcategories));
    setCategName("");
  };

  return (
    <div className={"subcategories"}>
      <div className={"subcategories_head"}>
        <input
          value={name}
          onChange={useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
            setCategName(e.target.value);
          }, [])}
          type={"text"}
          placeholder={"Введите название категории"}
          className={"categories_search_inp"}
        />
        <button className={"categories_butt"} onClick={newSubcategories}>
          Добавить категорию
        </button>
      </div>
      <div>
        <div className={"categories_body_head"}>Название подкатегории</div>

        {filtered.length !== 0 ? (
          <div className={"categories_data"}>
            {filtered.map((elem) => (
              <div key={elem.id} className={"categories_body_data"}>
                <div className={"categories_body_data_name"}>{elem.name}</div>
                <div>
                  <img className={"categories_pen"} src={Img.pen} alt={""} />
                  <img
                    className={"categories_trash"}
                    src={Img.trash}
                    alt={""}
                    onClick={() => removeSubcategories(elem)}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Здесь пока нет категории</p>
        )}
      </div>
    </div>
  );
};

export default Subcategories;
