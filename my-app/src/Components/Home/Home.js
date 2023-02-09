import React from 'react';
import Header from '../../Containers/Header/Header';
import CoachingSession from '../../Components/CoachingSession/CoachingSession';
import PhysicalHealing from '../../Components/PhysicalHealing/PhysicalHealing';
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
      <CoachingSession />
      <PhysicalHealing />
      <Contact />
    
  
    </>
  )
}


export default Home