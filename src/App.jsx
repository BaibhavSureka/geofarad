import React from 'react';
import Header from './components/Header';
import Mission from './components/Mission';
import Nav from './components/Nav';
import Carousel from './components/Carousel ';
import AboutUs from './components/AboutUs';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <Carousel />
        <AboutUs />
        <Mission></Mission>
      </main>
    </>
  );
}

export default App;
