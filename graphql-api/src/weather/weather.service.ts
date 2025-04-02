import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { Weather } from './weather.model';

@Injectable()
export class WeatherService {
  private readonly apiKey: string
  private readonly baseUrl = 'http://api.openweathermap.org/data/2.5/weather'

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService
  ) {
    this.apiKey = this.configService.get<string>('API_KEY', '')
    if (!this.apiKey) {
      throw new Error('Sem encontro de chave API')
    }
  }

  async getWeather(city: string): Promise<Weather> {
    const url = `${this.baseUrl}?q=${city}&appid=${this.apiKey}&units=metric&lang=pt_br`

    try {
      const response = await firstValueFrom(this.httpService.get(url))
      const data = response.data

      return {
        city: data.name,
        temperature: data.main.temp,
        feelsLike: data.main.feels_like,
        minTemperature: data.main.temp_min,
        maxTemperature: data.main.temp_max,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        windDirection: data.wind.deg,
        visibility: data.visibility,
        description: data.weather[0].description,
        icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
        sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString('pt-BR'),
        sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString('pt-BR'),
      }
    } catch (err) {
      throw new HttpException('Falha ao obter os dados', HttpStatus.BAD_REQUEST)
    }
  }

  async getCityTemperature(city: string): Promise<{ city: string, temperature: number }> {
    const weatherData = await this.getWeather(city);
    return {
      city: weatherData.city,
      temperature: weatherData.temperature,
    }
  }
}
