import React, { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";

import ProductsList from "./ProductsList";

import Search from "../../Elements/Search/Search";
import Pagination from "../../Elements/Pagination/Pagination";
import { useAppDispatch, useAppSelector } from "../../../Redux/hooks";
import {
  fetchProducts,
  filter,
} from "../../../Redux/action-creators/productsAction";
import Selectors from "../../../Redux/selectors";

import "./products.css";

const SERVER_URL = "http://localhost:5005/products2";

const Products = () => {
  const { products, pages, limit, totalPages } = useSelector(
    Selectors.product.product
  );
  const productsFiltered = useAppSelector(
    (state) => state.product.productsFiltered
  );
  const search = useAppSelector<string>(Selectors.search.searchText);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts(SERVER_URL, pages, limit));
  }, [dispatch, limit, pages]);

  const totalCount = useCallback(() => {
    return Math.ceil(totalPages / limit);
  }, [limit, totalPages]);

  useEffect(() => {
    dispatch(filter(search));
  }, [search, limit, products, dispatch]);

  // const searchedProd = [] as IProducts[]
  //     useMemo(() => {
  //     return products.filter((el: IProducts) => el.name.toLowerCase().includes(search.toLowerCase()))
  // }, [search, products])

  return (
    <main className={"products_main"}>
      <div className={"products_head"}>
        <Search search={search} />
        <Pagination pages={pages} total={totalCount} />
      </div>
      <ProductsList searched={productsFiltered} /> {/* local state */}
    </main>
  );
};
export default Products;
