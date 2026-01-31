import { api } from "./api";

export const receptionistApi = api.injectEndpoints({
  endpoints: (builder) => ({

    /* ===================== PATIENT ===================== */

    getReceptionistPatients: builder.query({
      query: () => "/receptionist/patients",
      providesTags: ["Patient"],
    }),

    createPatient: builder.mutation({
  query: (patient) => ({

    url: "/receptionist/patient",
    method: "POST",
    body: patient,
  }),
  invalidatesTags: ["Patient"],
}),

    /* ===================== WARD & BED ===================== */

getAllWards: builder.query({
  query: () => "/receptionist/wards",
  providesTags: ["Ward"],
}),

getBedsByWard: builder.query({
  query: (wardId) => `/receptionist/wards/${wardId}/beds`,
  providesTags: ["Bed"],
}),

createBed: builder.mutation({
   query: (data) => ({
    url: "/receptionist/beds",
method: "POST",
     body: data,
   }),
   invalidatesTags: ["Bed"],
 }),

assignBed: builder.mutation({
  query: (data) => ({
    url: "/receptionist/assign-bed",
    method: "POST",
    body: data,
  }),
  invalidatesTags: ["Bed", "Patient"],
}),

addBed: builder.mutation({
  query: (data) => ({
    url: "/receptionist/beds",
    method: "POST",
    body: data,
  }),
}),
updateBed: builder.mutation({
  query: ({ bedId, data }) => ({
    url: `/receptionist/beds/${bedId}`,
    method: "PUT",
    body: data,
  }),
  invalidatesTags: ["Bed"],
}),

emptyBed: builder.mutation({
  query: (bedId) => ({
    url: `/receptionist/beds/${bedId}/empty`,
    method: "POST",
  }),
  invalidatesTags: ["Bed"],
}),


    /* ===================== INVOICE ===================== */

    createInvoice: builder.mutation({
      query: ({ patientId, amount }) => ({
        url: "/receptionist/invoices",
        method: "POST",
        body: { patientId, amount },
      }),
      invalidatesTags: ["Invoice", "Dashboard"],
    }),

    getAllInvoices: builder.query({
      query: () => "/receptionist/invoices",
      providesTags: ["Invoice"],
    }),

    getInvoicesByPatient: builder.query({
      query: (patientId) =>
        `/receptionist/patients/${patientId}/invoices`,
      providesTags: ["Invoice"],
    }),
    updateInvoiceStatus: builder.mutation({
  query: ({ invoiceId, status }) => ({
    url: `/receptionist/invoices/${invoiceId}/status`,
    method: "PUT",
    params: { status },
  }),
  invalidatesTags: ["Invoice"],
}),

    /* ===================== PAYMENT ===================== */

    makePayment: builder.mutation({
      query: ({ invoiceId, amount, paymentMethod }) => ({
        url: "/receptionist/payments",
        method: "POST",
        body: { invoiceId, amount, paymentMethod },
      }),
      invalidatesTags: ["Payment", "Invoice", "Dashboard"],
    }),

    getPaymentsByPatient: builder.query({
      query: (patientId) =>
        `/receptionist/patients/${patientId}/payments`,
      providesTags: ["Payment"],
    }),

    getAllPayments: builder.query({
      query: () => "/receptionist/payments",
      providesTags: ["Payment"],
    }),
   downloadReceipt: builder.query({
  query: (paymentId) => ({
    url: `/receptionist/payments/${paymentId}/receipt`,
    responseHandler: (response) => response.blob(),
  }),
}),
  }),
});

export const {
   useGetAllWardsQuery,
  useGetBedsByWardQuery,
  useCreateBedMutation,
  useAssignBedMutation,
  useEmptyBedMutation,   // ✅ REQUIRED
  useUpdateBedMutation,
  useDownloadReceiptQuery,
  useUpdateInvoiceStatusMutation,
  useGetReceptionistPatientsQuery,
  useCreatePatientMutation,
  useCreateInvoiceMutation,
  useGetAllInvoicesQuery,
  useGetInvoicesByPatientQuery,
  useMakePaymentMutation,
  useGetPaymentsByPatientQuery,
  useGetAllPaymentsQuery,
} = receptionistApi;
