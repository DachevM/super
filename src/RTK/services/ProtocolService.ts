import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const protocolAPI = createApi({
  reducerPath: "protocolAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5005" }),
  endpoints: (build) => ({
    fetchProtocols: build.query({
      query: () => ({
        url: "/protocols",
      }),
    }),
  }),
});

const protocolCategoryAPI = createApi({
  reducerPath: "protocolCategoryAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5005" }),
  endpoints: (build) => ({
    fetchProtocolCategories: build.query({
      query: () => ({
        url: "/protocolcategories",
      }),
    }),
  }),
});
export { protocolAPI, protocolCategoryAPI };
