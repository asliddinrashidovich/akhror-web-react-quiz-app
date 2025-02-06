import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

function RoutLayout() {
  return (
    <>
        {/* navbar */}
        <header>
            <Navbar/>
        </header>
        <main>
            <Outlet/>
        </main>
    </>
  )
}

export default RoutLayout