import React, { useState, useEffect } from 'react';
import LandingPage from './components/0-landingPage/LandingPage';
import './styles/GlobalStyle.css';

function App() {
  // ovdje mi trebaju komponente koje će tvoriti main page/landing page
  // s obzirom da radimo u reactu onda neće efektivno biti hiperlinkove
  // nego će on na klik na "drugu" stranicu ustvari rerenderirati trenutnu
  // to je zasada okej, a okej je i za server - jedino "nije" okej u slučaju
  // kada bi sajt bio ozbiljniji kontender za guglovu tražilicu, u tom slučaju
  // bi trebalo razmišljati od frameworku frameworka (next.js npr.), tj. o 
  // vrsti server-side renderinga koji je SEO friendly.
  // zasad je to nepotrebno.

  

  return (
    <div className='mainContainer'>
      <LandingPage />
    </div>
  );
}

export default App;
