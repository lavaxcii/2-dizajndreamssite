function TopNavbarHeader(props) {
  const buttonArray = [];
  for (let i = 0; i < 4; i++) {
    let buttonName;
    if (i === 0) {
      buttonName = 'Home';
    } else {
      buttonName = `Page ${i}`;
    }

    buttonArray.push(<button key={i} onClick={ () => props.changeClickStatus(i) } className="text-white hover:text-sky-400 p-2 border-solid border border-gray-500 rounded-full" ><a href="#"></a>{buttonName}</button>)
  }
  
  return (
    <header className="topNavbarHeader z-10 p-2 flex flex-row fixed top-0 justify-center space-x-4 text-lg lg:text-1xl text-white bg-gray-800 ease-in duration-300 opacity-90 hover:opacity-100 w-full">
      <h4 className="text-2xl lg:text-3xl">Design Dreams</h4>
      { buttonArray }
    </header>
  )
}
export default TopNavbarHeader