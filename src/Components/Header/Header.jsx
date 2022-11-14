import React from 'react';
import Toprated from '../../pages/Toprated';
import Popular from '../../pages/Popular';
import Home from '../../pages/Home';
import './Header.css'
import {BrowserRouter as Router, Route,Routes, Link} from 'react-router-dom'
import Upcoming from '../../pages/Upcoming';


function Header() {
  return (
    <div className="navbar-new">
    <Router>
      <Link className="navbar-link" exact from="/"  to="/"><img className="logo" width="100" src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="" /></Link>
      <Link className="navbar-link" to='/toprated' >Top Rated </Link>
      <Link className="navbar-link" to='/popular'>Popular Movies</Link>
      <Link className="navbar-link" to='upcoming'>Upcoming Movies</Link>
      <Routes>
        <Route element={<Toprated/>} path='/toprated' />
        <Route element={<Popular/>} path='/popular' />
        <Route element={<Upcoming/>} path='/upcoming' />
        <Route element={<Home/>} path='/' />
      </Routes>
    </Router>
    </div>
    
  )
}

export default Header