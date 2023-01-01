import '../index.css'
import { motion as m } from 'framer-motion';

function PageMainContent(props) {
  // webpageHeader={webpagesContent[clicked].header} webpageParagraph={webpagesContent[clicked].paragraph}
  return (
    <m.main key={props.keyClick} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75, ease: "easeOut" }} className="m-8 mt-20 flex flex-col flex-grow">
      <h3 className='lg:text-4xl p-5 lg:pl-20 text-2xl'>{props.webpageContent.header}</h3>
      <p className="text-lg pl-10 pr-5 p-5 lg:pl-44 lg:pr-28 italic text-black" >{props.webpageContent.paragraph}</p>
      {props.webpageContent.linkToGame !== undefined ? <a href={props.webpageContent.linkToGame} className="text-sky-600 underline hover:text-sky-500 text-lg pl-10 pr-5 p-5 lg:pl-44 lg:pr-28">The best game ever. Click here.</a> : null}
    </m.main>
    
  )
}
export default PageMainContent