import DiagnosticList from "./DiagnosticList";

const DiagnosisHistory = () => {
  return (
    <section className="p-4 bg-white rounded-md shadow">
      <h2 className="text-lg font-semibold mb-2">Diagnosis History</h2>
      <DiagnosticList />
    </section>
  );
};

export default DiagnosisHistory;
