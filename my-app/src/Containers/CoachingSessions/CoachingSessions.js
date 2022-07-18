import React from 'react';
import './coachingsessions.css';
import img2 from '../../Assets/h1.jpg';
import img3 from '../../Assets/h3.jpg';

function CoachingSessions() {
  return (

    <div className="inline-grid gpt3__whatgpt3-heading">
    <h1 className="gradient__text">Coaching Sessions</h1>
    {/* <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"> */}
     <div data-aos="zoom-in-up">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img className="w-full" src={img2} alt="Display" />
    <div className="px-6 py-4">
      <div className="font-bold text-sky-900 text-xl mb-2">
   Single Coaching Session
      </div>
      <p className="text-slate-900 text-base">
       <span> Book your single 60 min coaching session </span>
      </p>
    </div>
    <div className="px-6 py-4">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">$150</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Single</span>
      <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2 ml-20">Book with Me Here</button>
    </div>
  </div>
</div>
 

 <div data-aos="zoom-in-up">
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
   <img className="w-full" src={img3} alt="Display" />
    <div className="px-6 py-4">
      <div className="font-bold text-sky-900 text-xl mb-2">
   Coaching Session 6 weeks
      </div>
      <p className="text-slate-900 text-base">
       <span>Book your 60 min session for 6 weeks</span>
      </p>
    </div>
    <div className="px-6 py-4">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">$750</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">6 Week Program</span>
      <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2 ml-20">Book with Me Here</button>
    </div>
  </div>
  </div>
  </div>
);
}

export default CoachingSessions