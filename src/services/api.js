import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9093/",
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
