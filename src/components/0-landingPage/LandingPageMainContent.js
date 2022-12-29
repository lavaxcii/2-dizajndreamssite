function MainContent(props) {
  return (
    <div className="mainContent">
      <h2>Here be mainContentComp</h2>
      <h3>Here (MAY)BE subComponentsOfMainContent</h3>
      <button onClick={ () => props.changeClickStatus() }>CLICK for FIRST (ever) real react page!</button>
    </div>
  )
}
export default MainContent