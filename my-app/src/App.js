import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navb from "./Components/Navb/Navb";
import About from "./Containers/About/About";
import CoachingSessions from "./Containers/CoachingSessions/CoachingSessions";
import PhysicalHealing from "./Containers/PhysicalHealing/PhysicalHealing";
import Footer from "./Components/Footer/Footer";
import Contact from "./Containers/Contact/Contact";
import Home from "./Components/Home/Home";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ErrorPage from "./Components/ErrrorPage/ErrorPage";
function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Router>
          <Navb />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/coachingsessions" component={CoachingSessions} />
            <Route path="/physicalhealing" component={PhysicalHealing} />

            <Route path="/contact" component={Contact} />
            <Route path="*" component={ErrorPage} />{" "}
          </Switch>
        </Router>

        <Footer />
      </div>
    </div>
  );
}

export default App;
