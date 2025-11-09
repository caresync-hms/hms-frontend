import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-dark text-light text-center">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="mb-3">Page Not Found</h2>
      <p className="text-secondary mb-4">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <button className="btn btn-primary btn-lg" onClick={() => navigate("/")}>
        Go Back Home
      </button>
    </div>
  );
}

export default NotFound;
