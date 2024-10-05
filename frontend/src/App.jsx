import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home/home'
import {Routes,Route, useNavigate} from 'react-router-dom';
import Movie from './pages/movie/movie'
import Search from './pages/search/search'
import Library from './pages/library/library'
import Settings from './pages/settings/settings'
import Success from './components/notifications/success/success'
import Login from './components/loginPage/login/login';

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()
  
  return (
    <div className='app'>
      <Routes>        
        <Route path='/home' element={<Home/>}>
          
        </Route>
        <Route path='/search' element={<Search/>}>
          
        </Route>               
        <Route path='/library' element={<Library/>}>
          
        </Route>         
        <Route path='/movie/:id' element={<Movie/>}/>        
      </Routes>
      <Success/> 
      <Login/>
    </div>
    
    
  )
}

export default App
