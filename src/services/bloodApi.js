import { dotnetApi } from "./dotnetApi";

export const bloodApi = dotnetApi.injectEndpoints({
  endpoints: (builder) => ({

    addDonor: builder.mutation({
      query: (donor) => ({
        url: "api/Blood",
        method: "POST",
        body: donor,
      }),
      invalidatesTags: ["Donor"],
    }),

   
    getAllDonors: builder.query({
      query: () => "api/Blood",
      providesTags: ["Donor"],
    }),


    getBloodGroupCount: builder.query({
      query: () => "api/Blood/Count",
      providesTags: ["Donor"],
    }),
  }),
});

export const {
  useAddDonorMutation,
  useGetAllDonorsQuery,
  useGetBloodGroupCountQuery,
} = bloodApi;
