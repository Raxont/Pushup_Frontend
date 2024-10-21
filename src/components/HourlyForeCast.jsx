const hourlyData = [
  { time: 'Now', temp: 10, icon: 'sunny' },
  { time: '10AM', temp: 8, icon: 'cloudy' },
  { time: '11AM', temp: 5, icon: 'cloudy' },
  { time: '12PM', temp: 12, icon: 'sunny' },
  { time: '1PM', temp: 9, icon: 'sunny' },
  { time: '2PM', temp: 12, icon: 'cloudy' },
];

const HourlyForecast = () => {
  return (
    <div className="flex justify-between">
      {hourlyData.map((hour, index) => (
        <div key={index} className="text-center">
          <div className="text-sm">{hour.time}</div>
          <img src={`/icons/${hour.icon}.svg`} alt={hour.icon} className="w-6 h-6 mx-auto" />
          <div className="text-lg font-semibold">{hour.temp}°</div>
        </div>
      ))}
    </div>
  );
};

export default HourlyForecast;