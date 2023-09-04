import { useCallback, useMemo, useState } from "react";
import { TextField } from "@mui/material";

import type React from "react";
import type { IBanners } from "../../../Types/types";

import { Img } from "../../../Images/Img";

interface IBannerAddSearch {
  banners: IBanners[];
}

const BannerAddSearch = ({ banners }: IBannerAddSearch) => {
  const [search, setSearch] = useState<string>("");

  const ChangeInpSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    },
    []
  );

  const searchedProd = useMemo(() => {
    return banners.map((elem) =>
      elem.products.filter((e) =>
        e.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [banners, search]);

  return (
    <div>
      {searchedProd.map((elem) =>
        elem.map((e) => (
          <div key={e.id} className={"banner_products_section"}>
            <div className={"banner_product_name"}>{e.name}</div>
            <div>{e.brand.name}</div>
            <div>
              <img className={"banners_add_trash"} src={Img.trash} alt={""} />
            </div>
          </div>
        ))
      )}
      <div className={"banners_add_search"}>
        <TextField
          size={"small"}
          value={search}
          onChange={ChangeInpSearch}
          fullWidth={true}
          className={"products_search_inp"}
          placeholder={"Поиск по товарам"}
        />
      </div>
    </div>
  );
};

export default BannerAddSearch;
