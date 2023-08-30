import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { orderSlice } from "../reducers/orderReduce";

const SERVER = "http://localhost:5005/orders";
// export const fetchOrders=(page:number,limit:number):any=>async (dispatch:ToolkitDispatch)=>{
//     try {
//
//         dispatch(orderSlice.actions.orderFetch(response.data))
//         dispatch(orderSlice.actions.setTotal(response.headers["x-total-count"]))
//     }catch (e) {
//         console.log(e)
//     }
// }

const fetchOrders = createAsyncThunk(
  "order/fetch",
  async (param: { page: number; limit: number }) => {
    return await new Promise((resolve) => {
      setTimeout(async () => {
        const response = await axios.get(SERVER, {
          params: { _limit: param.limit, _page: param.page },
        });
        resolve(response.data);
      }, 1000); // Задержка в 2 секунды
    });
  }
);

const fetchTotal = createAsyncThunk(
  "total/fetch",
  async (param: { page: number; limit: number }) => {
    const response = await axios.get(SERVER, {
      params: {
        _limit: param.limit,
        _page: param.page,
      },
    });
    return response.headers["x-total-count"];
  }
);

const setPage = (page: number) => {
  return orderSlice.actions.setPage(page);
};

const setLim = (limit: number) => {
  return orderSlice.actions.setLim(limit);
};

const orderFilter = (search: string) => {
  return orderSlice.actions.ordersFilt(search);
};
export { fetchOrders, fetchTotal, setPage, setLim, orderFilter };
