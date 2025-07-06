/* eslint-disable react/prop-types */
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar';

const Layout = ({children,count}) => {
    return (
                <div className='overflow-x-hidden'>
                    <Navbar count={count}/>
            <div className="main-content min-h-screen">
                {children}
            </div>
            <Footer/>
        </div>
    );
}

export default Layout;