import { useState, useEffect } from 'react';

function BookingForm({ availableTimes = [], dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(
      date &&
      time &&
      guests >= 1 &&
      guests <= 10 &&
      occasion
    );
  }, [date, time, guests, occasion]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      submitForm({ date, time, guests, occasion });
    }
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    dispatch && dispatch({ type: 'UPDATE_TIMES', payload: newDate });
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form" aria-label="Booking Form">
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" name="date" value={date} onChange={handleDateChange} required aria-label="Reservation Date" />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" name="time" value={time} onChange={(e) => setTime(e.target.value)} required aria-label="Reservation Time">
        <option value="">Select time</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
        min="1"
        max="10"
        required
        aria-label="Number of Guests"
      />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" name="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required aria-label="Occasion Type">
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" disabled={!isFormValid} aria-label="On Click" />
    </form>
  );
}

export default BookingForm;