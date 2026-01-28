import { api } from "./api";

export const doctorsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllDoctors: builder.query({
      query: () => "/doctor/all",
      providesTags: ["Doctor"],
    }),

    getDoctorById: builder.query({
      query: (id) => `/doctor/${id}`,
      providesTags: (result, error, id) => [{ type: "Doctor", id }],
    }),

    getPatientsByDoctorId: builder.query({
      query: (doctorId) => `/doctor/${doctorId}/patient`,
      providesTags: ["Doctor"],
    }),

    getDoctorByUserId: builder.query({
      query: (userId) => `/doctor/user/${userId}`,
      providesTags: ["Doctor"],
    }),

    addDoctor: builder.mutation({
      query: (doctor) => ({
        url: "/doctor",
        method: "POST",
        body: doctor,
      }),
      invalidatesTags: ["Doctor", "Dashboard"],
    }),

    updateDoctorStatus: builder.mutation({
      query: ({ doctorId, status }) => ({
        url: `/doctor/${doctorId}/status`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: ["Doctor", "Dashboard"],
    }),

    updateDoctor: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/doctor/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Doctor", id },
        "Doctor",
        "Dashboard",
      ],
    }),

    deleteDoctor: builder.mutation({
      query: (id) => ({
        url: `/doctor/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Doctor", "Dashboard"],
    }),
  }),
});

export const {
  useGetAllDoctorsQuery,
  useGetDoctorByIdQuery,
  useAddDoctorMutation,
  useUpdateDoctorMutation,
  useUpdateDoctorStatusMutation,
  useDeleteDoctorMutation,
  useGetPatientsByDoctorIdQuery,
  useGetDoctorByUserIdQuery,
} = doctorsApi;
