import CovidTablePopulator from "./CovidTablePopulator.js";

class ApiCovid {
    static getCountries() {
        fetch("https://covid-api.mmediagroup.fr/v1/cases").then(response => response.json()).then(res => {
            CovidTablePopulator.setTableCountry(Object.values(res).map(res => res.All));
        });
    }
}

export default ApiCovid;