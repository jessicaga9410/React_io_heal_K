import React from "react";
import "./physicalHealing.css";
import img4 from "../../Assets/89.jpg";

function PhysicalHealing() {
  return (
    <>
    <h1>Physical Healing</h1>
    {/* <p>Temporarily Closed</p> */}
    <div className="inline-grid physical-healing-heading" id="physical-healing">
      <div>
        <div data-aos="zoom-in-up"></div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg cards-facial" id="card-healing">
          <img className="w-full" src={img4} alt="Display" />
          <div className="px-6 py-4">
            <div className="font-bold text-sky-900 text-xl mb-2">
              Facial Lymph Drainage 30 min
            </div>
            <p className="text-slate-900 text-base">
              <span>
                This is your body's waste management system; it clears away
                bacteria, cell debris, excess water, proteins, and wastes from
                the connective tissue and returns it to the bloodstream for
                ultimate removal by the kidneys. As the lymphatic system has a
                slow rhythm with the capillaries located just under the skin,
                using light pressure is recommended to effectively move lymph
                fluid
              </span>
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-4 py-3 text-sm font-semibold text-gray-700 mr-2" id="price-physical">
              $99
            </span>
            <button className="inline-block bg-gray-200 rounded-full px-3 py-3 text-sm font-semibold text-gray-700 mt-2 ml-20 button">
              Book with Me Here
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default PhysicalHealing;
