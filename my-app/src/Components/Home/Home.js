import React from 'react';
import Header from '../../Containers/Header/Header';
import CoachingSessions from '../../Containers/CoachingSessions/CoachingSessions';
import PhysicalHealing from '../../Containers/PhysicalHealing/PhysicalHealing';
import About from '../../Containers/About/About';
import Contact from '../../Containers/Contact/Contact';

// import image1 from '../../assets/p3.jpg';
import './home.css';
 function Home()
{
  return (
    <>
      <Header  />
      <About /> 
      <CoachingSessions />
      <PhysicalHealing />
      <div className="contactMe">
      <Contact />
    
      </div>
 
    </>
  )
}


export default Home