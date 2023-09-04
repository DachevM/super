import React, { type ChangeEvent, useCallback, useState } from "react";
import { Link } from "react-router-dom";

import SeminarsHistoryAdd from "./SeminarsHistoryAdd";
import SeminarHistoryItem from "./SeminarHistoryItem";

import Modal from "../../../UI/PopUP/Modal";
import CountModal from "../../../UI/PopUP/CountModal";
import "./seminarsHistory.css";
import { type IHistory } from "../../../../Types/types";

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
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [show, setShow] = useState<boolean>(false);
  const [checkAll, setCheckAll] = useState(false);
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
    if (history.length === selectedItems.length) {
      setSelectedItems([]);
    } else {
      const seminarsIds = history.map((item) => {
        return item.id;
      });
      setSelectedItems(seminarsIds);
    }
  }, [history, selectedItems.length]);

  const showCount = useCallback(() => {
    setCheckAll(!checkAll);
    setModalCount(true);
  }, [checkAll]);

  const showModal = useCallback(() => {
    setShow(true);
  }, []);

  return (
    <div className={"seminarsHistoryBody"}>
      <div className={"seminarsHistory_link"}>
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
      <div className={"seminarsHistory_butt"}>
        <button className={"seminarsHistory_head_butt"} onClick={showModal}>
          Добавить семинар
        </button>
        <Modal show={show} setShow={setShow}>
          <SeminarsHistoryAdd
            setShow={setShow}
            setHistory={setHistory}
            history={history}
          />
        </Modal>
      </div>
      <div className={"seminarsHistory_descr"}>
        <label className={"label_history"}>
          <input
            type={"checkbox"}
            checked={checkAll}
            onClick={showCount}
            onChange={checkAllHandler}
            className={"seminarsHistory_checkbox"}
          />
          <span className={"seminarsHistory_fake"}></span>
        </label>
        <p className={"seminarsHistory_name"}>Название</p>
        <p className={"seminarsHistory_date"}>Дата</p>
      </div>
      <div className={"seminarsHistory_seminars"}>
        {searchedSeminarsHistory.length !== 0 ? (
          <>
            {searchedSeminarsHistory.map((elem) => (
              <>
                <SeminarHistoryItem
                  history={elem}
                  seminarsHistory={history}
                  selectedItems={selectedItems}
                  checkboxHandler={checkboxHandler}
                  setSelectedItems={setSelectedItems}
                  setModalCount={setModalCount}
                  setHistory={setHistory}
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

export default SeminarsHistoryList;
