
import React from "react";
import "./navb.css";
// import logo1 from "../../Assets/logo3.png";


function Navb() {
  return (
    <nav className="flex justify-center space-x-4" id="nav-header">
  <a href="/" className="font-bold px-3 py-2 text-slate-100 rounded-lg hover:text-slate-300">Home</a>
  <a href="/about" className="font-bold px-3 py-2 text-slate-100 rounded-lg hover:text-slate-300">About</a>
  <a href="/coachingsession" className="font-bold px-3 py-2 text-slate-100 rounded-lg hover:text-slate-300">Coaching</a>
  <a href="/physicalhealing" className="font-bold px-3 py-2 text-slate-100 rounded-lg hover:text-slate-300">Physical Healing</a>
  <a href="/contact" className="font-bold px-3 py-2 text-slate-100 rounded-lg hover:text-slate-300">Contact</a>
</nav>
  )
}

export default Navb