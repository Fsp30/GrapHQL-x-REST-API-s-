import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class WeatherService {
  private readonly apiKey: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService
  ) {
    this.apiKey = this.configService.get<string>('API_KEY', ''); 
    if (this.apiKey=='') {
      throw new Error('Sem encontro de chave API');
    }
  }

  async getWeather(city: string): Promise<any> {
    console.log('Cidade recebida no backend:', city);
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric&lang=pt_br`;
  
    try {
      const response = await firstValueFrom(this.httpService.get(url));
      return response.data;
    } catch (err) {
      console.error('Erro ao chamar OpenWeather:', err.response?.data || err.message);
      throw new HttpException('Falha ao obter os dados', HttpStatus.BAD_REQUEST);
    }
  }
  

  async getCityTemperature(city: string): Promise<{ city: string; temperature: number }> {
    const weatherData = await this.getWeather(city);

    return {
      city: weatherData.name,
      temperature: weatherData.main.temp
    };
  }
}
