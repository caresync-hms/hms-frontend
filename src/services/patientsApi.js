import { api } from "./api";

export const patientsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllPatients: builder.query({
      query: () => "/patient",
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
  useGetAllPatientsQuery,
  useAddPatientMutation,
  useDeletePatientMutation,
} = patientsApi;
