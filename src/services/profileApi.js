import { api } from "./api";

export const profileApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: ({ userId, role }) => ({
        url: "/profile",
        params: { userId, role }, // ✅ correct for GET
      }),
    }),
  }),
});

export const { useGetProfileQuery } = profileApi;
