import React, { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";

import SeminarsRequestList from "./SeminarsRequestList";

import type { IRequest } from "../../../../Types/types";

import Search from "../../../Elements/Search/Search";
import Pagination from "../../../Elements/Pagination/Pagination";

import "./seminarsRequest.css";

const SERVER = "http://localhost:5005/request";

const SeminarsRequest = () => {
  const [search] = useState<string>("");
  const [request, setRequest] = useState<IRequest[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [limit] = useState<number>(5);
  const [pages] = useState<number>(1);

  const searchedSeminarsRequest = useMemo(() => {
    return request.filter((e) =>
      e.seminar.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, request]);
  const fetching = async () => {
    const response = await axios.get<IRequest[]>(SERVER, {
      params: {
        _limit: limit,
        _page: pages,
      },
    });
    setRequest(response.data);
    setTotalPages(response.headers["x-total-count"]);
  };
  const totalCount = useCallback(() => {
    return Math.ceil(totalPages / limit);
  }, [limit, totalPages]);

  useEffect(() => {
    fetching().catch();
  }, [limit, pages]);

  return (
    <div className={"seminarsRequest_main"}>
      <div className={"seminarsRequest_head"}>
        <Search search={search} />
        <Pagination pages={pages} total={totalCount} />
      </div>
      <SeminarsRequestList searchedSeminarsRequest={searchedSeminarsRequest} />
    </div>
  );
};

export default SeminarsRequest;
