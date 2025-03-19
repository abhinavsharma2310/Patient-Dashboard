import HeartRateIcon from "../assets/HeartBPM.png";
import RespiratoryIcon from "../assets/respiratory.png";
import TemperatureIcon from "../assets/temperature.png";

const VitalSigns = () => {
  const vitals = [
    {
      title: "Respiratory Rate",
      value: "20 bpm",
      status: "Normal",
      color: "bg-blue-100",
      icon: RespiratoryIcon,
    },
    {
      title: "Temperature",
      value: "98.6°F",
      status: "Normal",
      color: "bg-red-100",
      icon: TemperatureIcon,
    },
    {
      title: "Heart Rate",
      value: "78 bpm",
      status: "Lower than Average",
      color: "bg-red-100",
      statusColor: "text-blue-500",
      statusIcon: "▼",
      icon: HeartRateIcon,
    }
  ];
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8 p-4">
      {vitals.map((vital, index) => (
        <VitalCard key={index} {...vital} />
      ))}
    </div>
  );
};

const VitalCard = ({ title, value, status, color, statusColor, statusIcon, icon }) => {
  return (
    <div className={`${color} p-6 rounded-2xl shadow-lg flex flex-col items-center border border-gray-300`}> 
      <img src={icon} alt={title} className="w-16 h-16 mb-4" />
      <div className="text-xl font-semibold text-gray-700 mb-2">{title}</div>
      <div className="text-4xl font-bold text-gray-900 mb-2">{value}</div>
      <div className={`flex items-center text-sm font-medium ${statusColor || 'text-gray-600'}`}>
        {statusIcon && <span className="mr-2 text-lg">{statusIcon}</span>}
        <span>{status}</span>
      </div>
    </div>
  );
};

export default VitalSigns;