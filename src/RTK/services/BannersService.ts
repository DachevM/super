import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bannersAPI = createApi({
  reducerPath: "bannersAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5005" }),
  tagTypes: ["Banner"],
  endpoints: (build) => ({
    fetchBanners: build.query({
      query: () => ({
        url: "/banners",
      }),
      providesTags: () => ["Banner"],
    }),
    bannersAdd: build.mutation({
      query: (banner) => ({
        url: "/banners",
        method: "POST",
        body: banner,
      }),
      invalidatesTags: ["Banner"],
    }),
    deleteBanner: build.mutation({
      query: (banner) => ({
        url: `/banners/${banner.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Banner"],
    }),
  }),
});
