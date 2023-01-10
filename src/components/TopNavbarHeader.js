import * as React from "react";
import { Link } from "react-router-dom";

function TopNavbarHeader(props) {
  const buttonArray = [];
  for (let i = 0; i < 4; i++) {
    let buttonName;
    let linkName;
    if (i === 0) {
      buttonName = 'Home';
      linkName = '/home'
    } else {
      buttonName = `Page ${i}`;
      linkName = `/page${i}`
    }

    buttonArray.push(<button key={i} onClick={ () => props.changeClickStatus(i) } className="text-white hover:text-sky-400 border-solid border border-gray-500 rounded-full" ><Link to={`${linkName}`} className='p-2' >{buttonName}</Link></button>)
  }
  
  return (
    <header className="topNavbarHeader z-10 p-3 flex flex-row fixed top-0 justify-center space-x-4 text-lg lg:text-1xl text-white bg-gray-800 ease-in duration-300 opacity-90 hover:opacity-100 w-full">
      <h4 className="text-2xl lg:text-3xl">Design Dreams</h4>
      { buttonArray }
    </header>
  )
}
export default TopNavbarHeader