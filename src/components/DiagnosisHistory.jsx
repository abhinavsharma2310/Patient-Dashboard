import BloodPressureChart from "./BloodPressureChart";

const DiagnosisHistory = () => {
    return (
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Diagnosis History</h2>
        <BloodPressureChart />
      </div>
    );
  };

 export default DiagnosisHistory;