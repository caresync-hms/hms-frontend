import { api } from "./api";

export const patientsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllPatients: builder.query({
      query: () => "/patient",
      providesTags: ["Patient"],
    }),

    addPatient: builder.mutation({
      query: (patient) => ({
        url: "/patient",
        method: "POST",
        body: patient,
      }),
      invalidatesTags: ["Patient", "Dashboard"],
    }),

    registerPatient: builder.mutation({
      query: (patient) => ({
        url: "/patient/register",
        method: "POST",
        body: patient,
      }),
    }),

    registerPatientUser: builder.mutation({
  query: (user) => ({
    url: "/users/register",
    method: "POST",
    body: user,
  }),
}),

    updatePatient: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/patient/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Patient", id },
        "Patient",
      ],
    }),

    updatePatientStatus: builder.mutation({
      query: ({ patientId, status }) => ({
        url: `/patient/${patientId}/status`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: ["Patient"],
    }),

    getPatientByUserId: builder.query({
      query: (userId) => `/patient/${userId}`,
      providesTags: ["Patient"],
    }),

    deletePatient: builder.mutation({
      query: (id) => ({
        url: `/patient/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Patient"],
    }),
  }),
});

export const {
  useGetAllPatientsQuery,
  useAddPatientMutation,
  useUpdatePatientMutation,
  useUpdatePatientStatusMutation,
  useDeletePatientMutation,
  useGetPatientByUserIdQuery,
  useRegisterPatientMutation,
  useRegisterPatientUserMutation,
} = patientsApi;
