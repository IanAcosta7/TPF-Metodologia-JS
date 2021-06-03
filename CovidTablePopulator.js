class CovidTablePopulator{
    static setTableCountry(countries){
        let tableContent = document.getElementById("countryTable").innerHTML;

        tableContent += countries.map(country => (
            `   
            <tr>
                <td>${country.abbreviation}</td>
                <td>${country.capital_city}</td>
                <td>${country.confirmed}</td>
                <td>${country.continent}</td>
                <td>${country.country}</td>
                <td>${country.deaths}</td>
                <td>${country.elevation_in_meters}</td>
                <td>${country.iso}</td>
                <td>${country.lat}</td>
                <td>${country.life_expectancy}</td>
                <td>${country.location}</td>
                <td>${country.long}</td>
                <td>${country.population}</td>
                <td>${country.recovered}</td>
                <td>${country.sq_km_area}</td>
                <td>${country.updated}</td>
            <tr>
            `
        ));

        document.getElementById("countryTable").innerHTML = tableContent;
    }
}

export default CovidTablePopulator;