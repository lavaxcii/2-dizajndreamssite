import { NavLink, Outlet, useLocation } from "react-router-dom";
import { motion as m } from 'framer-motion';
import { useEffect } from "react";

function Page3Layout() {
  const location = useLocation();
  useEffect(() => {
    document.title = 'DesignDreamsSite - Page3';
  }, [location.key])

  return (
    <m.div className="min-h-screen flex flex-col items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75, ease: "easeOut" }}>
      <h2 className='headerStyle'>Here is our best selling game with many GOTY awards!</h2>
      <p className="paragraphStyle">Welcome to the best page ever. Here is our editorial about our newest game. </p>

      <nav className="z-10 p-3 flex flex-row justify-center space-x-4 text-lg lg:text-1xl ease-in duration-300 opacity-90 hover:opacity-100">
        <NavLink className="navLinkStyle game" to='aboutgame' >About game</NavLink>
        <NavLink className="navLinkStyle game" to='linktogame' >Link to game</NavLink>
      </nav>

      <main className="m-2 flex flex-col" >
        <Outlet />
      </main>
    </m.div>
  )
}
export default Page3Layout