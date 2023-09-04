import { useCallback, useMemo, useState } from "react";
import { TextField } from "@mui/material";

import type React from "react";
import type { IProtocol } from "../../../Types/types";

import { Img } from "../../../Images/Img";

interface ISearchProp {
  filtered: IProtocol[];
}
const ProtocolsAddSearch = ({ filtered }: ISearchProp) => {
  const [search, setSearch] = useState<string>("");

  const ChangeInpSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    },
    []
  );

  const searchedProd = useMemo(() => {
    return filtered.map((elem) =>
      elem.products.filter((e) =>
        e.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [filtered, search]);

  return (
    <>
      <div className={"protocol_product_text"}>Товары протокола</div>
      <div className={"protocol_products"}>
        {searchedProd.map((elem) =>
          elem.map((e) => (
            <div key={e.id} className={"protocol_products_section"}>
              <div className={"protocol_product_name"}>{e.name}</div>
              <div className={"protocol_product_brand"}>{e.brand.name}</div>
              <div>
                <img className={"protocols_trash"} src={Img.trash} alt={""} />
              </div>
            </div>
          ))
        )}
      </div>
      <div className={"protocol_add_search"}>
        <TextField
          size={"small"}
          value={search}
          onChange={ChangeInpSearch}
          fullWidth={true}
          className={"products_search_inp"}
          placeholder={"Поиск по товарам"}
        />
      </div>
    </>
  );
};

export default ProtocolsAddSearch;
