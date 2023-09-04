import { useEffect, useState } from "react";

import { UserService } from "./UserService";

import type React from "react";

import { type IClients } from "../Types/types";
const MainPage = () => {
  const [users, setUsers] = useState<any>([]);

  const loadUsers = async (searchText = "") => {
    const data = await UserService.getUsers(searchText);
    setUsers(data);
  };

  useEffect(() => {
    loadUsers().catch();
  }, []);

  const handleChangeSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    loadUsers(value).catch();
  };

  return (
    <div>
      <input placeholder="Search text" onChange={handleChangeSearchText} />
      <b>Users length</b> {users.map((e: IClients) => e.name)}
    </div>
  );
};

export default MainPage;
