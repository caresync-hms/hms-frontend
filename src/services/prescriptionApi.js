import { api } from "./api";

export const prescriptionApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createPrescription: builder.mutation({
      query: (data) => ({
        url: "/prescriptions",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Prescription"],
    }),

    getPrescriptionById: builder.query({
      query: (id) => `/prescriptions/${id}`,
      providesTags: ["Prescription"],
    }),

    getAllPrescriptions: builder.query({
      query: () => "/prescriptions",
      providesTags: ["Prescription"],
    }),

    getPrescriptionsByPatient: builder.query({
      query: (patientId) => `/prescriptions/patient/${patientId}`,
      providesTags: ["Prescription"],
    }),

    getPrescriptionsByDoctor: builder.query({
      query: (doctorId) => `/prescriptions/doctor/${doctorId}`,
      providesTags: ["Prescription"],
    }),

    getPrescriptionsByAppointment: builder.query({
      query: (appointmentId) => `/prescriptions/appointment/${appointmentId}`,
      providesTags: ["Prescription"],
    }),

    // updatePrescription: builder.mutation({
    //   query: ({ id, data }) => ({
    //     url: `/prescriptions/${id}`,
    //     method: "PUT",
    //     body: data,
    //   }),
    //   invalidatesTags: ["Prescription"],
    // }),

    deletePrescription: builder.mutation({
      query: (id) => ({
        url: `/prescriptions/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Prescription"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreatePrescriptionMutation,
  useGetPrescriptionByIdQuery,
  useGetAllPrescriptionsQuery,
  useGetPrescriptionsByPatientQuery,
  useGetPrescriptionsByDoctorQuery,
  useGetPrescriptionsByAppointmentQuery,
 // useUpdatePrescriptionMutation,
  useDeletePrescriptionMutation,
} = prescriptionApi;
