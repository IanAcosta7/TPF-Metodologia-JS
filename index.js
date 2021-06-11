import ApiCovid from "./ApiCovid.js";
import CovidTablePopulator from "./CovidTablePopulator.js";

CovidTablePopulator.countries = await ApiCovid.getCountries();
CovidTablePopulator.originalCountries = CovidTablePopulator.countries;
CovidTablePopulator.setTableCountry();
CovidTablePopulator.sortColumn();