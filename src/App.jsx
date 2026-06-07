import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import BookingForm from "./pages/BookingForm";
import Confirmation from "./pages/Confirmation";
import AdminDashboard from "./pages/AdminDashboard";
import BookingDetails from "./pages/BookingDetails";
import AppointmentConfirmed from "./pages/AppointmentConfirmed";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<BookingForm />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/details" element={<BookingDetails />} />
        <Route path="/admin/confirmed" element={<AppointmentConfirmed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;