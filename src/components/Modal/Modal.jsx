import "./Modal.css";

function Modal({ title, children, onClose }) {
  return (
    <>
      {/* Backdrop */}
      <div className="modal-backdrop-custom" onClick={onClose}></div>

      {/* Modal */}
      <div className="modal-custom">
        <div className="modal-header">
          <h5 className="modal-title">{title}</h5>
          <button className="btn-close" onClick={onClose}></button>
        </div>

        <div className="modal-body">{children}</div>
      </div>
    </>
  );
}

export default Modal;
