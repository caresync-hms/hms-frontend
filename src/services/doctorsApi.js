import { api } from "./api";

export const doctorsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getDoctors: builder.query({
      query: () => "/doctors",
      providesTags: ["Doctor"],
    }),

    getDoctorById: builder.query({
      query: (id) => `/doctors/${id}`,
      providesTags: (result, error, id) => [{ type: "Doctor", id }],
    }),

    addDoctor: builder.mutation({
      query: (doctor) => ({
        url: "/doctors",
        method: "POST",
        body: doctor,
      }),
      invalidatesTags: ["Doctor"],
    }),

    updateDoctor: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/doctors/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Doctor", id },
        "Doctor",
      ],
    }),

    deleteDoctor: builder.mutation({
      query: (id) => ({
        url: `/doctors/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Doctor"],
    }),
  }),
});

export const {
  useGetDoctorsQuery,
  useGetDoctorByIdQuery,
  useAddDoctorMutation,
  useUpdateDoctorMutation,
  useDeleteDoctorMutation,
} = doctorsApi;
