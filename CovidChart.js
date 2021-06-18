class CovidChart {

    chart;

    constructor(element) {
        this.element = element;
    }

    updateChart(countries) {
        countries = countries.slice(0, 10);

        this.chart.data.labels = countries.map(country => country.country);
        // this.chart.data.datasets.data = countries.map(country => country.confirmed);

        this.chart.data.datasets.pop();
        this.chart.data.datasets.push({
            label: 'Casos confirmados',
            backgroundColor: 'rgb(251,235,219)',
            data: countries.map(country => country.confirmed),
        });

        this.chart.options = {
            scales: {
                y: {
                    max: Math.max.apply(null, countries.map(country => country.confirmed)),
                    beginAtZero: true
                }
            },
            layout: {
                padding: 20
            },
            aspectRatio: 1
        };

        this.chart.update();
    }
}

export default CovidChart;