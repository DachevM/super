import React, { useCallback, useMemo, useState } from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { TextField } from "@mui/material";

import type { IPromocode } from "../../../Types/types";
interface IPromProps {
  promocode: IPromocode[];
}

const PromocodeAddSearch = ({ promocode }: IPromProps) => {
  const [search, setSearch] = useState("");

  const searchedProd = useMemo(() => {
    return promocode.map((elem) =>
      elem.products.filter((e) =>
        e.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [promocode, search]);

  const ChangeInpSearch = useCallback((e: any) => {
    setSearch(e.target.value);
  }, []);
  return (
    <div className={"promocode_products"}>
      <div>Товары протокола</div>
      <div className={"promocode_products"}>
        {searchedProd.map((elem) =>
          elem.map((e) => (
            <div key={e.id} className={"promocode_products_section"}>
              <div className={"promocode_product_name"}>{e.name}</div>
              <div className={"promocode_product_brand"}>{e.brand.name}</div>
              <div>
                <DeleteOutlineOutlinedIcon cursor={"pointer"} />
              </div>
            </div>
          ))
        )}
      </div>
      <div className={"promocode_add_search"}>
        <TextField
          size={"small"}
          value={search}
          onChange={ChangeInpSearch}
          fullWidth={true}
          className={"promocode_search_inp"}
          placeholder={"Поиск по товарам"}
        />
      </div>
    </div>
  );
};

export default PromocodeAddSearch;
