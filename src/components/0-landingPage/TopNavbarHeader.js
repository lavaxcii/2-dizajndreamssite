function TopNavbarHeader(props) {
  return (
    <div className="topNavbarHeader">
      <h2>Here be topNavbarHeader</h2>
      <button onClick={ () => props.changeClickStatus(0) }>Dreams of landing page!</button>
      <button onClick={ () => props.changeClickStatus(1) }>Dreams of page 1!</button>
      <button onClick={ () => props.changeClickStatus(2) }>Dreams of page 2!</button>
      <button onClick={ () => props.changeClickStatus(3) }>Dreams of page 3!</button>
    </div>
  )
}
export default TopNavbarHeader