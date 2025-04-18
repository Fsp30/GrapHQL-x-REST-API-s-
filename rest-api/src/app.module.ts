import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { WeatherModule } from './weather/weather.module';

@Module({
  imports: [WeatherModule, ConfigModule.forRoot(),],
  controllers: [AppController],
  providers: [AppService] ,
})
export class AppModule {}
