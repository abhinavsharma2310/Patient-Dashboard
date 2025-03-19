import React from "react";
import Jessica from '../assets/Jessica.png';
import PatientDetailItem from "./PatientDetailItem";

const PatientDetailsSidebar = () => {
  const patientDetails = [
    { label: "Date Of Birth", value: "August 24, 1996" },
    { label: "Gender", value: "Female" },
    { label: "Contact Info", value: "(415) 555-1234" },
    { label: "Emergency Contacts", value: "(415) 555-5678" },
    { label: "Insurance Provider", value: "Sunrise Health Assurance" }
  ];

  const labResults = ["Blood Tests", "CT Scans", "Radiology Reports", "X-Rays"];

  return (
    <div className="w-full max-w-[300px] bg-white shadow-lg rounded-lg p-4 border border-gray-200">
      {/* Patient Info */}
      <div className="flex flex-col items-center mb-6">
        <img src={Jessica} alt="Jessica Taylor" className="w-24 h-24 rounded-full mb-3 shadow-md" />
        <h2 className="text-lg font-semibold text-gray-800">Jessica Taylor</h2>
      </div>

      {/* Patient Details Box */}
      <div className="space-y-4"> 
          {patientDetails.map((detail, index) => ( 
            <PatientDetailItem 
              key={index} 
              label={detail.label} 
              value={detail.value} 
            /> 
          ))} 
        </div> 



      {/* Button */}
      <button className="mt-6 w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded-full text-sm transition-all">
        Show All Information
      </button>

      {/* Lab Results Box */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
        <h3 className="text-md font-bold text-gray-700 mb-3">Lab Results</h3>
        <div className="space-y-3">
          {labResults.map((label, index) => (
            <LabResultItem key={index} label={label} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Lab Result Item Component
const LabResultItem = ({ label }) => {
  return (
    <div className="flex items-center justify-between bg-white p-2 rounded-md shadow-sm border border-gray-300">
      <span className="text-sm text-gray-700">{label}</span>
      <button className="text-gray-500 hover:text-gray-700 transition">
        <DownloadIcon />
      </button>
    </div>
  );
};

/* Icons */
const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3V15M12 15L16 11M12 15L8 11M5 19H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default PatientDetailsSidebar;
