import React from 'react';
import Header from './components/Header';
import Mission from './components/Mission';
import Nav from './components/Nav';
import Carousel from './components/Carousel ';
import AboutUs from './components/AboutUs';
import './index.css';
import Footer from './components/Footer';

function App() {
  return (
    <>
      
      <Nav />
      <main>
        <Carousel/>

        <AboutUs />
        <Mission></Mission>
      </main>
      <Footer/>
      <Header />
    </>
  );
}

export default App;
