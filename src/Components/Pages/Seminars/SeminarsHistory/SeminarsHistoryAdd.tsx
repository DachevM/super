import { useCallback, useState } from "react";
import { Button, TextField } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

import type React from "react";

import { theme } from "../../../../Customization/Customization";
import { type IHistory } from "../../../../types/types";
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
  }, []);
  return (
    <div className={"seminars_add"}>
      <div className={"seminars_add_head"}>
        <ThemeProvider theme={theme}>
          <Button
            onClick={useCallback(() => {
              setShow(false);
            }, [])}
            fullWidth={true}
            size={"medium"}
            variant={"outlined"}
          >
            {" "}
            Удалить{" "}
          </Button>
        </ThemeProvider>
        <ThemeProvider theme={theme}>
          <Button
            onClick={newSeminarHistoryAdd}
            fullWidth={true}
            size={"medium"}
            variant={"contained"}
          >
            {" "}
            Сохранить{" "}
          </Button>
        </ThemeProvider>
      </div>
      <div className={"seminars_add_body"}>
        <div className={"edit_descr"}>
          <label form={"outlined-basic"}>Название*</label>
          <TextField
            value={name}
            onChange={useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
              setName(e.target.value);
            }, [])}
            fullWidth={true}
            size={"small"}
            id="outlined-basic"
            placeholder={"Название семинара"}
            variant="outlined"
          />
          <label form={"outlined-basic"}>Описание</label>
          <TextField
            fullWidth={true}
            size={"medium"}
            id="outlined-basic"
            placeholder={"Опишите семинар"}
            variant="outlined"
          />

          <label form={"outlined-basic"}> Дата</label>
          <TextField
            value={date}
            onChange={useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
              setDate(e.target.value);
            }, [])}
            fullWidth={true}
            size={"small"}
            id="outlined-basic"
            placeholder={"Выберите дату"}
            variant="outlined"
          />
          <label form={"outlined-basic"}>Фото</label>
          <TextField
            fullWidth={true}
            size={"small"}
            id="outlined-basic"
            placeholder={"Вставьте ссылку на Google Drive"}
            variant="outlined"
          />
        </div>
      </div>
    </div>
  );
};

export default SeminarsHistoryAdd;
