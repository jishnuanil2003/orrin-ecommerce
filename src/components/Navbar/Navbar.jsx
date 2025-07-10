import { Link } from "react-router-dom";
import { useState,useEffect,useContext} from "react";
import logo from '../../assets/ORRIN WATCHES white.png'; // Make sure this path is correct
import SearchBar from "../Searchbar/SearchBar";
import { searchData } from "../Searchbar/SearchBar";
import { db,auth } from "../firebase/config";
import { doc,getDoc } from "firebase/firestore";
import { CartContext } from "../CartContext";

const Navbar = ({count}) => {
    const[user,setUser] = useState(null)
    const [value, setValue] = useState('')
    const [active, setActive] = useState(false)
    const { cartItems } = useContext(CartContext);
    const filter_data = searchData.filter(item =>
        item.name.toLowerCase().includes(value.toLowerCase())
    );
    const [search, setSearch] = useState(false);
    const fetchUserData = async()=>{
        auth.onAuthStateChanged(async(user)=>{
            console.log(user)
            const docRef = doc(db,'users',user.uid)
            const docSnap = await(getDoc(docRef))
            if(docSnap.exists()){
                setUser(docSnap.data())
            }
        })
    }
    useEffect(() => {
    fetchUserData();
    }, [])
    return (
        <div className="overflow-x-hidden">
        <nav className="bg-[#000000] text-white pl-3 pr-5 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img
                        src={logo}
                        alt="ORRIN Watches"
                        className="h-2 w-auto"
                    />
                </Link>

                {/* Center Nav Links */}
                    <div className={`${active ? "translate-x-0" : "translate-x-full"} fixed top-14 right-0 w-full max-w-xs h-screen transition-transform duration-300 ease-in md:static md:translate-x-0 md:flex md:flex-row md:items-center md:justify-center md:gap-10 md:h-auto md:bg-transparent pl-9 pt-8 md:pt-0 gap-6 text-base bg-black text-white flex flex-col font-medium z-11`}>
                    <Link to="/" className="hover:text-gray-400 w-">New</Link>
                    <hr className="border-t border-gray-600" />
                    <Link to="/shop" className="hover:text-gray-400">Men</Link>
                    <hr className="border-t border-gray-600" />
                    <Link to="/women" className="hover:text-gray-400">Women</Link>
                    <hr className="border-t border-gray-600" />
                    <Link to="/kids" className="hover:text-gray-400">Kids</Link>
                    <hr className="border-t border-gray-600" />
                    <Link to="/premium" className="hover:text-gray-400">Premium</Link>
                    <hr className="border-t border-gray-600" />

                    {/* create a dropdown option for logout and view profile */}
                    <Link to="/login" className="hover:text-gray-400">{user? user.firstname:'Profile'}</Link>
                </div>

                {/* Right Icons */}
                <div className="flex items-center space-x-4">
                    {/* Search */}
                    <SearchBar search={search} setSearch={setSearch} />

                    {/* Cart */}
                    <Link to="/cart" className="flex items-center gap-1">
                        <ion-icon name="bag-handle-outline" className="text-2xl"></ion-icon>
                        <span className="text-white">{cartItems.length}</span>
                    </Link>

                    {/* hamburger menu */}
                    <ion-icon name="grid-outline" className="text-2xl visible md:hidden" onClick={() => setActive(!active)}></ion-icon>
                </div>
            </div>
        </nav>
            <div className={`${search ? "translate-x-0" : "translate-x-full"} fixed top-13 right-0 w-full max-w-xs h-screen bg-black transition-transform duration-300 md:hidden flex items z-10`}>
            <div className="bg-[#2a2a2a] flex items-center px-3 py-1 h-8 m-2 rounded-full text-sm hover:pr-5 transition-all duration-150 ease-in md:hidden">
                <ion-icon name="search" className="mr-2 left-5 text-white text-lg"></ion-icon>
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent outline-none text-white placeholder-gray-400 w-64"
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
        </div>
         {value && (
        <div className="absolute top-26 left-26 md:top-14 bg-white rounded shadow-md w-64 z-10">
          {filter_data.length > 0 ? (
            filter_data.map((obj, index) => (
              <div key={index} className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <img src={obj.image} alt={obj.name} className="w-6 h-6 rounded-full mr-3" />
                <p className="text-gray-700">{obj.name}</p>
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500">No results found</div>
          )}
        </div>
      )}
        </div>
    );
};

export default Navbar;