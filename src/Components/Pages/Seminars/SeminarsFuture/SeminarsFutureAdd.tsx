import { useCallback, useState } from "react";
import { FormControl, MenuItem, Select } from "@mui/material";

import type React from "react";
import type { IFuture } from "../../../../Types/types";

interface FutureAdd {
  future: IFuture[];
  setFuture: (value: IFuture[]) => void;
  setShow: (value: boolean) => void;
}

const SeminarsFutureAdd = ({ future, setFuture, setShow }: FutureAdd) => {
  const [categ, setCateg] = useState("");
  const [name, setName] = useState("");
  const [speaker, setSpeaker] = useState("");
  const [description, setDescription] = useState("");
  const [speaker_speciality, setSpeaker_speciality] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const newSeminarFutureAdd = useCallback(() => {
    const newSeminarFuture = {
      name: name,
      speaker: speaker,
      description: description,
      speaker_speciality: speaker_speciality,
      datetime: date + " " + time,
      id: String(Date.now()),
      image: "",
      mobileImage: "",
    };
    setFuture([...future, newSeminarFuture]);
    setSpeaker("");
    setDate("");
    setTime("");
    setName("");
    setDescription("");
    setSpeaker_speciality("");
    setShow(false);
  }, [
    date,
    description,
    future,
    name,
    setFuture,
    setShow,
    speaker,
    speaker_speciality,
    time,
  ]);
  const closeModal = useCallback(() => {
    setShow(false);
  }, [setShow]);

  const ChangeInpSpeaker = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setSpeaker(e.target.value),
    []
  );
  const ChangeInpDate = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setDate(e.target.value),
    []
  );
  const ChangeInpTime = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setTime(e.target.value),
    []
  );
  const ChangeInpName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value),
    []
  );
  const ChangeInpDescription = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value),
    []
  );
  const ChangeInpSpeaker_speciality = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setSpeaker_speciality(e.target.value),
    []
  );

  const ChangeCategory = useCallback((e: any) => setCateg(e.target.value), []);

  return (
    <div className={"seminars_add"}>
      <div className={"seminars_add_head"}>
        <button onClick={closeModal} className={"future_butt_close"}>
          Удалить
        </button>
        <button onClick={newSeminarFutureAdd} className={"future_butt_save"}>
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
            className={"future_descr_inp"}
          />
          <label form={"outlined-basic"}>Описание*</label>
          <input
            type={"text"}
            value={description}
            onChange={ChangeInpDescription}
            placeholder={"Опишите семинар"}
            className={"future_descr_inp"}
          />
          <label form={"outlined-basic"}>Спикер*</label>
          <input
            type={"text"}
            value={speaker}
            onChange={ChangeInpSpeaker}
            placeholder={"Напишите имя спикера"}
            className={"future_descr_inp"}
          />
          <label form={"outlined-basic"}>Специальность спикера*</label>
          <input
            type={"text"}
            value={speaker_speciality}
            onChange={ChangeInpSpeaker_speciality}
            placeholder={"Напишите специальность спикера"}
            className={"future_descr_inp"}
          />
          <label form={"demo-select-smal"}>Город*</label>
          <FormControl fullWidth={true} size="small">
            <Select
              displayEmpty
              id="demo-select-small"
              value={categ}
              onChange={ChangeCategory}
            >
              <MenuItem disabled value="">
                <em>Выберите город</em>
              </MenuItem>
              <MenuItem>Волгоград</MenuItem>
              <MenuItem>Сочи</MenuItem>
              <MenuItem>Краснодар</MenuItem>
              <MenuItem>Архангельск</MenuItem>
            </Select>
          </FormControl>
          <div className={"seminar_time"}>
            <input
              type={"date"}
              value={time}
              onChange={ChangeInpTime}
              placeholder={"Выберите время"}
              className={"future_descr_inp"}
            />
            <input
              type={"time"}
              value={date}
              onChange={ChangeInpDate}
              placeholder={"Выберите дату"}
              className={"future_descr_inp"}
            />
          </div>
          <div>
            <input
              type={"text"}
              placeholder={"Вставьте ссылку на Google Drive"}
              className={"future_descr_inp"}
            />
          </div>
          <p>Размер фото 750х730 px PNG, JPG, JPEG</p>
        </div>
      </div>
    </div>
  );
};

export default SeminarsFutureAdd;
