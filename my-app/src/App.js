import React from 'react';
import Header from "./Containers/Header/Header";
import {Navbar} from "./Components";
import About from './Containers/About/About';
import CoachingSessions from './Containers/CoachingSessions/CoachingSessions';
import PhysicalHealing from './Containers/PhysicalHealing/PhysicalHealing';
import './App.css';


function App() {
  return (
    <div className="App">
    <div className="gradient__bg">
    <Navbar />
   <Header />
   <div className="bg-color">
   <CoachingSessions />
   <PhysicalHealing />
   <About />
  

</div>
  
    </div>
    </div>
  );
}

export default App;
