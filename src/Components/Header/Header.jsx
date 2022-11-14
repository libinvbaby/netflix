import React from 'react';
import Toprated from '../../pages/Toprated';
import Popular from '../../pages/Popular';
import Home from '../../pages/Home';
import './Header.css'
import { Route,Routes, Link} from 'react-router-dom'
import Upcoming from '../../pages/Upcoming';


function Header() {
  return (
    <div className="navbar-new">
   
      <Link className="navbar-link" exact from="/"  to="/netflix"> <img className="logo" width="100" src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="" /></Link>
      <Link className="navbar-link" to='/netflix/toprated' >Top Rated </Link>
      <Link className="navbar-link" to='/netflix/popular'>Popular Movies</Link>
      <Link className="navbar-link" to='/netflix/upcoming'>Upcoming Movies</Link>
      <Routes>
        <Route element={<Toprated/>} path='/netflix/toprated' />
        <Route element={<Popular/>} path='/netflix/popular' />
        <Route element={<Upcoming/>} path='/netflix/upcoming' />
        <Route element={<Home/>} path='/netflix' />
      </Routes>
    
    </div>
    
  )
}

export default Header