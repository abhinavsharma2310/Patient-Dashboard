import React, { useState } from 'react';
// Import your existing assets/icons here

// Main Dashboard Component
const MedicalDashboard = () => {
  const [activePatient, setActivePatient] = useState('Jessica Taylor');
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <div className="flex flex-1">
        {/* Patient Sidebar */}
        <PatientSidebar activePatient={activePatient} setActivePatient={setActivePatient} />
        
        {/* Main Dashboard Area */}
        <div className="flex-1 p-6">
          <DiagnosisHistory />
          <VitalSigns />
          <DiagnosticList />
        </div>
        
        {/* Patient Details Sidebar */}
        <PatientDetailsSidebar />
      </div>
    </div>
  );
};

// Header Component
const Header = () => {
  return (
    <header className="bg-white shadow-sm p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center mr-8">
            {/* Use your Tech.Care logo */}
            <span className="ml-2 text-2xl font-bold text-gray-800">Tech.Care</span>
          </div>
          
          <nav className="flex space-x-4">
            <a href="#" className="flex items-center px-3 py-2 rounded-full text-gray-700">
              <span className="mr-2">{/* Overview Icon */}</span>
              <span>Overview</span>
            </a>
            <a href="#" className="flex items-center px-3 py-2 rounded-full bg-cyan-400 text-white">
              <span className="mr-2">{/* Patients Icon */}</span>
              <span>Patients</span>
            </a>
            <a href="#" className="flex items-center px-3 py-2 rounded-full text-gray-700">
              <span className="mr-2">{/* Schedule Icon */}</span>
              <span>Schedule</span>
            </a>
            <a href="#" className="flex items-center px-3 py-2 rounded-full text-gray-700">
              <span className="mr-2">{/* Message Icon */}</span>
              <span>Message</span>
            </a>
            <a href="#" className="flex items-center px-3 py-2 rounded-full text-gray-700">
              <span className="mr-2">{/* Transactions Icon */}</span>
              <span>Transactions</span>
            </a>
          </nav>
        </div>
        
        <div className="flex items-center">
          <div className="flex items-center">
            <img src="/api/placeholder/40/40" alt="Dr. Jose Simmons" className="w-10 h-10 rounded-full" />
            <div className="ml-2">
              <div className="text-sm font-medium text-gray-800">Dr. Jose Simmons</div>
              <div className="text-xs text-gray-500">General Practitioner</div>
            </div>
          </div>
          <button className="ml-2 text-gray-500">
            {/* Settings Icon */}
          </button>
          <button className="ml-2 text-gray-500">
            {/* Menu Icon */}
          </button>
        </div>
      </div>
    </header>
  );
};

// Patient Sidebar Component
const PatientSidebar = ({ activePatient, setActivePatient }) => {
  const patients = [
    { name: 'Emily Williams', gender: 'Female', age: 18 },
    { name: 'Ryan Johnson', gender: 'Male', age: 45 },
    { name: 'Brandon Mitchell', gender: 'Male', age: 35 },
    { name: 'Jessica Taylor', gender: 'Female', age: 28 },
    { name: 'Samantha Johnson', gender: 'Female', age: 56 },
    { name: 'Ashley Martinez', gender: 'Female', age: 54 },
    { name: 'Olivia Brown', gender: 'Female', age: 32 },
    { name: 'Tyler Davis', gender: 'Male', age: 19 },
    { name: 'Kevin Anderson', gender: 'Male', age: 53 },
    { name: 'Dylan Thompson', gender: 'Male', age: 36 },
    { name: 'Nathan Evans', gender: 'Male', age: 58 },
    { name: 'Mike Nolan', gender: 'Male', age: 31 },
  ];

  return (
    <div className="w-64 bg-white shadow-md">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold text-gray-800">Patients</h2>
        <div className="mt-2 relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-8 pr-3 py-2 border rounded-md"
          />
          <div className="absolute left-2 top-3 text-gray-400">
            {/* Search Icon */}
          </div>
        </div>
      </div>
      <div className="overflow-y-auto h-full">
        {patients.map((patient) => (
          <PatientCard
            key={patient.name}
            patient={patient}
            active={patient.name === activePatient}
            onClick={() => setActivePatient(patient.name)}
          />
        ))}
      </div>
    </div>
  );
};

