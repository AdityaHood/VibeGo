import React from "react";

const LocationSearchPanel = (props) => {
  const locations = [
    "24B, Near kapoor's cafe,India,Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    "22C, Near Malhotra's cafe,India,Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    "13F, Near Roy cafe,India,Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    "18A, Near Wrogn's cafe,India,Lorem ipsum dolor sit, amet consectetur adipisicing elit",
  ];

  return (
    <div>
      {locations.map(function (elem, idx) {
        return (
          <div
            key={idx}
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }}
            className="flex gap-4 border-2 p-3 border-gray-100 active:border-black rounded-xl items-center my-2 justify-start">
            <h2 className="bg-[#eee] h-8 flex items-center justify-center w-18 rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium text-sm">{elem}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
