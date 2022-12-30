function PaigeMainContent(props) {
  // webpageHeader={webpagesContent[clicked].header} webpageParagraph={webpagesContent[clicked].paragraph}
  return (
    <div className="mainContainer">
      <h3>{props.webpageContent.header}</h3>
      <p>{props.webpageContent.paragraph}</p>
    </div>
    
  )
}
export default PaigeMainContent