// Patient Card Component
const PatientCard = ({ patient, active, onClick }) => {
  return (
    <div
      className={`flex items-center p-4 border-b cursor-pointer ${active ? 'bg-cyan-50' : ''}`}
      onClick={onClick}
    >
      <img src="/api/placeholder/40/40" alt={patient.name} className="w-10 h-10 rounded-full" />
      <div className="ml-3 flex-1">
        <div className="font-medium text-gray-800">{patient.name}</div>
        <div className="text-xs text-gray-500">{`${patient.gender}, ${patient.age}`}</div>
      </div>
      <button className="text-gray-500">
        {/* More Icon */}
      </button>
    </div>
  );
};

// Diagnosis History Component
const DiagnosisHistory = () => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Diagnosis History</h2>
      <BloodPressureChart />
    </div>
  );
};

// Blood Pressure Chart Component
const BloodPressureChart = () => {
  const months = ['Oct. 2023', 'Nov. 2023', 'Dec. 2023', 'Jan. 2024', 'Feb. 2024', 'Mar. 2024'];
  
  // In a real app, you would use a charting library like recharts, chart.js, etc.
  // Here we're just creating a placeholder for the chart
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Blood Pressure</h3>
        <select className="border rounded-md px-3 py-1 text-sm">
          <option>Last 6 months</option>
          <option>Last year</option>
          <option>All time</option>
        </select>
      </div>
      
      <div className="flex">
        <div className="w-2/3">
          <div className="h-40 bg-gray-50 rounded-md border">
            {/* This would be replaced with actual chart component */}
            {/* For example: <LineChart data={bloodPressureData} /> */}
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            {months.map(month => (
              <span key={month}>{month}</span>
            ))}
          </div>
        </div>
        
        <div className="w-1/3 pl-4">
          <div className="mb-4">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-pink-500 mr-2"></div>
              <span className="text-sm">Systolic</span>
            </div>
            <div className="text-2xl font-bold mt-1">160</div>
            <div className="flex items-center text-xs text-red-500">
              <span className="mr-1">▲</span>
              <span>Higher than Average</span>
            </div>
          </div>
          
          <div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
              <span className="text-sm">Diastolic</span>
            </div>
            <div className="text-2xl font-bold mt-1">78</div>
            <div className="flex items-center text-xs text-blue-500">
              <span className="mr-1">▼</span>
              <span>Lower than Average</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Vital Signs Component
const VitalSigns = () => {
  const vitals = [
    {
      title: "Respiratory Rate",
      value: "20 bpm",
      status: "Normal",
      color: "bg-blue-100",
    },
    {
      title: "Temperature",
      value: "98.6°F",
      status: "Normal",
      color: "bg-red-100",
    },
    {
      title: "Heart Rate",
      value: "78 bpm",
      status: "Lower than Average",
      color: "bg-red-100",
      statusColor: "text-blue-500",
      statusIcon: "▼",
    }
  ];
  
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      {vitals.map((vital, index) => (
        <VitalCard key={index} {...vital} />
      ))}
    </div>
  );
};

// Vital Card Component
const VitalCard = ({ title, value, status, color, statusColor, statusIcon }) => {
  return (
    <div className={`${color} p-4 rounded-lg`}>
      <div className="flex items-center mb-3">
        <div className="text-gray-800">
          {/* Icon based on title */}
        </div>
        <div className="ml-2 text-sm font-medium text-gray-700">{title}</div>
      </div>
      <div className="text-2xl font-bold text-gray-800 mb-1">{value}</div>
      <div className={`flex items-center text-xs ${statusColor || 'text-gray-600'}`}>
        {statusIcon && <span className="mr-1">{statusIcon}</span>}
        <span>{status}</span>
      </div>
    </div>
  );
};

