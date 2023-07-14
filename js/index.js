//CHART 1

const clrs = Highcharts.getOptions().colors;
const pieColors = [clrs[2], clrs[0], clrs[3], clrs[1], clrs[4]];

// Get a default pattern, but using the pieColors above.
// The i-argument refers to which default pattern to use
function getPattern(i) {
    return {
        pattern: Highcharts.merge(Highcharts.patterns[i], {
            color: pieColors[i]
        })
    };
}

// Get 5 patterns
const patterns = [0, 1, 2, 3, 4].map(getPattern);

const chart = Highcharts.chart('container-1', {
    chart: {
        type: 'pie'
    },

    title: {
        text: 'Revenue breakdown per platform',
        align: 'left'
    },

    subtitle: {
        text: 'AWIN AG',
        align: 'left'
    },

    colors: patterns,

    tooltip: {
        valueSuffix: '%',
        borderColor: '#8ae',
        shape: 'rect',
        backgroundColor: 'rgba(255, 255, 255, 0.94)',
        followPointer: false,
        stickOnContact: true
    },

    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                connectorColor: '#777',
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            },
            point: {
                events: {
                    click: function () {
                        window.location.href = this.website;
                    }
                }
            },
            cursor: 'pointer',
            borderWidth: 3
        }
    },

    series: [{
        name: '% of Q2 revenue',
        data: [{
            name: 'Instagram',
            y: 40.6,
            website: 'https://www.instagram.com/',
            accessibility: {
                description: 'This is the most profitable platform for you'
            }
        }, {
            name: 'TikTok',
            y: 40.1,
            website: 'https://www.tiktok.com/en/'
        }, {
            name: 'Pinterest',
            y: 12.9,
            website: 'https://www.pinterest.com/'
        }, {
            name: 'Threads',
            y: 2,
            website: 'https://about.instagram.com/blog/announcements/threads-instagram-text-feature'
        }, {
            name: 'Twitter',
            y: 4.4,
            website: 'https://twitter.com/home'
        }]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                plotOptions: {
                    series: {
                        dataLabels: {
                            format: '<b>{point.name}</b>'
                        }
                    }
                }
            }
        }]
    }
});

// Toggle patterns enabled
document.getElementById('patterns-enabled').onclick = function () {
    chart.update({
        colors: this.checked ? patterns : pieColors
    });
};


//CHART 2
Highcharts.chart('container-2', {

    title: {
        text: 'Growt YoY',
        align: 'left'
    },

    subtitle: {
        text: 'By AWIN AG',
        align: 'left'
    },

    yAxis: {
        title: {
            text: 'Revenue in $'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2014 to 2023'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2013
        }
    },

    series: [{
        name: 'Instagram',
        data: [43934, 48656, 65165, 81827, 112143, 142383,
            171533, 165174, 155157, 161454, 154610]
    }, {
        name: 'TikTok',
        data: [24916, 37941, 29742, 29851, 32490, 30282,
            38121, 36885, 33726, 34243, 131050]
    }, {
        name: 'Pinterest',
        data: [11744, 30000, 16005, 19771, 20185, 24377,
            32147, 30912, 29243, 29213, 55663]
    }, {
        name: 'Threads',
        data: [null, null, null, null, null, null, null,
            null, 11164, 11218, 10077]
    }, {
        name: 'Twitter',
        data: [21908, 5548, 8105, 11248, 8989, 11816, 18274,
            17300, 13053, 11906, 10073]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

