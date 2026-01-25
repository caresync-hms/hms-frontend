import { api } from "./api";

export const noticesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // GET ALL
    getAllNotices: builder.query({
      query: () => "/notices",
      providesTags: ["Notice"],
    }),

    // ADD
    addNotice: builder.mutation({
      query: (notice) => ({
        url: "/notices",
        method: "POST",
        body: notice,
      }),
      invalidatesTags: ["Notice"],
    }),

    // UPDATE
    updateNotice: builder.mutation({
      query: ({ noticeId, ...data }) => ({
        url: `/notices/${noticeId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (r, e, { noticeId }) => [
        { type: "Notice", id: noticeId },
        "Notice",
      ],
    }),

    // DELETE
    deleteNotice: builder.mutation({
      query: (noticeId) => ({
        url: `/notices/${noticeId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Notice"],
    }),
  }),
});

export const {
  useGetAllNoticesQuery,
  useAddNoticeMutation,
  useUpdateNoticeMutation,
  useDeleteNoticeMutation,
} = noticesApi;