// Diagnostic List Component
const DiagnosticList = () => {
  const diagnostics = [
    {
      diagnosis: "Hypertension",
      description: "Chronic high blood pressure",
      status: "Under Observation",
      statusColor: "bg-yellow-100 text-yellow-800"
    },
    {
      diagnosis: "Type 2 Diabetes",
      description: "Insulin resistance and elevated blood sugar",
      status: "Cured",
      statusColor: "bg-green-100 text-green-800"
    },
    {
      diagnosis: "Asthma",
      description: "Recurrent episodes of bronchial constriction",
      status: "Inactive",
      statusColor: "bg-gray-100 text-gray-800"
    }
  ];
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Diagnostic List</h2>
      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-600 text-sm">
            <th className="pb-2">Problem/Diagnosis</th>
            <th className="pb-2">Description</th>
            <th className="pb-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {diagnostics.map((item, index) => (
            <DiagnosticRow key={index} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Diagnostic Row Component
const DiagnosticRow = ({ diagnosis, description, status, statusColor }) => {
  return (
    <tr className="border-t">
      <td className="py-4 pr-4">
        <div className="font-medium text-gray-800">{diagnosis}</div>
      </td>
      <td className="py-4 pr-4 text-sm text-gray-600">{description}</td>
      <td className="py-4">
        <span className={`inline-block px-2 py-1 rounded-md text-xs ${statusColor}`}>
          {status}
        </span>
      </td>
    </tr>
  );
};


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
      <div className="w-64 bg-white shadow-md p-4"> 
        <div className="flex flex-col items-center mb-6"> 
          <img src="/api/placeholder/100/100" alt="Jessica Taylor" className="w-24 h-24 rounded-full mb-3" /> 
          <h2 className="text-xl font-bold text-gray-800">Jessica Taylor</h2> 
        </div> 
        
        <div className="space-y-4"> 
          {patientDetails.map((detail, index) => ( 
            <PatientDetailItem 
              key={index} 
              label={detail.label} 
              value={detail.value} 
            /> 
          ))} 
        </div> 
        
        <button className="mt-6 w-full bg-cyan-500 text-white py-2 px-4 rounded-full text-sm"> 
          Show All Information 
        </button> 
        
        <div className="mt-8"> 
          <h3 className="text-lg font-bold text-gray-800 mb-4">Lab Results</h3> 
          <div className="space-y-3"> 
            {labResults.map((label, index) => ( 
              <LabResultItem key={index} label={label} />
            ))}
          </div> 
        </div>
      </div> 
    ); 
  };
  
  // Patient Detail Item Component
  const PatientDetailItem = ({ label, value }) => {
    // Map of icons based on label
    const getIcon = (label) => {
      // In a real implementation, you would import and use your actual icon components
      switch(label) {
        case "Date Of Birth":
          return <CalendarIcon />;
        case "Gender":
          return <GenderIcon />;
        case "Contact Info":
          return <PhoneIcon />;
        case "Emergency Contacts":
          return <EmergencyIcon />;
        case "Insurance Provider":
          return <InsuranceIcon />;
        default:
          return null;
      }
    };
  
    return (
      <div className="flex items-start">
        <div className="text-gray-500 mt-1 mr-3">
          {getIcon(label)}
        </div>
        <div>
          <div className="text-xs text-gray-500">{label}</div>
          <div className="text-sm font-medium text-gray-800">{value}</div>
        </div>
      </div>
    );
  };
  
  // Lab Result Item Component
  const LabResultItem = ({ label }) => {
    return (
      <div className="flex items-center justify-between  p-2 rounded-md">
        <span className="text-sm text-gray-700">{label}</span>
        <button className="text-gray-500">
          <DownloadIcon />
        </button>
      </div>
    );
  };
  
  // Placeholder Icon Components
  // In a real implementation, you would import these from your asset library
  const CalendarIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  
  const GenderIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="8" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 14V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 18H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  
  const PhoneIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  
  const EmergencyIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 8v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  
  const InsuranceIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 10v6M2 10v6M12 2v6M12 18v6M20 10h-4a2 2 0 00-2 2v2a2 2 0 002 2h4M4 16h4a2 2 0 002-2v-2a2 2 0 00-2-2H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  
  const DownloadIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  
  // Export the main component
  export default MedicalDashboard;