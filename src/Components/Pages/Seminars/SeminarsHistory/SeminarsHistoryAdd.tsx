import { useCallback, useState } from "react";

import type React from "react";

import { type IHistory } from "../../../../Types/types";
interface HistoryAddProps {
  history: IHistory[];
  setShow: (value: boolean) => void;
  setHistory: (v: IHistory[]) => void;
}

const SeminarsHistoryAdd = ({
  history,
  setHistory,
  setShow,
}: HistoryAddProps) => {
  const [name, setName] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const newSeminarHistoryAdd = useCallback(() => {
    const newSeminarHistory = {
      description: "",
      image: "",
      mobileImage: "",
      name,
      date,
      id: String(Date.now()),
    };
    setHistory([...history, newSeminarHistory]);
    setName("");
    setDate("");
    setShow(false);
  }, [date, history, name, setHistory, setShow]);

  const CloseModal = useCallback(() => {
    setShow(false);
  }, [setShow]);

  const ChangeInpName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    },
    []
  );

  const ChangeDate = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  }, []);

  return (
    <div className={"seminars_add"}>
      <div className={"seminars_add_head"}>
        <button onClick={CloseModal} className={"history_butt_close"}>
          Удалить
        </button>
        <button onClick={newSeminarHistoryAdd} className={"history_butt_save"}>
          Сохранить
        </button>
      </div>
      <div className={"seminars_add_body"}>
        <div className={"edit_descr"}>
          <label form={"outlined-basic"}>Название*</label>
          <input
            type={"text"}
            value={name}
            onChange={ChangeInpName}
            placeholder={"Напишите название"}
            className={"history_descr_inp"}
          />
          <label form={"outlined-basic"}>Описание</label>
          <input
            type={"text"}
            placeholder={"Опишите семинар"}
            className={"history_descr_inp"}
          />
          <label form={"outlined-basic"}> Дата</label>
          <input
            type={"datetime-local"}
            value={date}
            onChange={ChangeDate}
            placeholder={"Выберите дату"}
            className={"history_descr_inp"}
          />
          <label form={"outlined-basic"}>Фото</label>
          <input
            type={"text"}
            placeholder={"Вставьте ссылку на Google Drive"}
            className={"history_descr_inp"}
          />
        </div>
      </div>
    </div>
  );
};

export default SeminarsHistoryAdd;
