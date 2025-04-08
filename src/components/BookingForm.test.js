import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../components/BookingForm';

describe('BookingForm HTML5 validation', () => {
  test('renders required attributes', () => {
    render(<BookingForm availableTimes={['18:00', '19:00']} />);

    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);

    expect(dateInput).toBeRequired();
    expect(timeSelect).toBeRequired();
    expect(guestsInput).toBeRequired();
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
    expect(occasionSelect).toBeRequired();
  });
});

describe('BookingForm React validation logic', () => {
    test('submit button disabled when form is invalid', () => {
      render(<BookingForm availableTimes={['18:00']} />);
  
      const submitButton = screen.getByRole('button', { name: /make your reservation/i });
      expect(submitButton).toBeDisabled();
    });
  
    test('submit button enabled when form is valid', () => {
      render(<BookingForm availableTimes={['18:00']} />);
  
      fireEvent.change(screen.getByLabelText(/choose date/i), {
        target: { value: '2025-05-01' },
      });
      fireEvent.change(screen.getByLabelText(/choose time/i), {
        target: { value: '18:00' },
      });
      fireEvent.change(screen.getByLabelText(/number of guests/i), {
        target: { value: '5' },
      });
      fireEvent.change(screen.getByLabelText(/occasion/i), {
        target: { value: 'Birthday' },
      });
  
      const submitButton = screen.getByRole('button', { name: /make your reservation/i });
      expect(submitButton).not.toBeDisabled();
    });
  });