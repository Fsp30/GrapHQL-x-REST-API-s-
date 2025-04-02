
import { Resolver, Query, Args } from '@nestjs/graphql';
import { WeatherService } from './weather.service';
import { Weather } from './weather.model';

@Resolver()
export class WeatherResolver {
  constructor(private readonly weatherService: WeatherService) {}

  @Query(() => String)
  async hello():Promise<any>{
    return 'Minha API com Graphql 🙏🏿'
  }

  @Query(() => Weather)
  async getWeather(@Args('city') city: string): Promise<Weather> {
    return this.weatherService.getWeather(city);
  }

  @Query(() => String)
  async getCityTemperature(@Args('city') city: string): Promise<string> {
    const data = await this.weatherService.getCityTemperature(city);
    return `A temperatura em ${data.city} é de ${data.temperature}°C.`;
  }
}
