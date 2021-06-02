class ApiCovid {

    static getCountries() {
        fetch("https://covid-api.mmediagroup.fr/v1/cases").then(response=>response.json()).then(json=>console.log(json)).catch(e=>console.error(e)); //codigo de german aka william wallace
    }
}

export default ApiCovid;