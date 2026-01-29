import { useState } from "react";
import { useMakePaymentMutation } from "../../../../services/receptionistApi";

function PayInvoiceModal({ invoice, onClose }) {
  const [paymentMethod, setPaymentMethod] = useState("CASH");
  const [makePayment, { isLoading }] = useMakePaymentMutation();

  const handlePay = async () => {
    try {
      await makePayment({
        invoiceId: invoice.invoiceId,
        amount: invoice.amount,
        paymentMethod: paymentMethod.toUpperCase(),
      }).unwrap();

      alert("Payment successful ✅");
      onClose();
    } catch (err) {
      alert("Payment failed ❌");
    }
  };

  return (
    <>
      <p><strong>Invoice ID:</strong> {invoice.invoiceId}</p>
      <p><strong>Amount:</strong> ₹{invoice.amount}</p>

      <select
        className="form-select mb-3"
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
      >
        <option value="CASH">Cash</option>
        <option value="UPI">UPI</option>
        <option value="CARD">Card</option>
      </select>

      <button
        className="btn btn-success"
        onClick={handlePay}
        disabled={isLoading}
      >
        Pay Now
      </button>
    </>
  );
}

export default PayInvoiceModal;
