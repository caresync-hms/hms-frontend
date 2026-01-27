import { api } from "./api";

export const appointmentsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAppointments: builder.query({
      query: () => "/appointments",
      providesTags: ["Appointment"],
    }),

    getAppointmentsByDoctor: builder.query({
      query: (doctorId) => `/appointments/doctor/${doctorId}`,
      providesTags: ["Appointment"],
    }),

    getAppointmentsByPatient: builder.query({
      query: (patientId) => `/appointments/patient/${patientId}`,
      providesTags: ["Appointment"],
    }),

    bookAppointment: builder.mutation({
      query: (appointment) => ({
        url: "/appointments/book",
        method: "POST",
        body: appointment,
      }),
      invalidatesTags: ["Appointment"],
    }),

    updateAppointmentStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/appointments/${id}/status`,
        method: "PUT",
        body: { status },
      }),
      invalidatesTags: ["Appointment"],
    }),

    cancelAppointment: builder.mutation({
      query: (id) => ({
        url: `/appointments/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Appointment"],
    }),
  }),
});

export const {
  useGetAppointmentsQuery,
  useGetAppointmentsByDoctorQuery,
  useGetAppointmentsByPatientQuery,
  useBookAppointmentMutation,
  useUpdateAppointmentStatusMutation,
  useCancelAppointmentMutation,
} = appointmentsApi;
