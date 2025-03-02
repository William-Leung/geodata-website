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

function Layout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="our-work">Our Work</Link>
        <Link to="teams">Teams</Link>
        <Link to="recruitment">Recruitment</Link>
        <Link to="members">Members</Link>
        <Link to="donate">Donate</Link>
      </nav>
      <Outlet />
    </>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="our-work" element={<Our_Work />}>
            <Route path="finger-lakes" element={<FingerLakes />} />
          </Route>
          <Route path="teams" element={<Teams />} />
          <Route path="recruitment" element={<Recruitment />} />
          <Route path="members" element={<Members />} />
          <Route path="donate" element={<Donate />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
=======
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
>>>>>>> b92dd203cd3cb4a428e079f77c492ff189c13976
  )
}

export default App;
