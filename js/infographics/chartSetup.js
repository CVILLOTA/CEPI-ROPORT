//Grafica 1
$(function () {
    Highcharts.chart('grafica1', {
        chart: {
            type: 'bar',
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: ' '
        },
        xAxis: {
            type: 'category',
            labels: {
              useHTML: true
            }
        },
        yAxis: {
            min: 0,
            max: 100,
            title: {
                text: null,
            },
            labels: {
                    enabled: false,
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}%'
                }
            }
        },
        series: [{
            name: 'Production',
            colorByPoint: true,
            data: [{
                name: 'PACKAGING PAPERS<br>AND BOARDS',
                y: 49,
                color: '#005eb8',
            }, {
                name: 'CASE MATERIALS',
                y: 29.9,
                color: '#fff',
                borderWidth : 2,
                borderColor : '#005eb8'
            }, {
                name: 'OTHER PACKAGING & PAPER',
                y: 14.4,
                color: '#fff',
                borderWidth : 2,
                borderColor : '#005eb8'
            },{
                name: 'WRAPPINGS',
                y: 4.7,
                color: '#fff',
                borderWidth : 2,
                borderColor : '#005eb8'
            }]
        }]
    });
});

//Grafica 2
$(function () {
    Highcharts.chart('grafica2', {
       chart: {
            type: 'bar',
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: ' '
        },
        xAxis: {
            type: 'category',
            labels: {
              useHTML: true
            }
        },
        yAxis: {
            min: 0,
            max: 100,
            title: {
                text: null,
            },
            labels: {
                enabled: false
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}%'
                }
            }
        },
        series: [{
            name: 'Production',
            colorByPoint: true,
            data: [{
                name: 'NEWSPRINT AND<br>GRAPHIC PAPERS',
                y: 38.8,
                color: '#8cc640'
            }, {
                name: 'UNCOATED PAPERS',
                y: 15.8,
                color: '#fff',
                borderWidth : 2,
                borderColor : '#8cc640'
            }, {
                name: 'COATED PAPERS',
                y: 15.2,
                color: '#fff',
                borderWidth : 2,
                borderColor : '#8cc640'
            },{
                name: 'NEWSPRINT',
                y: 7.8,
                color: '#fff',
                borderWidth : 2,
                borderColor : '#8cc640'
            }]
        }]
    });
});


//Grafica 3

$(function () {
    Highcharts.chart('grafica3', {
        chart: {
            type: 'bar',
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            height: 120,
            plotShadow: false
        },
        title: {
            text: ' '
        },
        xAxis: {
            type: 'category',
            labels: {
              useHTML: true
            }
        },
        yAxis: {
            min: 0,
            max: 100,
            title: {
                text: null,
            },
            labels: {
                    enabled: false,
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}%'
                }
            }
        },
        series: [{
            name: 'Production',
            colorByPoint: true,
            data: [{
                name: 'HYGIENE PAPERS',
                y: 7.8,
                color: '#26b6cc',
            }]
        }]
    });
});

//Grafica 4

$(function () {
    Highcharts.chart('grafica4', {
        chart: {
            type: 'bar',
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            height: 120,
            plotShadow: false
        },
        title: {
            text: ' '
        },
        xAxis: {
            type: 'category',
            labels: {
              useHTML: true
            }
        },
        yAxis: {
            min: 0,
            max: 100,
            title: {
                text: null,
            },
            labels: {
                    enabled: false,
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}%'
                }
            }
        },
        series: [{
            name: 'Production',
            colorByPoint: true,
            data: [{
                name: 'OTHER PAPERS<br>AND BOARDS',
                y: 4.4,
                color: '#51a332',
            }]
        }]
    });
});
