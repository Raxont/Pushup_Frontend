import { useState, useEffect } from "react";
import HourlyForecast from "./HourlyForeCast";
import WeatherInfo from "./WeatherInfo";
import DayForecast from "./DayForecast";
import ChanceOfRain from "./ChanceOfRain";
import SunriseSunset from "./SunriseSunset";

const WeatherApp = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 80;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

   // Función para manejar el evento de búsqueda
   const handleSearch = () => {
    // Aquí puedes manejar el valor del input (searchQuery)
    console.log("Searching for:", searchQuery);
    // Aquí puedes agregar la lógica para realizar la búsqueda.
    setSearchQuery(""); // Limpiar el input después de la búsqueda
    setIsSearching(false); // Cerrar el input después de buscar
  };

  return (
    <div className="relative min-h-screen bg-bg">
      {/* Fondo que cambia según el scroll */}
      <div
        className={`absolute top-0 left-0 right-0 transition-colors duration-300 rounded-b-[2rem] ${
          scrolled ? 'bg-red-500' : 'bg-blue-500'
        }`}
        style={{
          height: scrolled ? '0' : '380px',
          backgroundImage: scrolled ? 'none' : "url('/background.png')",
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          zIndex: 10,
        }}
      ></div>

      {/* Contenido fijo en la parte superior */}
        <div
        className={`sticky top-0 z-20 px-6 pt-6 pb-4 max-w-md mx-auto transition-colors duration-300 rounded-b-[0.5rem] ${
            scrolled ? 'bg-card1 text-black' : 'bg-transparent text-white'
        }`}
        >
        <div className={`flex justify-between items-center  ${scrolled ? 'pb-[1rem]':'pb-[2.5rem]'} `}>
            <div>
            <h1 className="text-2xl">Kharkiv, Ukraine</h1>
            </div>
            <img
            src={scrolled ? "/icons/search_black.png" : "/icons/search_white.png"}
            alt="Search_Icon"
            onClick={() => setIsSearching(!isSearching)} 
          />
           {isSearching && (
              <div className="absolute top-2 right-0 bgbg p-2 rounded-md">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border rounded px-2 py-1 w-32 text-black"
                  placeholder="Buscar..."
                />
                <button
                  onClick={handleSearch}
                  className="bg-card1 text-white rounded px-2 py-1 ml-2"
                >
                  Buscar
                </button>
              </div>
            )}
        </div>
        <div className="flex items-center justify-between mb-4 content-end">
            <div className="flex items-end content-end">
                <div  className={`font-bold ${scrolled ? "text-6xl" : "text-8xl"}`}>3°</div>
                <div className="text-base">Feels like -2°</div>
            </div>
            <div className="text-right flex flex-col">
                <img src="/cloud and sun.png" alt="Weather Icon"   className={`inline-block ${scrolled ? "w-16 h-16" : "w-22 h-22"}`} />
                {!scrolled && <div className="text-2xl text-center">Cloudy</div>}
            </div>
        </div>

        {!scrolled && (
            <div className="flex justify-between items-end pt-14 pb-8">
            <p className="text-xl opacity-70">January 18, 16:14</p>
            <div className="flex flex-col place-items-end text-xl ">
                <p>Day 3°</p>
                <p>Night -1°</p>
            </div>
            </div>
        )}

        {/* Botones que permanecen fijos */}
        <div className={`flex gap-4 text-base text-black transition-transform h-[2.3rem] duration-300 ${scrolled ? 'mt-4' : ''}`}>
            <button className="bg-white rounded-xl w-[30%] px-4 py-1 focus:bg-button1">
            Today
            </button>
            <button className="bg-white rounded-xl w-[30%] px-4 py-1 focus:bg-button1">Tomorrow</button>
            <button className="bg-white rounded-xl w-[30%] px-4 py-1 focus:bg-button1">10 days</button>
        </div>
      </div>

      {/* Resto del contenido que se desplaza */}
      <div className="relative z-10 px-6 max-w-md">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <WeatherInfo icon="air" label="Wind speed" value="12km/h" change="-2 km/h" />
          <WeatherInfo icon="rainy" label="Rain chance" value="24%" change="+10%" />
          <WeatherInfo icon="waves" label="Pressure" value="720 hpa" change="+32 hpa" />
          <WeatherInfo icon="light_mode" label="UV Index" value="2,3" change="-0.3" />
        </div>

        <div className="bg-card1 bg-opacity-10 rounded-2xl p-4 mb-6">
          <h2 className="text-lg font-semibold mb-2">Hourly forecast</h2>
          <HourlyForecast />
        </div>

          <DayForecast />

          <ChanceOfRain />
 

        <div className="mt-6 flex justify-between">
          <SunriseSunset type="sunrise" time="4:20 AM" ago="4h ago" />
          <SunriseSunset type="sunset" time="4:50 PM" ago="in 9h" />
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
