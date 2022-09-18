import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Containers/Header/Header";
import Navb from "./Components/Navb/Navb";
import About from "./Containers/About/About";
import CoachingSessions from "./Containers/CoachingSessions/CoachingSessions";
import PhysicalHealing from "./Containers/PhysicalHealing/PhysicalHealing";
import Footer from "./Components/Footer/Footer";
import Contact from "./Containers/Contact/Contact";
import Home from './Components/Home/Home'; 
import "./App.css";
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navb />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/CoachingSessions" component={CoachingSessions} />
          <Route path="/PyshicalHealing" component={PhysicalHealing} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
        </Switch>
        <Header />

        <div className="bg-color">
          <About />

          <CoachingSessions />

          <PhysicalHealing />

          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
