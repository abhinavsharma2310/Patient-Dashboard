  // Patient Detail Item Component
  const PatientDetailItem = ({ label, value }) => {
    // Map of icons based on label
    const getIcon = (label) => {
      // In a real implementation, you would import and use your actual icon components
      switch(label) {
        case "Date Of Birth":
          return <CalendarIcon />;
        case "Gender":
          return <GenderIcon />;
        case "Contact Info":
          return <PhoneIcon />;
        case "Emergency Contacts":
          return <EmergencyIcon />;
        case "Insurance Provider":
          return <InsuranceIcon />;
        default:
          return null;
      }
    };
  
    return (
      <div className="flex items-start">
        <div className="text-gray-500 mt-1 mr-3">
          {getIcon(label)}
        </div>
        <div>
          <div className="text-xs text-gray-500">{label}</div>
          <div className="text-sm font-medium text-gray-800">{value}</div>
        </div>
      </div>
    );
  };
  export default PatientDetailItem
  const CalendarIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  
const GenderIcon = () => <svg>...</svg>;
const PhoneIcon = () => <svg>...</svg>;
const EmergencyIcon = () => <svg>...</svg>;
const InsuranceIcon = () => <svg>...</svg>;
const DownloadIcon = () => <svg>...</svg>;