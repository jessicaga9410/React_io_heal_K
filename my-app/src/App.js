import React from 'react';
import Header from "./Containers/Header/Header";
import {Navbar} from "./Components";
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="gradient__bg">
    <Navbar />
   <Header />
    </div>
    </div>
  );
}

export default App;
