class CovidTablePopulator{

    static countries;
    static originalCountries;
    static sortBy = "country";
    static sortAsc = false;
    static covidChart;

    static setTableCountry(){

        document.getElementById("country-table").innerHTML = `
            <tr id="country-columns" class="table-hd">
                <th>
                    <div id="country" class="head-cell-content">
                        País <span id="country-span" class="material-icons sorting-arrow">expand_more</span>
                    </div>
                </th>
                <th>
                    <div id="abbreviation" class="head-cell-content">
                        Abreviación <span id="abbreviation-span" class="material-icons sorting-arrow">expand_more</span>
                    </div>
                </th>
                <th>
                    <div id="capital_city" class="head-cell-content">
                        Capital <span id="capital_city-span" class="material-icons sorting-arrow">expand_more</span>
                    </div>
                </th>
                <th>
                    <div id="confirmed" class="head-cell-content">
                        Confirmados <span id="confirmed-span" class="material-icons sorting-arrow">expand_more</span>
                    </div>
                </th>
                <th>
                    <div id="continent" class="head-cell-content">
                        Continente <span id="continent-span" class="material-icons sorting-arrow">expand_more</span>
                    </div>
                </th>
                <th>
                    <div id="deaths" class="head-cell-content">
                        Muertes <span id="deaths-span" class="material-icons sorting-arrow">expand_more</span>
                    </div>
                </th>
                <th>
                    <div id="elevation_in_meters" class="head-cell-content">
                        Elevación (m) <span id="elevation_in_meters-span" class="material-icons sorting-arrow">expand_more</span>
                    </div>
                </th>
                <th>
                    <div id="life_expectancy" class="head-cell-content">
                        Esperanza de vida <span id="life_expectancy-span" class="material-icons sorting-arrow">expand_more</span>
                    </div>
                </th>
                <th>
                    <div id="location" class="head-cell-content">
                        Ubicación <span id="location-span" class="material-icons sorting-arrow">expand_more</span>
                    </div>
                </th>
                <th>
                    <div id="population" class="head-cell-content">
                        Población <span id="population-span" class="material-icons sorting-arrow">expand_more</span>
                    </div>
                </th>
                <th>
                    <div id="recovered" class="head-cell-content">
                        Recuperados <span id="recovered-span" class="material-icons sorting-arrow">expand_more</span>
                    </div>
                </th>
                <th>
                    <div id="sq_km_area" class="head-cell-content">
                        Área (km<sup>2</sup>) <span id="sq_km_area-span" class="material-icons sorting-arrow">expand_more</span>
                    </div>
                </th>
            </tr>
        `;

        document.getElementById("country-table").innerHTML += CovidTablePopulator.countries.map(country => (
            !country.country ?
            '' :
            `   
            <tr>
                <td>${country.country ? country.country : ''}</td>
                <td>${country.abbreviation ? country.abbreviation : ''}</td>
                <td>${country.capital_city ? country.capital_city : ''}</td>
                <td>${country.confirmed ? country.confirmed : ''}</td>
                <td>${country.continent ? country.continent : ''}</td>
                <td>${country.deaths ? country.deaths : ''}</td>
                <td>${country.elevation_in_meters ? country.elevation_in_meters : ''}</td>
                <td>${country.life_expectancy ? country.life_expectancy : ''}</td>
                <td>${country.location ? country.location : ''}</td>
                <td>${country.population ? country.population : ''}</td>
                <td>${country.recovered ? country.recovered : ''}</td>
                <td>${country.sq_km_area ? country.sq_km_area : ''}</td>
            <tr>
            `
        )).join(' ');

        CovidTablePopulator.addColumnsEventListeners();
    }

    static sortColumn(column = CovidTablePopulator.sortBy) {
        CovidTablePopulator.sortBy = column;

        CovidTablePopulator.sortAsc = column == CovidTablePopulator.sortBy && !CovidTablePopulator.sortAsc;
        
        if (CovidTablePopulator.sortAsc) {
            CovidTablePopulator.countries.sort(CovidTablePopulator.compareCountriesAsc);
        }
        else {
            CovidTablePopulator.countries.sort(CovidTablePopulator.compareCountries);
        }

        CovidTablePopulator.setTableCountry(CovidTablePopulator.countries);

        CovidTablePopulator.covidChart.updateChart(CovidTablePopulator.countries);

        let element = document.getElementById(column + '-span');
        element.innerText = this.sortAsc ? "expand_less" : "expand_more";
    };

    static compareCountries(a, b) {
        if (a[CovidTablePopulator.sortBy] > b[CovidTablePopulator.sortBy])
            return -1;
        else if (a[CovidTablePopulator.sortBy] < b[CovidTablePopulator.sortBy])
            return 1;
        else
            return 0;
    };

    static compareCountriesAsc(a, b) {
        if (a[CovidTablePopulator.sortBy] < b[CovidTablePopulator.sortBy])
            return -1;
        else if (a[CovidTablePopulator.sortBy] > b[CovidTablePopulator.sortBy])
            return 1;
        else
            return 0;
    };

    static search(text) {

        if (text != "")
            CovidTablePopulator.countries = CovidTablePopulator.originalCountries.filter(country => Object.values(country).some(property => property == text));
        else
            CovidTablePopulator.countries = CovidTablePopulator.originalCountries;

        CovidTablePopulator.setTableCountry(CovidTablePopulator.countries);
        CovidTablePopulator.covidChart.updateChart(CovidTablePopulator.countries);
    }

    static addColumnsEventListeners() {
        const columns = document.getElementById("country-columns").children
        
        for (let i = 0; i < columns.length; i++) {
            columns.item(i).addEventListener('click', function(e) {
                CovidTablePopulator.sortColumn(e.target.id);
            });
        }

        document.getElementById("search-country").addEventListener("change", function(e) {
            CovidTablePopulator.search(e.target.value);
        });
    }
}

export default CovidTablePopulator;