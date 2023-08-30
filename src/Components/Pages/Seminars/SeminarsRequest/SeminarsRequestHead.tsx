import { useCallback, useState } from "react";
import { FormControl, MenuItem, Select, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

import type React from "react";
import "./seminarsRequest.css";
interface RequestHeadProps {
  search: string;
  pages: number;
  setSearch: (value: string) => void;
  setLimit: (value: number) => void;
  setPages: (value: number) => void;
  total: () => number;
}

const SeminarsRequestHead = ({
  search,
  setSearch,
  setLimit,
  setPages,
  pages,
  total,
}: RequestHeadProps) => {
  const [menu, setMenu] = useState("5");

  const pagesPlus = useCallback(() => {
    setPages(pages + 1);
  }, []);
  const pagesMinus = useCallback(() => {
    setPages(pages - 1);
  }, []);
  const limitChange5 = useCallback(() => {
    setLimit(5);
  }, []);
  const limitChange10 = useCallback(() => {
    setLimit(10);
  }, []);
  const limitChange15 = useCallback(() => {
    setLimit(15);
  }, []);

  return (
    <div className={"seminarsRequest_head"}>
      <div>
        <TextField
          size={"small"}
          value={search}
          onChange={useCallback(
            (e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value),
            []
          )}
          fullWidth={false}
          className={"seminarsRequest_search_inp"}
          placeholder={"Поиск по семинарам"}
        />
      </div>
      <div className={"seminarsRequest_head_bottom"}>
        <div className={"seminarsRequest_link"}>
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
        <div className={"seminarsRequest_pages"}>
          Показывать
          <FormControl className={"menu"} size="small">
            <Select
              displayEmpty
              id="demo-select-small"
              value={menu}
              onChange={useCallback((e: any) => setMenu(e.target.value), [])}
            >
              <MenuItem disabled value="5">
                <em></em>
              </MenuItem>
              <MenuItem onClick={limitChange5} value={5}>
                5
              </MenuItem>
              <MenuItem onClick={limitChange10} value={10}>
                10
              </MenuItem>
              <MenuItem onClick={limitChange15} value={15}>
                15
              </MenuItem>
            </Select>
          </FormControl>
          Страница
          <button disabled={true} className={"seminarsRequest_pages_butt"}>
            {pages}
          </button>
          из {total()}
          <button
            onClick={pagesMinus}
            className={"seminarsRequest_pages_arrow1"}
          >
            <KeyboardArrowLeftOutlinedIcon fontSize={"small"} />
          </button>
          <button
            onClick={pagesPlus}
            className={"seminarsRequest_pages_arrow2"}
          >
            <KeyboardArrowRightOutlinedIcon fontSize={"small"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeminarsRequestHead;
