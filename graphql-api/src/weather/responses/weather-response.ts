import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
export class WeatherResponse{
        @Field()
        city: string

        @Field()
        temperature: number
        
        @Field()
        deacription: string

}