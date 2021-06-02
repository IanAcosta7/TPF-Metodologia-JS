class CovidTablePopulator{
    static setTableCountry(covidCountry){
        let list = "";

        for(let i=0; i<covidCountry.length; i++){
            list+= `    <td>${covidCountry.abbreviation}</td>
                        <td>${covidCountry.capital_city}</td>
                        <td>${covidCountry.confirmed}</td>
                        <td>${covidCountry.continent}</td>
                        <td>${covidCountry.country}</td>
                        <td>${covidCountry.deaths}</td>
                        <td>${covidCountry.elevation_in_meters}</td>
                        <td>${covidCountry.iso}</td>
                        <td>${covidCountry.lat}</td>
                        <td>${covidCountry.life_expectancy}</td>
                        <td>${covidCountry.location}</td>
                        <td>${covidCountry.long}</td>
                        <td>${covidCountry.population}</td>
                        <td>${covidCountry.recovered}</td>
                        <td>${covidCountry.sq_km_area}</td>
                        <td>${covidCountry.updated}</td>
                    `
        }

        document.getElementById("countryTableContent").innerHTML = list;
    }
}

export default ApiCovid;