import TopNavbarHeader from "../0-landingPage/TopNavbarHeader"
import FirstPageMainContent from "./FirstPageMainContent"

function FirstPage(props) {
  return (
    <div>
      <TopNavbarHeader changeClickStatus={props.changeClickStatus} />
      <FirstPageMainContent />
    </div>
  )
}
export default FirstPage