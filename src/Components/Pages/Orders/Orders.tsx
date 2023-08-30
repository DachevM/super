import React, { useCallback, useEffect } from "react";

import OrdersList from "./OrdersList";

import Search from "../../Elements/Search/Search";
import Pagination from "../../Elements/Pagination/Pagination";
import { useToolkitDispatch, useToolkitSelector } from "../../../RTK/hooksRTK";
import {
  fetchOrders,
  fetchTotal,
  orderFilter,
} from "../../../RTK/actions/orderAction";

import "./orders.css";

const Orders = () => {
  const { order, lim, page, total, orderFiltered } = useToolkitSelector(
    (state) => state.orders
  );
  const { search } = useToolkitSelector((state) => state.search);
  const dispatch = useToolkitDispatch();
  const params = {
    limit: lim,
    page,
  };

  useEffect(() => {
    void dispatch(fetchOrders(params));
    void dispatch(fetchTotal(params));
  }, [lim, page]);

  const totalCount = useCallback(() => {
    return Math.ceil(total / lim);
  }, [lim, total]);

  useEffect(() => {
    dispatch(orderFilter(search));
  }, [search, lim, order]);

  // const searchedOrders = useMemo(() => {
  //     return order.filter(e => e.user.name.toLowerCase().includes(search.toLowerCase()))
  // }, [search, order])

  return (
    <div className={"orders_main"}>
      <div className={"orders_head"}>
        <Search search={search} />
        <Pagination pages={page} total={totalCount} />
      </div>
      <OrdersList searched={orderFiltered} />
    </div>
  );
};
export default Orders;
