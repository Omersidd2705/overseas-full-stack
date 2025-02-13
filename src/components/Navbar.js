import React from 'react';
// import './Navbar.css';
import Aboutpage from './Aboutpage'; // Default import
import Homepage from './Homepage'; // Default import
import Contactpage from './Contactpage'; // Default import
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Loginpage from './Loginpage';
import Findcollege from './Findcollege';
import { LuCrown } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
function Navbar() {
  return (
    <div>
      <BrowserRouter>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#" style={{ color: 'orange', fontFamily: 'cursive' }}>
        Overconsultancy <LuCrown />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <img src=".\logo.svg" alt="Logo" className="navbar-logo" width="100px" height="100px" />
          <li className="nav-item">
            <NavLink to="/homepage" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} style={{ fontFamily: 'Arial, sans-serif' }}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/findcollege" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} style={{ fontFamily: 'Arial, sans-serif' }}>
              Find colleges
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/aboutpage" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} style={{ fontFamily: 'Arial, sans-serif' }}>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contactpage" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} style={{ fontFamily: 'Arial, sans-serif' }}>
              Contact Us
            </NavLink>
          </li>
          <li className="nav-item">
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic" style={{ fontFamily: 'Arial, sans-serif' }}>
                Products
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ width: '300px', display: 'flex', flexDirection: 'column' }}>
                <Dropdown.Item href="#/action-1" style={{ fontFamily: 'Arial, sans-serif' }}>
                  Action
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2" style={{ fontFamily: 'Arial, sans-serif' }}>
                  Another action
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3" style={{ fontFamily: 'Arial, sans-serif' }}>
                  Something else
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{ fontFamily: 'Arial, sans-serif' }} />
            <NavLink to="/loginpage" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} style={{ fontFamily: 'Arial, sans-serif' }}>
              <button
                className="btn btn-orange"
                style={{
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  borderRadius: '0.5rem',
                  backgroundColor: '#d15e09',
                  padding: '0.625rem 1.25rem',
                  fontSize: '0.875rem',
                  fontWeight: 'bold',
                  color: 'white',
                  cursor: 'pointer',
                  fontFamily: 'Arial, sans-serif',
                }}
              >
                Login
              </button>
            </NavLink>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit" style={{ fontFamily: 'Arial, sans-serif' }}>
              Search <CiSearch />
            </button>
          </form>
        </ul>
      </div>
    </nav> 


        <Routes>
           <Route path="/homepage" element={<Homepage />} /> 
          <Route path="/aboutpage" element={<Aboutpage />} />
          <Route path="/contactpage" element={<Contactpage />} />
          <Route path="/loginpage" element={<Loginpage />} />
          <Route path="/findcollege" element={<Findcollege />} />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default Navbar;