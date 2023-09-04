import React, { type FC, useEffect, useState } from "react";
import axios from "axios";

import PromocodeHead from "./PromocodeHead";
import PromocodeList from "./PromocodeList";

import "./promocode.css";

import { type IPromocode } from "../../../Types/types";

const SERVER = "http://localhost:5005/promocodes";

const Promocode: FC = () => {
  const [promocode, setPromocode] = useState<IPromocode[]>([]);
  const fetching = async () => {
    const response = await axios.get<IPromocode[]>(SERVER);
    setPromocode(response.data);
  };
  useEffect(() => {
    fetching().catch();
  }, []);

  return (
    <div className={"promocode_main"}>
      <PromocodeHead setPromocode={setPromocode} promocode={promocode} />
      <PromocodeList setPromocode={setPromocode} promocode={promocode} />
    </div>
  );
};

export default Promocode;
