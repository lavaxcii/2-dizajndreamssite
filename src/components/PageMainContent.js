import '../index.css'
import { motion as m } from 'framer-motion';

function PageMainContent(props) {
  // webpageHeader={webpagesContent[clicked].header} webpageParagraph={webpagesContent[clicked].paragraph}
  return (
    <m.div key={props.keyClick} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75, ease: "easeOut" }} className="m-8 mt-20 flex flex-col flex-grow">
      <h3 className='text-3xl p-1'>{props.webpageContent.header}</h3>
      <p className="text-2xl p-1 italic text-red-400 " >{props.webpageContent.paragraph}</p>
    </m.div>
    
  )
}
export default PageMainContent