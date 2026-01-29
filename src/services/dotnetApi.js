import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dotnetApi = createApi({
  reducerPath: "dotnetApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:7164/",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Blood"],
  endpoints: () => ({}),
});
