const DayForecast = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  return (
    <div className="bg-card1 bg-opacity-10 rounded-2xl p-4">
      <h2 className="text-lg font-semibold mb-4">Day forecast</h2>
      <div className="relative">
        <div className="flex justify-between mb-2">
          <span>10°</span>
          <span>3°</span>
          <span>0°</span>
          <span>-10°</span>
        </div>
        <div className="h-24 relative">
          {/* Here you would implement the actual graph */}
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-1 bg-white bg-opacity-50 rounded-full"></div>
          </div>
        </div>
        <div className="flex justify-between mt-2">
          {days.map(day => (
            <span key={day} className="text-sm">{day}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DayForecast;