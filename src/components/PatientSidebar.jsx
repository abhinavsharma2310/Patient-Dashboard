import PatientCard from "./PatientCard";
import Searchbar from "../assets/Searchbar.png";
const PatientSidebar = ({ activePatient, setActivePatient }) => {
  const patients = [
    { name: "Emily Williams", gender: "Female", age: 18 },
    { name: "Ryan Johnson", gender: "Male", age: 45 },
    { name: "Brandon Mitchell", gender: "Male", age: 35 },
    { name: "Jessica Taylor", gender: "Female", age: 28 },
    { name: "Samantha Johnson", gender: "Female", age: 56 },
    { name: "Ashley Martinez", gender: "Female", age: 54 },
    { name: "Olivia Brown", gender: "Female", age: 32 },
    { name: "Tyler Davis", gender: "Male", age: 19 },
    { name: "Kevin Anderson", gender: "Male", age: 53 },
    { name: "Dylan Thompson", gender: "Male", age: 36 },
    { name: "Nathan Evans", gender: "Male", age: 58 },
    { name: "Mike Nolan", gender: "Male", age: 31 },
  ];

  return (
    <div className="w-64 bg-white  mt-4 border rounded-lg">
    <div className="p-4 border-b flex justify-between items-center">
      <h2 className="text-xl font-bold text-gray-800">Patients</h2>
      {/* Search Icon */}
      <img src={Searchbar} alt="Search" className="w-5 h-5 cursor-pointer" />
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

export default PatientSidebar;
