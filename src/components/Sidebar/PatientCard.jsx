const PatientCard = ({ patient }) => {
    return (
      <div className="bg-white p-3 my-2 rounded-md shadow">
        <h3 className="text-md font-bold">{patient.name}</h3>
        <p className="text-sm text-gray-600">Age: {patient.age}</p>
      </div>
    );
  };
  
  export default PatientCard;
  