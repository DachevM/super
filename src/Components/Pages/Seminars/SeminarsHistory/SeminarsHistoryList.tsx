import React, { type ChangeEvent, useCallback, useState } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import "./seminarsHistory.css";
import { type IHistory } from "../../../../types/types";

interface HistoryBodyProps {
  history: IHistory[];
  searchedSeminarsHistory: IHistory[];
  setHistory: (v: IHistory[]) => void;
}

const SeminarsHistoryList = ({
  searchedSeminarsHistory,
  history,
  setHistory,
}: HistoryBodyProps) => {
  const removeSeminar = (seminar: IHistory) => {
    setHistory(history.filter((e) => e.id !== seminar.id));
  };

  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const checkboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const isSelected = e.target.checked;
    const value = e.target.value;
    if (isSelected) {
      setSelectedItems([...selectedItems, value]);
    } else {
      setSelectedItems((prevData) => {
        return prevData.filter((id) => {
          return id !== value;
        });
      });
    }
  };
  const checkAllHandler = useCallback(() => {
    if (history.length === selectedItems.length) {
      setSelectedItems([]);
    } else {
      const seminarsIds = history.map((item) => {
        return item.id;
      });
      setSelectedItems(seminarsIds);
    }
  }, []);

  return (
    <div className={"seminarsHistoryBody"}>
      <div className={"seminarsHistory_descr"}>
        <p className={"seminarsHistory_name"}>
          <FormControlLabel
            label={""}
            control={<Checkbox onClick={checkAllHandler} size={"small"} />}
          />
          Название семинара
        </p>
        <p className={"seminarsHistory_date"}>Дата</p>
      </div>
      <div className={"seminarsHistory_seminars"}>
        {searchedSeminarsHistory.length !== 0 ? (
          <>
            {searchedSeminarsHistory.map((elem) => (
              <div key={elem.id} className={"seminarsHistory_section"}>
                <div className={"seminarsHistory_name"}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={checkboxHandler}
                        checked={selectedItems.includes(elem.id)}
                        value={elem.id}
                        size={"small"}
                      />
                    }
                    label={""}
                  />
                  {elem.name}
                </div>
                <div className={"seminarsHistory_date"}>
                  {elem.date}
                  <FavoriteBorderOutlinedIcon />{" "}
                  <DeleteOutlineOutlinedIcon
                    onClick={() => {
                      removeSeminar(elem);
                    }}
                    cursor={"pointer"}
                  />
                </div>
              </div>
            ))}
          </>
        ) : (
          <p>Здесь пока нет семинаров</p>
        )}
      </div>
    </div>
  );
};

export default SeminarsHistoryList;
