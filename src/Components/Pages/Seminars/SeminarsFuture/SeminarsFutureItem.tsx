import React, { type ChangeEvent, useCallback } from "react";

import type { IFuture } from "../../../../Types/types";

import { Img } from "../../../../Images/Img";

import "./seminarsFuture.css";

interface ItemProps {
  future: IFuture;
  seminars: IFuture[];
  selectedItems: string[];
  checkboxHandler: (v: ChangeEvent<HTMLInputElement>) => void;
  setSelectedItems: (v: string[]) => void;
  setModalCount: (v: boolean) => void;
  setFuture: (v: IFuture[]) => void;
}

const SeminarsFutureItem = ({
  future,
  checkboxHandler,
  selectedItems,
  setModalCount,
  setFuture,
  seminars,
}: ItemProps) => {
  const showCount = useCallback(() => {
    setModalCount(true);
  }, [setModalCount]);

  const removeSeminar = (seminar: IFuture) => {
    setFuture(seminars.filter((e) => e.id !== seminar.id));
  };

  return (
    <div key={future.id} className={"seminarsFuture_section"}>
      <label className={"label_item"}>
        <input
          type={"checkbox"}
          onChange={checkboxHandler}
          onClick={showCount}
          checked={selectedItems.includes(future.id)}
          value={future.id}
          className={"seminarsFutureItem_checkbox"}
        />
        <span className={"fake_item"}></span>
      </label>
      <span className={"seminarsFuture_name"}>{future.name}</span>
      <span className={"seminarsFuture_speaker"}>{future.speaker}</span>
      <span className={"seminarsFuture_date"}>
        {future.datetime}
        <img
          className={"seminarsFuture_trash"}
          src={Img.trash}
          alt={""}
          onClick={() => {
            removeSeminar(future);
          }}
        />
      </span>
    </div>
  );
};

export default SeminarsFutureItem;
