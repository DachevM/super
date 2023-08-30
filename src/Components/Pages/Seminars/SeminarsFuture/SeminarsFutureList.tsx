import React, { type ChangeEvent, useCallback, useState } from "react";
import { Link } from "react-router-dom";

import SeminarsFutureAdd from "./SeminarsFutureAdd";
import SeminarsFutureItem from "./SeminarsFutureItem";

import Modal from "../../../UI/PopUP/Modal";
import CountModal from "../../../UI/PopUP/CountModal";
import "./seminarsFuture.css";
import { type IFuture } from "../../../../types/types";

interface FutureBody {
  searchedSeminarsFuture: IFuture[];
  future: IFuture[];
  setFuture: (v: IFuture[]) => void;
}
const SeminarsFutureList = ({
  searchedSeminarsFuture,
  future,
  setFuture,
}: FutureBody) => {
  const [show, setShow] = useState<boolean>(false);
  const [checkAll, setCheckAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [showModalCount, setModalCount] = useState(false);

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
    if (future.length === selectedItems.length) {
      setSelectedItems([]);
    } else {
      const seminarsIds = future.map((item) => {
        return item.id;
      });
      setSelectedItems(seminarsIds);
    }
  }, [future, selectedItems.length]);

  const showCount = useCallback(() => {
    setCheckAll(!checkAll);
    setModalCount(true);
  }, [checkAll]);

  return (
    <div className={"seminarsFutureBody"}>
      <div className={"seminarsFuture_link"}>
        <Link className={"link"} to={"/seminars/future"}>
          Будущие
        </Link>
        <Link className={"link"} to={"/seminars/history"}>
          История
        </Link>
        <Link className={"link"} to={"/seminars/request"}>
          Заявки на семинары
        </Link>
      </div>
      <div className={"seminarsFuture_butt"}>
        <button
          className={"seminarsFuture_head_butt"}
          onClick={useCallback(() => {
            setShow(true);
          }, [])}
        >
          Добавить семинар
        </button>
        <Modal show={show} setShow={setShow}>
          <SeminarsFutureAdd
            setShow={setShow}
            setFuture={setFuture}
            future={future}
          />
        </Modal>
      </div>
      <div className={"seminarsFuture_descr"}>
        <label className={"label"}>
          <input
            type={"checkbox"}
            checked={checkAll}
            onClick={showCount}
            onChange={checkAllHandler}
            className={"seminarsFuture_checkbox"}
          />
          <span className={"seminarsFuture_fake"}></span>
        </label>
        <p className={"seminarsFuture_name"}>Название</p>
        <p className={"seminarsFuture_speaker"}>Спикер</p>
        <p className={"seminarsFuture_date"}>Дата</p>
      </div>

      <div className={"seminarsFuture_seminars"}>
        {searchedSeminarsFuture.length !== 0 ? (
          <>
            {searchedSeminarsFuture.map((elem) => (
              <>
                <SeminarsFutureItem
                  key={elem.id}
                  seminars={future}
                  future={elem}
                  selectedItems={selectedItems}
                  checkboxHandler={checkboxHandler}
                  setSelectedItems={setSelectedItems}
                  setModalCount={setModalCount}
                  setFuture={setFuture}
                />
                {showModalCount && (
                  <CountModal
                    setCheckAll={setCheckAll}
                    setSelectedItems={setSelectedItems}
                    show={showModalCount}
                    setShow={setModalCount}
                    number={selectedItems.length}
                  />
                )}
              </>
            ))}
          </>
        ) : (
          <p>Здесь пока нет семинаров</p>
        )}
      </div>
    </div>
  );
};

export default SeminarsFutureList;
