import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Weather {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
