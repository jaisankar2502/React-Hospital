import React from 'react'
//css
import './doctor.css'


const DoctorNav = () => {
  return (
    <nav className="main-header navbar navbar-expand navbar-dark">
    <ul className="navbar-nav">
        <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="#" role="button">
                <i className="fas fa-bars"></i>
            </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
            <a className="nav-link">Home</a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
            <a href="#" className="nav-link">
                Contact
            </a>
        </li>
        <li>
            <div className="input-group">
                <div className="form-outline">
                    <input type="search" className="form-control" placeholder="Search" />
                </div>
            </div>
        </li>
    </ul>
</nav>
  )
}

export default DoctorNav
