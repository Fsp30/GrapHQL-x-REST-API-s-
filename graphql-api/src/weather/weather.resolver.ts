import { Resolver, Query, Args } from '@nestjs/graphql';
import { WeatherService } from './weather.service';
import { WeatherResponse } from './responses/weather-response';
import { TemperatureResponse } from './responses/temperature-response';

@Resolver()
export class WeatherResolver{
  constructor(private readonly weatherService: WeatherService){}

  @Query(() => String)
  async hello(): Promise<string>{
    return 'Api de clima GraphQL'
  }

  @Query(() => WeatherResponse)
  async getWeather(@Args('city') city:string):Promise<any>{
    return this.weatherService.getWeather(city)
  }

  @Query(() => TemperatureResponse)
  async getCityTemperature(@Args('city') city:string): Promise<any>{
    return this.weatherService.getCityTemperature(city)
  }
}