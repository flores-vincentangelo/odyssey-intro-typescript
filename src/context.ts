import { ListingAPI } from "./datasources/listing-api";
import { PlanetService } from "./datasources/planets-service";

export type DataSourceContext = {
  dataSources: {
    listingAPI: ListingAPI;
    planetService: PlanetService;
  };
};