import  Navbar  from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"

const NoPage = () => {
  return (
    <div>
      <Navbar/>
      <div className=" flex justify-center items-center font-bold text-3xl main-content min-h-screen">
        No Products 💨
      </div>
      <Footer/>
    </div>
  )
}

export default NoPage
