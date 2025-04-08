
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import BookingsPage from './Pages/BookingsPage';
import Nav from './components/Nav';
import './App.css';
import react from 'react';

function App() {
  return (
    <>
     
        <Nav />
        <Routes>
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/BookingsPage" element={<BookingsPage />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
    
    </>
  );
}

export default App;
