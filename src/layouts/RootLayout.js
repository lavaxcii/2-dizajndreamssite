import { NavLink, Outlet } from "react-router-dom"

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <nav className="z-10 p-3 flex flex-row fixed top-0 justify-center space-x-4 text-lg lg:text-1xl text-white bg-gray-800 ease-in duration-300 opacity-90 hover:opacity-100 w-full">
        <h1 className="text-sm lg:text-3xl">Design Dreams Site</h1>
        <NavLink className="navLinkStyle" to='/' >Home</NavLink>
        <NavLink className="navLinkStyle" to='page1' >Page1</NavLink>
        <NavLink className="navLinkStyle" to='page2' >Page2</NavLink>
        <NavLink className="navLinkStyle" to='page3' >Page3</NavLink>
      </nav>

      <main className="m-8 mt-20 flex flex-col flex-grow" >
        <Outlet />
      </main>

      <footer className="footer p-4 flex flex-row justify-center text-center text-1xl text-white font-light bg-black w-full">
        <p>© 2023 by Lava</p>
      </footer>
    </div>
  )
}
export default RootLayout