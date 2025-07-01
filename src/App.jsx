import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import NoPage from './pages/NoPage/NoPage'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/*' element={<NoPage/>}/>
        </Routes>
      </Router>
     
    </div>
  )
}

export default App
