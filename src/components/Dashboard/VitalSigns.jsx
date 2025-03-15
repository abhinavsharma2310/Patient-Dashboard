
const VitalSigns = () => {
    const vitals = [
      {
        title: "Respiratory Rate",
        value: "20 bpm",
        status: "Normal",
        color: "bg-blue-100",
      },
      {
        title: "Temperature",
        value: "98.6°F",
        status: "Normal",
        color: "bg-red-100",
      },
      {
        title: "Heart Rate",
        value: "78 bpm",
        status: "Lower than Average",
        color: "bg-red-100",
        statusColor: "text-blue-500",
        statusIcon: "▼",
      }
    ];
    
    return (
      <div className="grid grid-cols-3 gap-4 mb-6">
        {vitals.map((vital, index) => (
          <VitalCard key={index} {...vital} />
        ))}
      </div>
    );
  };