import React from 'react'
import './physicalHealing.css';
import img4 from '../../Assets/p12.jpg';
import img5 from '../../Assets/p010.png';
function PhysicalHealing() {
  return (
    
    <div className="inline-grid gpt3__whatgpt3-Physical_Healing">
    <h1 className="gradient__text">Physical Healing</h1>
    {/* <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"> */}
     <div data-aos="zoom-in-up">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img className="w-full" src={img4} alt="Display" />
    <div className="px-6 py-4">
      <div className="font-bold text-sky-900 text-xl mb-2">
      Manual Lymph Drainage
      </div>
      <p className="text-slate-900 text-base">
       <span>This is your body's waste management system; it clears away bacteria, cell debris, 
       excess water, proteins, and wastes from the connective tissue and returns it to the bloodstream 
       for ultimate removal by the kidneys. As the lymphatic system has a slow rhythm with the capillaries
        located just under the skin, using light pressure is recommended to effectively move lymph fluid</span>
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
   <img className="w-full" src={img5} alt="Display" />
    <div className="px-6 py-4">
      <div className="font-bold text-sky-900 text-xl mb-2">
      Reflexology
      </div>
      <p className="text-slate-900 text-base">
       <span> Reflexology can be used to address mental issues as well as physical, including digestive, circulatory and other problems.
            Reflexology is gentle manipulation or pressing on certain parts of the foot to produce an effect elsewhere in the body.
            It is based on a pseudoscientific system of zones and reflex areas that purportedly reflect an image of the body on the feet and hands, 
            with the premise that such work on the feet and hands causes a physical change to related areas of the body</span>
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



export default PhysicalHealing