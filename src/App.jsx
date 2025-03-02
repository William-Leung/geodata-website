import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'
import Our_Work  from './pages/Our Work.jsx';
import Teams from './pages/Teams.jsx';
import Recruitment from './pages/Recruitment.jsx';
import Members from './pages/Members.jsx';
import Donate from './pages/Donate.jsx'
import FingerLakes from './pages/FingerLakes.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="our-work" element={<Our_Work/>}/>
        <Route path="finger-lakes" element={<FingerLakes/>}/>
        <Route path="teams" element={<Teams/>}/>
        <Route path="recruitment" element={<Recruitment/>}/>
        <Route path="members" element={<Members/>}/>
        <Route path="donate" element={<Donate/>}/>
        {/*catch all path for other arguments*/}
        <Route path="*" element={<Home/>}/>
      </Routes>
    </BrowserRouter>    
    </>
  )
}

export default App
