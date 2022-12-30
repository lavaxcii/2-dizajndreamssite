import TopNavbarHeader from "../0-landingPage/TopNavbarHeader"
import ThirdPageMainContent from "./ThirdPageMainContent"

function ThirdPage(props) {
  return (
    <div>
      <TopNavbarHeader changeClickStatus={props.changeClickStatus} />
      <ThirdPageMainContent />
    </div>
  )
}
export default ThirdPage