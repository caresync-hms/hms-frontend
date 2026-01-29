import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../config/api";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [
    "User",
    "Patient",
    "Doctor",
    "Appointment",
    "Notice",
    "Department",
    "Prescription",
    "Invoice",
    "Payment",
    "Dashboard",
  ],
  endpoints: () => ({}),
});
