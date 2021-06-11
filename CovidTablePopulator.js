class CovidTablePopulator{

    static countries;
    static sortBy = "country";
    static sortAsc = false;

    static setTableCountry(){

        document.getElementById("country-table").innerHTML = `
            <tr id="country-columns">
                <th id="country">country <span id="country-span" class="material-icons">expand_more</span> </th>
                <th id="abbreviation">abbreviation <span id="abbreviation-span" class="material-icons">expand_more</span></th>
                <th id="capital_city">capital_city <span id="capital_city-span" class="material-icons">expand_more</span> </th>
                <th id="confirmed">confirmed <span id="confirmed-span" class="material-icons">expand_more</span> </th>
                <th id="continent">continent <span id="continent-span" class="material-icons">expand_more</span> </th>
                <th id="deaths">deaths <span id="deaths-span" class="material-icons">expand_more</span> </th>
                <th id="elevation_in_meters">elevation_in_meters <span id="elevation_in_meters-span" class="material-icons">expand_more</span> </th>
                <th id="life_expectancy">life_expectancy <span id="life_expectancy-span" class="material-icons">expand_more</span> </th>
                <th id="location">location <span id="location-span" class="material-icons">expand_more</span> </th>
                <th id="long">long <span id="long-span" class="material-icons">expand_more</span> </th>
                <th id="population">population <span id="population-span" class="material-icons">expand_more</span> </th>
                <th id="recovered">recovered <span id="recovered-span" class="material-icons">expand_more</span> </th>
                <th id="sq_km_area">sq_km_area <span id="sq_km_area-span" class="material-icons">expand_more</span> </th>
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
                <td>${country.long ? country.long : ''}</td>
                <td>${country.population ? country.population : ''}</td>
                <td>${country.recovered ? country.recovered : ''}</td>
                <td>${country.sq_km_area ? country.sq_km_area : ''}</td>
            <tr>
            `
        ));

        const columns = document.getElementById("country-columns").children

        for (let i = 0; i < columns.length; i++) {
            columns.item(i).addEventListener('click', function(e) {
                CovidTablePopulator.sortColumn(e.target.id);
            });
        }
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
}

export default CovidTablePopulator;