import ApiCovid from "./ApiCovid.js";
import CovidTablePopulator from "./CovidTablePopulator.js";

CovidTablePopulator.setTableCountry(ApiCovid.getCountries());
