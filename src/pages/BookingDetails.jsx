import { Link } from "react-router-dom";

function BookingDetails() {
    
  const booking =
    JSON.parse(localStorage.getItem("currentBooking")) || {
      name: "Sarah Johnson",
      service: "Lawn Aeration",
      address: "123 Main Street",
      phone: "(613) 555-1234",
      date: "2026-06-15",
    };

  return (
    <div className="admin-page">
      <h1>Booking Details</h1>

      <div className="admin-card">
        <p>
          <strong>Customer:</strong> {booking.name}
        </p>

        <p>
          <strong>Service:</strong> {booking.service}
        </p>

        <p>
          <strong>Phone:</strong> {booking.phone}
        </p>

        <p>
          <strong>Address:</strong> {booking.address}
        </p>

        <p>
          <strong>Date:</strong> {booking.date}
        </p>

        <p>
          <strong>Status:</strong> PENDING REVIEW
        </p>
       

     

        <Link to="/admin/confirmed">
          <button className="admin-btn">
            Confirm Appointment
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BookingDetails;