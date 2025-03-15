const DiagnosticRow = ({ diagnosis }) => {
    return (
      <tr className="border">
        <td className="p-2">{diagnosis.name}</td>
        <td className="p-2">{diagnosis.date}</td>
      </tr>
    );
  };
  
  export default DiagnosticRow;
  