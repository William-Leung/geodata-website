import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Home from './pages/Home.jsx'
import Our_Work  from './pages/Our Work.jsx';
import Teams from './pages/Teams.jsx';
import Recruitment from './pages/Recruitment.jsx';
import Members from './pages/Members.jsx';
import Donate from './pages/Donate.jsx'
import FingerLakes from './pages/FingerLakes.jsx';
import './App.css'
import Layout from './components/Layout';
import Data from './pages/Data.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="our-work" element={<Our_Work />}>
            <Route path="finger-lakes" element={<FingerLakes />} />
          </Route>
          <Route path="teams" element={<Teams />} />
          <Route path="recruitment" element={<Recruitment />} />
          <Route path="members" element={<Members />} />
          <Route path="donate" element={<Donate />} />
          <Route path="data" element={<Data />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
