import React from 'react';
import TopNavbarHeader from './TopNavbarHeader';
import PageMainContent from './PageMainContent';
import Footer from './Footer';
// import '../styles/GlobalStyle.css';

function Page(props) {
  
  return (
      <div>
        <TopNavbarHeader changeClickStatus={props.changeClickStatus} />
        <PageMainContent webpageContent={props.webpageContent} />
        <Footer />
      </div>
  )
}
export default Page