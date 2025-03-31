import { Module } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { WeatherResolver } from './weather.resolver';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, ConfigModule], 
  providers: [WeatherService, WeatherResolver],
  exports: [WeatherService],
})
export class WeatherModule {}
