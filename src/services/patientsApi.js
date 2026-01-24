import { api } from "./api";

export const patientsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPatients: builder.query({
      query: () => "/patients",
      providesTags: ["Patient"],
    }),

    addPatient: builder.mutation({
      query: (patient) => ({
        url: "/patients",
        method: "POST",
        body: patient,
      }),
      invalidatesTags: ["Patient"],
    }),

    deletePatient: builder.mutation({
      query: (id) => ({
        url: `/patients/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Patient"],
    }),
  }),
});

export const {
  useGetPatientsQuery,
  useAddPatientMutation,
  useDeletePatientMutation,
} = patientsApi;
