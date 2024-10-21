const SunriseSunset = ({ type, time, ago }) => {
  return (
    <div className="bg-card1 bg-opacity-10 rounded-2xl p-4 w-[48%]">
      <div className="flex items-center mb-2">
        <img src={`/icons/${type}.svg`} alt={type} className="w-6 h-6 mr-2" />
        <span className="capitalize">{type}</span>
      </div>
      <div className="text-lg font-semibold">{time}</div>
      <div className="text-sm opacity-70">{ago}</div>
    </div>
  );
};

export default SunriseSunset;