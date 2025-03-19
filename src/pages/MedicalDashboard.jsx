import React, { useState } from "react";
import Header from "../components/Header";
import PatientSidebar from "../components/PatientSidebar";
import PatientDetailsSidebar from "../components/PatientDetailsSidebar";
import DiagnosisHistory from "../components/DiagnosisHistory";
import VitalSigns from "../components/VitalSigns";
import DiagnosticList from "../components/DiagnosticList";

const MedicalDashboard = () => {
  const [activePatient, setActivePatient] = useState("Jessica Taylor");

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <div className="flex flex-1 flex-wrap">
        {/* Left Sidebar */}
        <div className="w-64 min-w-[250px] hidden lg:block">
          <PatientSidebar
            activePatient={activePatient}
            setActivePatient={setActivePatient}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 min-w-[300px]">
          <DiagnosisHistory />
          <VitalSigns />
          <DiagnosticList />
        </div>

        {/* Right Sidebar */}
        <div className="w-60 min-w-[280px] max-w-[320px] bg-white shadow-md hidden lg:block">
  <PatientDetailsSidebar />
</div>

      </div>

      {/* Mobile Responsive Sidebar (Moves Below Main Content) */}
      <div className="lg:hidden w-full bg-white shadow-md">
        <PatientDetailsSidebar />
      </div>
    </div>
  );
};

export default MedicalDashboard;
