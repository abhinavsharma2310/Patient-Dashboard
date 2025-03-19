import { useEffect, useState } from "react";
import axios from "axios";
import MedicalDashboard from "./pages/MedicalDashboard"; 

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("Fetching data..."); // ✅ Check if useEffect is running

    const username = "coalition";
    const password = "skills-test";
    const auth = btoa(`${username}:${password}`);

    axios
      .get("https://fedskillstest.coalitiontechnologies.workers.dev", {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      })
      .then((response) => {
        console.log("Fetched API Data:", response.data); // ✅ See the API data
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>API Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre> {/* ✅ Display API Data */}
      <MedicalDashboard data={data} />
    </div>
  );
}

export default App;
