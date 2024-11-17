import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import ProjectRender from './components/ProjectRender'

function App() {

  return (
    <div>
      <Header />  
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <ProjectRender />
      {/* <Footer /> */}
    </div>
  )
}

export default App
