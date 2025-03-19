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
  
  export default  DiagnosticList; 
  