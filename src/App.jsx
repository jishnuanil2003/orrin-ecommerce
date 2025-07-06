import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import NoPage from './pages/NoPage/NoPage'
import Login from './pages/Login/Login'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/*' element={<NoPage/>}/>
        </Routes>
      </Router>
     
    </div>
  )
}

export default App
