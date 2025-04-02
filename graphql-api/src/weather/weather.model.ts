import { ObjectType, Field, Float } from '@nestjs/graphql';

@ObjectType()
export class Weather {
  @Field()
  city: string

  @Field(() => Float)
  temperature: number

  @Field(() => Float)
  feelsLike: number

  @Field(() => Float)
  minTemperature: number

  @Field(() => Float)
  maxTemperature: number

  @Field(() => Float)
  pressure: number

  @Field(() => Float)
  humidity: number

  @Field(() => Float)
  windSpeed: number

  @Field(() => Float)
  windDirection: number

  @Field()
  visibility: number

  @Field()
  description: string

  @Field()
  icon: string

  @Field()
  sunrise: string

  @Field()
  sunset: string
}
