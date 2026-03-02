import { RESTDataSource } from "@apollo/datasource-rest";
import { Planet } from "../types";

export class PlanetService extends RESTDataSource {
  getPopularPlanets() {
    return new Promise<Planet[]>(resolve => {
      resolve([])
    })
  }
}