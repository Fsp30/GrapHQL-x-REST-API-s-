import axios from 'axios';

const API_URL = 'http://localhost:3000/weather';

export interface WeatherResponse {
  city: string;
  temperature: number;
}

export const getWeather = async (city: string): Promise<WeatherResponse | null> => {
  try {
    const response = await axios.get<WeatherResponse>(`${API_URL}/${city}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    return null;
  }
};
