import { CreateWeatherInput } from './create-weather.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWeatherInput extends PartialType(CreateWeatherInput) {
  @Field(() => Int)
  id: number;
}
