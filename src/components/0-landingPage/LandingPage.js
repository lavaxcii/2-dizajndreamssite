import React, { useState, useEffect } from 'react';
import TopNavbarHeader from './TopNavbarHeader';
import MainContent from './LandingPageMainContent';
import Footer from './Footer';
import FirstPage from '../1-page/FirstPage';
// import '../styles/GlobalStyle.css';

function LandingPage() {
  const [clicked, setClicked] = useState(false);
  const changeClickStatus = () => {
    if (clicked === true) {
      setClicked(false);
    } else {
      setClicked(true)
    }
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

  if (clicked === false) {
    return (
      <div>
        <TopNavbarHeader />
        <MainContent changeClickStatus={changeClickStatus} />
        <Footer />
      </div>
    )
  } else {
    return (
      <div>
        <FirstPage changeClickStatus={changeClickStatus} />
      </div>
    )
  }

}
export default LandingPage