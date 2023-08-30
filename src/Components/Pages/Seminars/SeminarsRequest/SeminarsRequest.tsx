import React, { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";

import SeminarsRequestList from "./SeminarsRequestList";
import SeminarsRequestHead from "./SeminarsRequestHead";

import "./seminarsRequest.css";

import type { IRequest } from "../../../../types/types";

const SERVER = "http://localhost:5005/request";

const SeminarsRequest = () => {
  const [search, setSearch] = useState<string>("");
  const [request, setRequest] = useState<IRequest[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [pages, setPages] = useState<number>(1);

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
  }, []);

  useEffect(() => {
    fetching().catch();
  }, [limit, pages]);

  return (
    <div className={"seminarsRequest_main"}>
      <SeminarsRequestHead
        total={totalCount}
        pages={pages}
        setPages={setPages}
        setLimit={setLimit}
        search={search}
        setSearch={setSearch}
      />
      <SeminarsRequestList searchedSeminarsRequest={searchedSeminarsRequest} />
    </div>
  );
};

export default SeminarsRequest;
