import React from 'react'
import Footer from '../HomeComponents/Footer'
import Slider from '../HomeComponents/Slider'
import Counter from '../HomeComponents/Counter'
import Appointment from '../HomeComponents/Appointment'
import Department from '../HomeComponents/Department'
import Gallery from '../HomeComponents/Gallery'
import Contact from '../HomeComponents/Contact'
import HomeNavbar from '../HomeComponents/HomeNavbar';
import { Link } from "react-router-dom";

function Home() {
  const myComponent = {
    width: '100%',
  
    overflow: 'scroll'
};


  return (
    <div style={{ height: '200px' }}>
    <div style={myComponent}>
      <HomeNavbar/>
      <Slider/>
      <Counter/>
     <Appointment/>
     <Department/>
     <Gallery/>
     <Contact>
      <Link to="contact"/>
     </Contact>
     <Footer /> 
    </div>
    </div>
  )
}

export default Home