import { gql } from "@apollo/client";

export const GetWeather = gql`
query GetWeather($city: String!) {
  getWeather(city: $city) {
    city
    temperature
  }
}
`;

