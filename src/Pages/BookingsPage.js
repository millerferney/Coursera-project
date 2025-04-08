import Header from '../components/Header';
import BookingForm from '../components/BookingForm';
import Footer from '../components/Footer';

function Bookings() {
  return (
    <main className="bookings">
      <Header />
      <h2>Make a Reservation</h2>
      <BookingForm />
      <Footer />
    </main>
  );
}

export default Bookings;