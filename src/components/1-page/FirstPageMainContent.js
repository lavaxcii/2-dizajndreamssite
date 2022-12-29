function FirstPageMainContent(props) {
  return (
    <div>
      <h2>Here be first page and its main component!</h2>
      <button onClick={ () => props.changeClickStatus() }>Click for status/page change</button>
    </div>
  )
}
export default FirstPageMainContent