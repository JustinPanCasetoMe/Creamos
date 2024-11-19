import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Profile from './pages/Profile'

function App() {

  return (
    <div>
      <Header />  
      <Routes>
        <Route path='/Creamos/' element={<Home />} />
        <Route path='/Creamos/profile-:Creator' element={<Profile />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App
