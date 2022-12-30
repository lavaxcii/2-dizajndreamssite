import React, { useState, useEffect } from 'react';
import './styles/GlobalStyle.css';
import LandingPage from './components/0-landingPage/LandingPage';
import FirstPage from './components/1-page/FirstPage';
import SecondPage from './components/2-page/SecondPage';
import ThirdPage from './components/3-page/ThirdPage';


function App() {
  // ovdje mi trebaju komponente koje će tvoriti main page/landing page
  // s obzirom da radimo u reactu onda neće efektivno biti hiperlinkove
  // nego će on na klik na "drugu" stranicu ustvari rerenderirati trenutnu
  // to je zasada okej, a okej je i za server - jedino "nije" okej u slučaju
  // kada bi sajt bio ozbiljniji kontender za guglovu tražilicu, u tom slučaju
  // bi trebalo razmišljati od frameworku frameworka (next.js npr.), tj. o 
  // vrsti server-side renderinga koji je SEO friendly.
  // zasad je to nepotrebno.

  const [clicked, setClicked] = useState(null);
  const changeClickStatus = (pageId) => {
    setClicked(pageId);
    console.log(clicked)
  }

  // useEffect(() => {
  //   const changeClickStatus = () => {
  //     if (clicked === false) {
  //       setClicked(true);
  //     } else {
  //       setClicked(false);
  //     };
  //   };

  //   document.addEventListener('click', changeClickStatus);

  //   return () => {
  //     document.removeEventListener('click', changeClickStatus);
  //   }
  // }, [clicked])

  if (clicked === null || clicked === 0) {
    return (
      <div className='mainContainer'>
      <LandingPage changeClickStatus={changeClickStatus} />
    </div>
    )
  } else if (clicked === 1) {
    return (
      <div>
        <FirstPage changeClickStatus={changeClickStatus} />
      </div>
    )
  } else if (clicked === 2) {
    return (
      <div>
        <SecondPage changeClickStatus={changeClickStatus} />
      </div>
    )
  } else if (clicked === 3) {
    return (
      <div>
        <ThirdPage changeClickStatus={changeClickStatus} />
      </div>
    )
  }
}

export default App;
