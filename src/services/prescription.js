import { api } from "./api";

export const prescriptionsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPrescriptionsByDoctorId: builder.query({
      query: (doctorId) => `/prescriptions/doctor/${doctorId}`,
      providesTags: ["Prescription"],
    }),

     addPrescription: builder.mutation({
      query: (prescription) => ({
        url: "/prescriptions",
        method: "POST",
        body: prescription,
      }),
      invalidatesTags: ["Prescription"],
    }),
  }),
});

export const {
useAddPrescriptionMutation,
useGetPrescriptionsByDoctorIdQuery,
} = prescriptionsApi;
