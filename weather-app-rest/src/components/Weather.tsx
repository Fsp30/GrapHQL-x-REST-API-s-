import { useState } from 'react';
import { getWeather, WeatherResponse } from '../services/weatherService';

const Weather = () => {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async () => {
    setError(null);
    const data = await getWeather(city);
    if (data) {
      setWeatherData(data);
    } else {
      setError('Erro ao buscar os dados.');
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Digite a cidade"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border p-2 rounded"
      />
      <button onClick={fetchWeather} className="bg-blue-500 text-white p-2 ml-2 rounded">
        Buscar
      </button>
      {error && <p className="text-red-500">{error}</p>}
      {weatherData && (
        <div className="mt-4">
          <h2 className="text-lg font-bold">{weatherData.city}</h2>
          <p>Temperatura: {weatherData.temperature}°C</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
