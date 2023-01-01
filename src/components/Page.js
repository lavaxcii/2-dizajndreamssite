import React from 'react';
import TopNavbarHeader from './TopNavbarHeader';
import PageMainContent from './PageMainContent';
import Footer from './Footer';
import '../index.css'

function Page(props) {
  
  return (
      <div className='min-h-screen flex flex-col items-center'>
        <TopNavbarHeader changeClickStatus={props.changeClickStatus} />
        <PageMainContent keyClick={props.keyClick} webpageContent={props.webpageContent} />
        <Footer className='' />
      </div>
  )
}
export default Page