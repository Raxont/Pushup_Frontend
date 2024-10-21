const WeatherInfo = ({ icon, label, value, change }) => {
  return (
    <div className="bg-card1 rounded-2xl p-3">
      <div className="flex items-center mb-2">
        <img src={`/icons/${icon}.png`} alt={icon} className="w-6 h-6" />
        <span className="ml-2 text-sm opacity-70">{label}</span>
      </div>
      <div className="text-lg font-semibold">{value}</div>
      <div className="text-xs opacity-70">{change}</div>
    </div>
  );
};

export default WeatherInfo;