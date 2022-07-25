import React from 'react'
import Footer from '../DoctorComponent/DoctorFooter'
import Navbar from '../DoctorComponent/DoctorNav'
import SideBar from '../DoctorComponent/DoctorSidebar' 
import Table from '../DoctorComponent/DoctorTable'
const DoctorPage = () => {
  return (
    <div className="wrapper">
            <Navbar />
            <SideBar />
            <Table />
          <aside className="control-sidebar control-sidebar-dark" />
        <Footer/>
      
    </div>
  )
}

export default DoctorPage
