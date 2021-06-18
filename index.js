import ApiCovid from "./ApiCovid.js";
import CovidTablePopulator from "./CovidTablePopulator.js";
import Map from "./Map.js";

CovidTablePopulator.countries = await ApiCovid.getCountries();
CovidTablePopulator.setTableCountry();
Map.loadMap(CovidTablePopulator.countries);