import React from "react";

import "./seminarsRequest.css";

import type { IRequest } from "../../../../types/types";
interface RequestBodyProps {
  searchedSeminarsRequest: IRequest[];
}
const SeminarsRequestList = ({ searchedSeminarsRequest }: RequestBodyProps) => {
  return (
    <div className={"seminarsRequestBody"}>
      <div className={"seminarsRequest_descr"}>
        <p className={"seminarsRequest_name"}>Название семинара</p>
        <p className={"seminarsRequest_user"}>Пользователь</p>
        <p className={"seminarsRequest_phone"}>Номер телефона</p>
        <p className={"seminarsRequest_date"}>Дата</p>
      </div>
      <div className={"seminarsRequest_seminars"}>
        {searchedSeminarsRequest.map((elem) => (
          <div key={elem.seminar.id} className={"seminarsRequest_section"}>
            <div className={"seminarsRequest_name"}>{elem.seminar.name}</div>
            <div className={"seminarsRequest_user"}>{elem.user.name}</div>
            <div className={"seminarsRequest_phone"}>{elem.user.phone}</div>
            <div className={"seminarsRequest_date"}>{elem.date} </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeminarsRequestList;
