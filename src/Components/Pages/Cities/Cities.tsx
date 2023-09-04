import React, { type FC, useEffect, useState } from "react";
import axios from "axios";

import CitiesHead from "./CitiesHead";
import CitiesList from "./CitiesList";

import "./cities.css";

import { type ICities } from "../../../Types/types";
const SERVER = "http://localhost:5005/cities";
const Cities: FC = () => {
  const [cities, setCities] = useState<ICities[]>([]);
  const fetching = async () => {
    const response = await axios.get<ICities[]>(SERVER);
    setCities(response.data);
  };
  useEffect(() => {
    fetching().catch();
  }, []);

  return (
    <div className={"cities_main"}>
      <CitiesHead setCities={setCities} cities={cities} />
      <CitiesList setCities={setCities} cities={cities} />
    </div>
  );
};

export default Cities;
