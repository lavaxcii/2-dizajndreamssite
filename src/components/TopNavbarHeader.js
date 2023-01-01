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
    <header className="topNavbarHeader z-10 p-2 flex flex-row fixed top-0 justify-center space-x-4 text-1xl lg:text-2xl text-white bg-gray-800 opacity-90 w-full">
      { buttonArray }
    </header>
  )
}
export default TopNavbarHeader