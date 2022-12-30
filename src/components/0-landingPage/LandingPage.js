import React, { useState, useEffect } from 'react';
import TopNavbarHeader from './TopNavbarHeader';
import MainContent from './LandingPageMainContent';
import Footer from './Footer';
// import '../styles/GlobalStyle.css';

function LandingPage(props) {
  
  return (
      <div>
        <TopNavbarHeader changeClickStatus={props.changeClickStatus} />
        <MainContent />
        <Footer />
      </div>
  )
}
export default LandingPage