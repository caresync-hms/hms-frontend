import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/receptionist";

export const addInvoice = (data) =>
  axios.post(`${API_BASE_URL}/invoices`, data);

export const makePayment = (data) =>
  axios.post(`${API_BASE_URL}/payments`, data);

export const getInvoicesByPatient = (patientId) =>
  axios.get(`${API_BASE_URL}/patients/${patientId}/invoices`);
