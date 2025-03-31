import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
export class TemperatureResponse{
        @Field()
        city: string
        
        @Field()
        temperature: number
}