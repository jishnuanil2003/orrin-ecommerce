/* eslint-disable react/prop-types */
import  Navbar  from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout = ({children}) => {
    return (
                <div className='overflow-x-hidden'>
            <Navbar/>
            <div className="main-content min-h-screen">
                {children}
            </div>
            <Footer/>
        </div>
    );
}

export default Layout;