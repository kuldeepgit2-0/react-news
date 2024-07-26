
import { Outlet } from "react-router-dom"
import Banner from "./Components/Banner"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import NewsCard from "./Components/News"
const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      < Footer />
    </>
  )
}

export default App