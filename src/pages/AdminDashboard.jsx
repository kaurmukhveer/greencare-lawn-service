import { Link } from "react-router-dom";

function AdminDashboard() {
   

    const booking =     
      JSON.parse(localStorage.getItem("currentBooking")) || {
      name: "Sarah Johnson",
      service: "Lawn Aeration",
      date: "2026-06-15",
    };

  return (
    <div className="admin-page">
      <h1>GreenCare Admin Dashboard</h1>
    
      <div className="admin-card">
        <h2>🔔 New Booking Received</h2>

        <p>
          <strong>Customer:</strong> {booking.name}
        </p>

        <p>
          <strong>Service:</strong> {booking.service}
        </p>

        <p>
          <strong>Date:</strong> {booking.date}
        </p>

        <Link to="/admin/details">
          <button className="admin-btn">
            View Booking Details
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AdminDashboard;