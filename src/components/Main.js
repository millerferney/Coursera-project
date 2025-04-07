import { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from '../utils/api';

const initializeTimes = () => {
  return fetchAPI(new Date());
};

const updateTimes = (state, action) => {
  return fetchAPI(new Date(action.payload));
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const result = submitAPI(formData);
    if (result) {
      navigate('/booking-confirmed');
    }
  };

  return (
    <div>
      <p>Plan your perfect event with us!</p>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    </div>
  );
}

export default Main;