import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GetWeather } from "../queries";

const Weather = () =>{
        const [city,setCity] = useState('')
        const {data, loading, error}= useQuery(GetWeather, {
                variables: {city},
                skip: city === ''
        })

        return (
                <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md">
                  <h1 className="text-xl font-bold text-center mb-4">Previsão do Tempo</h1>
                  <input
                    type="text"
                    placeholder="Digite uma cidade"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full p-2 border rounded"
                  />
                  {loading && <p>Carregando...</p>}
                  {error && <p className="text-red-500">Erro ao buscar dados.</p>}
                  {data && (
                    <div className="mt-4 text-center">
                      <h2 className="text-lg font-semibold">{data.getWeather.name}</h2>
                      <p>Temperatura: {data.getWeather.main.temp}°C</p>
                      <p>Umidade: {data.getWeather.main.humidity}%</p>
                      <p>Descrição: {data.getWeather.weather[0].description}</p>
                    </div>
                  )}
                </div>
              )
}

export default Weather