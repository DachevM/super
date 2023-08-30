import { configureStore } from "@reduxjs/toolkit";

import orderReducer from "./reducers/orderReduce";
import searchReducer from "./reducers/searchReducerRtk";
import { bannersAPI } from "./services/BannersService";
import { protocolAPI, protocolCategoryAPI } from "./services/ProtocolService";

const state = configureStore({
  reducer: {
    orders: orderReducer,
    search: searchReducer,
    [bannersAPI.reducerPath]: bannersAPI.reducer,
    [protocolAPI.reducerPath]: protocolAPI.reducer,
    [protocolCategoryAPI.reducerPath]: protocolCategoryAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      bannersAPI.middleware,
      protocolAPI.middleware,
      protocolCategoryAPI.middleware
    ),
});

type RootState = ReturnType<typeof state.getState>;

type ToolkitDispatch = typeof state.dispatch;
export { type RootState, type ToolkitDispatch, state };
