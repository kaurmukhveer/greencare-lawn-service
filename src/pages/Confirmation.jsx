import { Link , useLocation} from "react-router-dom";

function Confirmation() {

  const location = useLocation();

  const { service, name, date } = location.state || {};

  return (
    <div className="confirmation-page">
      <div className="confirmation-card">

        <h1>✅ Booking Confirmed!</h1>

        <p>
          Thank you, {name}! for choosing GreenCare Lawn Services.
        </p>

        <div className="booking-summary">
          <h3>Booking Summary</h3>

          <p><strong>Service:</strong> {service}</p>
          <p><strong>Date:</strong> {date}</p>
          <p><strong>Confirmation:</strong> #GC1024</p>
        </div>

        <p className="next-steps">
          We will contact you within 24 hours to confirm your appointment.
        </p>

        <Link to="/">
          <button>Back Home</button>
        </Link>

      </div>
    </div>
  );
}

export default Confirmation;