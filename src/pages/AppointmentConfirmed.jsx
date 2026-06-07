import { Link } from "react-router-dom";

function AppointmentConfirmed() {
    localStorage.setItem("bookingStatus", "CONFIRMED");
  const booking =
    JSON.parse(localStorage.getItem("currentBooking")) || {
      name: "Sarah Johnson",
      service: "Lawn Aeration",
      date: "2026-06-15",
    };

  return (
    <div className="admin-page">
      <h1>Appointment Confirmed</h1>

      <div className="admin-card">
        <h2>✅ Booking Approved</h2>

        <p>
          <strong>Customer:</strong> {booking.name}
        </p>

        <p>
          <strong>Service:</strong> {booking.service}
        </p>

        <p>
          <strong>Date:</strong> {booking.date}
        </p>

        <div className="status-confirmed">
          CONFIRMED
        </div>

        <p className="success-message">
          Customer notification sent successfully.
        </p>

        <Link to="/admin">
          <button className="admin-btn">
            Back to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AppointmentConfirmed;