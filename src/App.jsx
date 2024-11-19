import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Profile from './pages/Profile'

function App() {

  const ScreenWidth = window.innerWidth

  return (
    <div>
      <div className={`${375<ScreenWidth && ScreenWidth<=425 ? 'dn' : '' }`}>
        <Header />  
      </div>
      <Routes>
        <Route path='/Creamos/' element={<Home />} />
        <Route path='/Creamos/profile/:Creator' element={<Profile />} />
        <Route path='/Creamos/profile/user' element={<Profile />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App
