import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import NoPage from './pages/NoPage/NoPage'
import Register from './pages/Login/Register'
import Login from './pages/Login/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from './components/CartContext'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <CartProvider>
      <Router>
        <Routes>
          <Route  path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/*' element={<NoPage/>}/>
        </Routes>
      </Router>
      <ToastContainer />
      </CartProvider>
    </div>
  )
}

export default App
