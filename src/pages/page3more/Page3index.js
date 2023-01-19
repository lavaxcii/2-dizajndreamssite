import { motion as m } from 'framer-motion';
import { useEffect } from 'react';

function Page3index() {
  useEffect(() => {
    document.title = 'DesignDreamsSite - Page3';
  })

  return (
    <m.div>
      <h2 className='headerStyle'>Here is our best selling game with many GOTY awards!</h2>
      <p className="paragraphStyle">Welcome to the best page ever. Here is our editorial about our newest game. </p>
    </m.div>
  )
}
export default Page3index