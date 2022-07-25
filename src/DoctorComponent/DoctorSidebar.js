import React from 'react'

//css
import './doctor.css'
// image
 import userImg from  '../assets/user2-160x160.jpg';


const DoctorSidebar = () => {



  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
    <a className="brand-link">
        <img src={userImg} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" />
        <span className="brand-text font-weight-light">Doctor</span>
    </a>

    <div className="sidebar">


        <div className="form-inline mt-3">
            <div className="input-group" data-widget="sidebar-search">
                <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                <div className="input-group-append">
                    <button className="btn btn-sidebar">
                        <i className="fas fa-search fa-fw"></i>
                    </button>
                </div>
            </div>
        </div>

        <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li className="nav-header">Action</li>
                <li className="nav-item">
                    <a className="nav-link">
                    <i class="   nav-icon fas fa-magnifying-glass"></i>
                        <p>View Patient</p>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">
                        <i className="nav-icon fas  "></i>
                        <i class=""></i>
                        <p>Apply Leave</p>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">
                        <i className="nav-icon fas fa-calendar-alt"></i>
                        <p>Leave Status</p>
                    </a>
                </li>
            </ul>
        </nav>
    </div>  
</aside>
  )
}

export default DoctorSidebar
