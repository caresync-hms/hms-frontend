import { api } from "./api";

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    /* -------------------- GET ALL USERS -------------------- */
    getAllUsers: builder.query({
      query: () => "/users",
      providesTags: (result) =>
        result
          ? [
              { type: "User", id: "LIST" },
              ...result.map((user) => ({ type: "User", id: user.id })),
            ]
          : [{ type: "User", id: "LIST" }],
    }),

    /* -------------------- GET USER BY ID -------------------- */
    getUserById: builder.query({
      query: (id) => `/users/${id}`,
      providesTags: (result, error, id) => [{ type: "User", id }],
    }),

    /* -------------------- GET USERS BY ROLE -------------------- */
    getUsersByRole: builder.query({
      query: (role) => `/users/role/${role}`,
      providesTags: (result, error, role) =>
        result
          ? [
              { type: "User", id: "LIST" },
              ...result.map((user) => ({ type: "User", id: user.id })),
            ]
          : [{ type: "User", id: "LIST" }],
    }),

    /* -------------------- ADD USER -------------------- */
    addUser: builder.mutation({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: user,
      }),
      invalidatesTags: [{ type: "User", id: "LIST" }, "Dashboard"],
    }),

    /* -------------------- UPDATE USER (FULL) -------------------- */
    updateUser: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "User", id },
        { type: "User", id: "LIST" },
        "Dashboard",
      ],
    }),

    /* -------------------- UPDATE USER STATUS -------------------- */
    updateUserStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/users/${id}/status`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "User", id },
        { type: "User", id: "LIST" },
        "Dashboard",
      ],
    }),

    /* -------------------- DELETE USER -------------------- */
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "User", id },
        { type: "User", id: "LIST" },
        "Dashboard",
      ],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useGetUsersByRoleQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useUpdateUserStatusMutation,
  useDeleteUserMutation,
} = userApi;
