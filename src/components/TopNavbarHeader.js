function TopNavbarHeader(props) {
  const buttonArray = [];
  for (let i = 0; i < 4; i++) {
    // ifovi za nazive stranice
    buttonArray.push(<button key={i} onClick={ () => props.changeClickStatus(i) } >Dreams of page {i}!</button>)
  }
  return (
    <div className="topNavbarHeader z-10 p-2 flex flex-row fixed top-0 justify-center space-x-4 text-3xl text-white bg-gray-700 opacity-80 border-solid border-4 border-red-400 w-full">
      { buttonArray }
    </div>
  )
}
export default TopNavbarHeader