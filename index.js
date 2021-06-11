import ApiCovid from "./ApiCovid.js";
import CovidTablePopulator from "./CovidTablePopulator.js";

CovidTablePopulator.countries = await ApiCovid.getCountries();
CovidTablePopulator.setTableCountry();
CovidTablePopulator.sortColumn();