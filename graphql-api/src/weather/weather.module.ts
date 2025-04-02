import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { WeatherResolver } from './weather.resolver';
import { WeatherService } from './weather.service';

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [WeatherResolver, WeatherService],
})
export class WeatherModule {}
