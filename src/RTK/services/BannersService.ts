import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bannersAPI = createApi({
  reducerPath: "bannersAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5005" }),
  endpoints: (build) => ({
    fetchBanners: build.query({
      query: () => ({
        url: "/banners",
      }),
    }),
  }),
});
