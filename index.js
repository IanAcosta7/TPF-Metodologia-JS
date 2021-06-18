import ApiCovid from "./ApiCovid.js";
import CovidTablePopulator from "./CovidTablePopulator.js";
import Map from "./Map.js";
import CovidChart from "./CovidChart.js";

CovidTablePopulator.countries = await ApiCovid.getCountries();
CovidTablePopulator.originalCountries = CovidTablePopulator.countries;
CovidTablePopulator.setTableCountry();
Map.loadMap(CovidTablePopulator.countries);
CovidTablePopulator.covidChart = new CovidChart(document.getElementById('covid-chart'));

CovidTablePopulator.covidChart.draw(CovidTablePopulator.countries);
