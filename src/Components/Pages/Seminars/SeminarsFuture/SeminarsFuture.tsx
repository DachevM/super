import React, { type FC, useEffect, useMemo, useState } from "react";
import axios from "axios";

import SeminarsFutureList from "./SeminarsFutureList";

import "./seminarsFuture.css";

import { type IFuture } from "../../../../types/types";
import Pagination from "../../../Elements/Pagination/Pagination";
import Search from "../../../Elements/Search/Search";
// import Search from "../../../Elements/Search/Search";
// import Pagination from "../../../Elements/Pagination/Pagination";
const SERVER = "http://localhost:5005/future";

const SeminarsFuture: FC = () => {
  const [search] = useState<string>("");
  const [future, setFuture] = useState<IFuture[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [limit] = useState<number>(5);
  const [pages] = useState<number>(1);

  const searchedSeminarsFuture = useMemo(() => {
    return future.filter((e) =>
      e.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, future]);

  const fetching = async () => {
    const response = await axios.get<IFuture[]>(SERVER, {
      params: {
        _limit: limit,
        _page: pages,
      },
    });
    setFuture(response.data);
    setTotalPages(response.headers["x-total-count"]);
  };
  const totalCount = () => {
    return Math.ceil(totalPages / limit);
  };

  useEffect(() => {
    fetching().catch();
  }, [limit, pages]);

  return (
    <div className={"seminarsFuture_main"}>
      <div className={"seminarsFuture_head"}>
        <Search search={search} />
        <Pagination pages={pages} total={totalCount} />
      </div>
      <SeminarsFutureList
        setFuture={setFuture}
        future={future}
        searchedSeminarsFuture={searchedSeminarsFuture}
      />
    </div>
  );
};

export default SeminarsFuture;
