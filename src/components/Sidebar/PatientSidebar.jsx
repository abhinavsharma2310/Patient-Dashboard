import PatientCard from "./PatientCard";

const PatientSidebar = () => {
  const patients = [
    { id: 1, name: "John Smith", age: 34 },
    { id: 2, name: "Jane Doe", age: 29 }
  ];

  return (
    <aside className="w-1/4 bg-gray-100 p-4">
      <h2 className="text-lg font-semibold">Patients</h2>
      {patients.map((patient) => (
        <PatientCard key={patient.id} patient={patient} />
      ))}
    </aside>
  );
};

export default PatientSidebar;
