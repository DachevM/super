import React, { useCallback } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import type { ChangeEvent } from "react";
import type { IHistory } from "../../../../Types/types";

import { Img } from "../../../../Images/Img";
interface ItemProps {
  history: IHistory;
  seminarsHistory: IHistory[];
  selectedItems: string[];
  checkboxHandler: (v: ChangeEvent<HTMLInputElement>) => void;
  setSelectedItems: (v: string[]) => void;
  setModalCount: (v: boolean) => void;
  setHistory: (v: IHistory[]) => void;
}

const SeminarHistoryItem = ({
  history,
  checkboxHandler,
  selectedItems,
  setModalCount,
  setHistory,
  seminarsHistory,
}: ItemProps) => {
  const showCount = useCallback(() => {
    setModalCount(true);
  }, [setModalCount]);

  const removeSeminar = (seminar: IHistory) => {
    setHistory(seminarsHistory.filter((e) => e.id !== seminar.id));
  };

  return (
    <>
      <div key={history.id} className={"seminarsHistory_section"}>
        <label className={"label_history_item"}>
          <input
            type={"checkbox"}
            onChange={checkboxHandler}
            onClick={showCount}
            checked={selectedItems.includes(history.id)}
            value={history.id}
            className={"seminarsHistoryItem_checkbox"}
          />
          <span className={"fake_history_item"}></span>
        </label>
        <span className={"seminarsHistory_name"}>{history.name}</span>
        <span className={"seminarsHistory_date"}>
          {history.date}
          <FavoriteBorderOutlinedIcon />{" "}
          <img
            className={"seminarsHistory_trash"}
            src={Img.trash}
            alt={""}
            onClick={() => {
              removeSeminar(history);
            }}
          />
        </span>
      </div>
    </>
  );
};

export default SeminarHistoryItem;
