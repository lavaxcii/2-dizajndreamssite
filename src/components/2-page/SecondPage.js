import TopNavbarHeader from "../0-landingPage/TopNavbarHeader"
import SecondPageMainContent from "./SecondPageMainContent"

function SecondPage(props) {
  return (
    <div>
      <TopNavbarHeader changeClickStatus={props.changeClickStatus} />
      <SecondPageMainContent />
    </div>
  )
}
export default SecondPage