// const BloodPressureChart = () => {
//     const months = ['Oct. 2023', 'Nov. 2023', 'Dec. 2023', 'Jan. 2024', 'Feb. 2024', 'Mar. 2024'];
    
//     // In a real app, you would use a charting library like recharts, chart.js, etc.
//     // Here we're just creating a placeholder for the chart
    
//     return (
//       <div className="bg-white p-4 rounded-lg shadow-sm">
//         <div className="flex items-center justify-between mb-4">
//           <h3 className="text-lg font-semibold text-gray-800">Blood Pressure</h3>
//           <select className="border rounded-md px-3 py-1 text-sm">
//             <option>Last 6 months</option>
//             <option>Last year</option>
//             <option>All time</option>
//           </select>
//         </div>
        
//         <div className="flex">
//           <div className="w-2/3">
//             <div className="h-40 bg-gray-50 rounded-md border">
//               {/* This would be replaced with actual chart component */}
//               {/* For example: <LineChart data={bloodPressureData} /> */}
//             </div>
//             <div className="flex justify-between mt-2 text-xs text-gray-500">
//               {months.map(month => (
//                 <span key={month}>{month}</span>
//               ))}
//             </div>
//           </div>
          
//           <div className="w-1/3 pl-4">
//             <div className="mb-4">
//               <div className="flex items-center">
//                 <div className="w-3 h-3 rounded-full bg-pink-500 mr-2"></div>
//                 <span className="text-sm">Systolic</span>
//               </div>
//               <div className="text-2xl font-bold mt-1">160</div>
//               <div className="flex items-center text-xs text-red-500">
//                 <span className="mr-1">▲</span>
//                 <span>Higher than Average</span>
//               </div>
//             </div>
            
//             <div>
//               <div className="flex items-center">
//                 <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
//                 <span className="text-sm">Diastolic</span>
//               </div>
//               <div className="text-2xl font-bold mt-1">78</div>
//               <div className="flex items-center text-xs text-blue-500">
//                 <span className="mr-1">▼</span>
//                 <span>Lower than Average</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default BloodPressureChart; 

























import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const BloodPressureChart = () => {
    const data = [
      { month: 'Oct, 2023', systolic: 120, diastolic: 110 },
      { month: 'Nov, 2023', systolic: 118, diastolic: 65 },
      { month: 'Dec, 2023', systolic: 162, diastolic: 110 },
      { month: 'Jan, 2024', systolic: 112, diastolic: 92 },
      { month: 'Feb, 2024', systolic: 148, diastolic: 72 },
      { month: 'Mar, 2024', systolic: 158, diastolic: 78 },
    ];
  
    const currentSystolic = 160;
    const currentDiastolic = 78;
  
    return (
      <div className="w-full p-4 bg-gray-50 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Blood Pressure</h2>
          <div className="relative">
            <button className="flex items-center text-gray-600 border border-gray-300 rounded-md px-3 py-1">
              Last 6 months 
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[40, 180]} />
                <Tooltip />
                <Line type="monotone" dataKey="systolic" stroke="#ec4899" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="diastolic" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="md:w-1/3 ml-4 mt-4 md:mt-0">
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <div className="w-4 h-4 rounded-full bg-pink-500 mr-2"></div>
                <span className="text-lg text-gray-600">Systolic</span>
              </div>
              <div className="flex items-center">
                <span className="text-4xl font-bold text-gray-800">{currentSystolic}</span>
                <div className="ml-2 flex items-center text-gray-600">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                  </svg>
                  <span className="ml-1">Higher than Average</span>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-4">
              <div className="flex items-center mb-2">
                <div className="w-4 h-4 rounded-full bg-purple-500 mr-2"></div>
                <span className="text-lg text-gray-600">Diastolic</span>
              </div>
              <div className="flex items-center">
                <span className="text-4xl font-bold text-gray-800">{currentDiastolic}</span>
                <div className="ml-2 flex items-center text-gray-600">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="ml-1">Lower than Average</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default BloodPressureChart;