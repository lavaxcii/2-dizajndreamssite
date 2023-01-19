import { motion as m } from 'framer-motion';
import { useEffect } from 'react';
import '../../index.css';

function Page3b() {
  useEffect(() => {
    document.title = 'DesignDreamsSite - Page3 - Link to game';
  })

  return (
    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75, ease: "easeOut" }}>
      <a className="text-sky-600 underline hover:text-sky-500 visited:text-red-600 text-lg pr-5 ml-0 pt-10" href="https://lavaxcii.github.io/JS-Pro5-TicTacToe/">Click to play!</a>
    </m.div>
  )
}
export default Page3b