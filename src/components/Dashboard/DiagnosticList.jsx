import DiagnosticRow from "./DiagnosticRow";

const diagnoses = [
  { id: 1, name: "Flu", date: "2025-03-10" },
  { id: 2, name: "Allergy", date: "2025-03-08" }
];

const DiagnosticList = () => {
  return (
    <table className="w-full border">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2">Diagnosis</th>
          <th className="p-2">Date</th>
        </tr>
      </thead>
      <tbody>
        {diagnoses.map((diagnosis) => (
          <DiagnosticRow key={diagnosis.id} diagnosis={diagnosis} />
        ))}
      </tbody>
    </table>
  );
};

export default DiagnosticList;
