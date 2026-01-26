import { api } from "./api";

export const backupApi = api.injectEndpoints({
  endpoints: (builder) => ({
    downloadBackup: builder.query({
      query: (type) => ({
        url: `/backup/${type}/excel`,
        method: "GET",
        responseHandler: (response) => response.blob(),
        cache: "no-cache",
      }),
    }),
  }),
});

export const { useLazyDownloadBackupQuery } = backupApi;

/*
GET /backup/patient/excel
GET /backup/appointment/excel
GET /backup/payment/excel
GET /backup/all/excel

*/
