import { api } from "./api";

export const departmentsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // GET all departments
    getAllDepartments: builder.query({
      query: () => "/department",
      providesTags: ["Department"],
    }),

    // ADD department
    addDepartment: builder.mutation({
      query: (department) => ({
        url: "/department",
        method: "POST",
        body: department,
      }),
      invalidatesTags: ["Department"],
    }),

    // UPDATE department (full update)
    updateDepartment: builder.mutation({
      query: ({ departmentId, ...data }) => ({
        url: `/department/${departmentId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { departmentId }) => [
        { type: "Department", id: departmentId },
        "Department",
      ],
    }),

    // DELETE department
    deleteDepartment: builder.mutation({
      query: (departmentId) => ({
        url: `/department/${departmentId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Department"],
    }),
  }),
});

export const {
  useGetAllDepartmentsQuery,
  useAddDepartmentMutation,
  useUpdateDepartmentMutation,
  useDeleteDepartmentMutation,
} = departmentsApi;
