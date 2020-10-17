import React from 'react';
// import logo from './logo.svg';
import './App.scss';

import Approach from './components/Approach/approach';
import Directions from './components/Directions/directions';
import Documents from './components/Documents/documents';
import Footer from './components/Footer/footer';
import InfoDirector from './components/InfoDirector/infoDirector';
import InfoImage from './components/InfoImage/infoImage';
import Navbar from './components/Navbar/navbar';
import Questions from './components/Questions/questions';
import ReviewsSlider from './components/ReviewsSlider/reviewsSlider';
import SkladReabil from './components/SkladReabil/skladReadbil';
import SkladTeach from './components/SkladTeach/skladTeach';


function App() {
  return (
    <div className="App">
      <Navbar />
      <InfoImage />
      <Directions />
      <InfoDirector />
      <Approach />
      <SkladTeach />
      <SkladReabil />
      <ReviewsSlider />
      <Documents />
      <Questions />
      <Footer />
    </div>
  );
}

export default App;
