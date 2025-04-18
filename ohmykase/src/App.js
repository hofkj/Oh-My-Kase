import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";


import './App.css';
import HomePage from './pages/HomePage'; 
import RestaurantPage from './pages/RestaurantPage';
import SearchPage from './pages/SearchPage';
import ReservationPage from './pages/ReservationPage';
import ReservationUserInfoPage from "./pages/ReservationUserInfoPage";

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
};

const Main = () => {
  return (
    <div className="App">
      {/* <HomePage />  */}
      {/* <RestaurantPage/> */}
      {/* <SearchPage/> */}
      {/* <ReservationPage/> */}


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/RestaurantPage" element={<RestaurantPage />} />
        <Route path="/SearchPage" element={<SearchPage />} />
        <Route path="/ReservationPage" element={<ReservationPage />} />
        <Route path="/ReservationUserInfoPage" element={<ReservationUserInfoPage />} />
      </Routes>
    </div>
  );
}

export default App;
