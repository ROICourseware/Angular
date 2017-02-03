import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MockBackendService implements InMemoryDbService {
  createDb() {
    const countries: any = [{
      countryId: 1,
      name: "United Kingdom",
      language: "English"
    }, {
      countryId: 2,
      name: "United States of America",
      language: "English"
    }, {
      countryId: 3,
      name: "Australia",
      language: "English"
    }, {
      countryId: 4,
      name: "Germany",
      language: "German"
    }, {
      countryId: 5,
      name: "Austria",
      language: "German"
    }];
    return { countries };
  }
}