import React from 'react';
import Header from "./Containers/Header/Header";
import {Navbar} from "./Components";
import About from './Containers/About/About';
// import Features from './Containers/Features/Features';
// import Coaching1 from './Containers/Coaching1/Coaching1';
import CoachingSessions from './Containers/CoachingSessions/CoachingSessions';
import './App.css';


function App() {
  return (
    <div className="App">
    <div className="gradient__bg">
    <Navbar />
   <Header />
   <div className="bg-color">
   <CoachingSessions/>

   <About />
  

</div>
  
    </div>
    </div>
  );
}

export default App;
