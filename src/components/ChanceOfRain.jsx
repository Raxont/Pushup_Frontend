const ChanceOfRain = () => {
  const rainData = [
    { time: '7 PM', chance: 27 },
    { time: '8 PM', chance: 44 },
    { time: '9 PM', chance: 56 },
    { time: '10 PM', chance: 88 },
  ];

  return (
    <div className="mt-6 bg-card1 bg-opacity-10 rounded-2xl p-4">
      <h2 className="text-lg font-semibold mb-4">Chance of rain</h2>
      {rainData.map(({ time, chance }) => (
        <div key={time} className="flex items-center justify-between mb-2">
          <span className="w-16">{time}</span>
          <div className="flex-grow mx-4 bg-white bg-opacity-20 rounded-full h-2">
            <div
              className="bg-purple-500 h-2 rounded-full"
              style={{ width: `${chance}%` }}
            ></div>
          </div>
          <span className="w-8 text-right">{chance}%</span>
        </div>
      ))}
    </div>
  );
};

export default ChanceOfRain;