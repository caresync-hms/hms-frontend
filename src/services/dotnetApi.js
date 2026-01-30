import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BLOODBANK_URL } from "../config/api";

export const dotnetApi = createApi({
  reducerPath: "dotnetApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BLOODBANK_URL,
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
