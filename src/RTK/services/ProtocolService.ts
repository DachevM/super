import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const protocolAPI = createApi({
  reducerPath: "protocolAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5005" }),
  tagTypes: ["Protocol"],
  endpoints: (build) => ({
    fetchProtocols: build.query({
      query: () => ({
        url: "/protocols",
      }),
      providesTags: () => ["Protocol"],
    }),
    protocolAdd: build.mutation({
      query: (protocols) => ({
        url: "/protocols",
        method: "POST",
        body: protocols,
      }),
      invalidatesTags: ["Protocol"],
    }),
    deleteProtocol: build.mutation({
      query: (protocols) => ({
        url: `/protocols/${protocols.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Protocol"],
    }),
  }),
});

const protocolCategoryAPI = createApi({
  reducerPath: "protocolCategoryAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5005" }),
  tagTypes: ["protocolCategories"],
  endpoints: (build) => ({
    fetchProtocolCategories: build.query({
      query: () => ({
        url: "/protocolcategories",
      }),
      providesTags: () => ["protocolCategories"],
    }),
    protocolCategoriesAdd: build.mutation({
      query: (protocolCategories) => ({
        url: "/protocolcategories",
        method: "POST",
        body: protocolCategories,
      }),
      invalidatesTags: ["protocolCategories"],
    }),
    deleteProtocolCategories: build.mutation({
      query: (protocolCategories) => ({
        url: `/protocolcategories/${protocolCategories.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["protocolCategories"],
    }),
  }),
});
export { protocolAPI, protocolCategoryAPI };
