import React, {
  type FC,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import axios from "axios";

import SeminarsHistoryList from "./SeminarsHistoryList";

import "./seminarsHistory.css";

import { type IHistory } from "../../../../Types/types";
import Search from "../../../Elements/Search/Search";
import Pagination from "../../../Elements/Pagination/Pagination";

const SERVER = "http://localhost:5005/history";

const SeminarsHistory: FC = () => {
  const [search] = useState<string>("");
  const [history, setHistory] = useState<IHistory[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [limit] = useState<number>(5);
  const [pages] = useState<number>(1);

  const searchedSeminarsHistory = useMemo(() => {
    return history.filter((e) =>
      e.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, history]);
  const fetching = async () => {
    const response = await axios.get<IHistory[]>(SERVER, {
      params: {
        _limit: limit,
        _page: pages,
      },
    });
    setHistory(response.data);
    setTotalPages(response.headers["x-total-count"]);
  };
  const totalCount = useCallback(() => {
    return Math.ceil(totalPages / limit);
  }, [limit, totalPages]);

  useEffect(() => {
    fetching().catch();
  }, [fetching, limit, pages]);

  return (
    <div className={"seminarsHistory_main"}>
      <div className={"seminarsHistory_head"}>
        <Search search={search} />
        <Pagination pages={pages} total={totalCount} />
      </div>
      <SeminarsHistoryList
        setHistory={setHistory}
        history={history}
        searchedSeminarsHistory={searchedSeminarsHistory}
      />
    </div>
  );
};

export default SeminarsHistory;
