class ApiCovid {
    static async getCountries() {
        return await fetch("https://covid-api.mmediagroup.fr/v1/cases").then(response => response.json()).then(res => {
            return ApiCovid.filterBadData(Object.values(res).map(res => res.All));
        });
    }

    static filterBadData(data) {
        return data.filter(value => {
            return !Object.values(value).some(attribute => attribute == null || attribute == undefined);
        });
    }
}

export default ApiCovid;