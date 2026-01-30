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
