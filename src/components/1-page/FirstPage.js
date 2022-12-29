import FirstPageMainContent from "./FirstPageMainContent"

function FirstPage(props) {
  return (
    <div>
      <FirstPageMainContent changeClickStatus={props.changeClickStatus} />
    </div>
  )
}
export default FirstPage