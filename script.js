var trace1 = {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    y: [1, 6, 3, 6, 1, 4, 7, 2, 5, 8],
    mode: 'markers',
    type: 'scatter',
    marker: {
        size: 15
    }
};

var data = [trace1];

var layout = {
    title: 'Scatter Plot',
};

Plotly.newPlot('scatter-plot-chart', data, layout);

var trace1 = {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    y: [1, 6, 3, 6, 1, 4, 7, 2, 5, 8],
    mode: 'lines',
    type: 'scatter'
};

var data = [trace1];

var layout = {
    title: 'Line Chart',
};

Plotly.newPlot('line-chart-chart', data, layout);

var trace1 = {
    x: ['Muc 1', 'Muc 2', 'Muc 3', 'Muc 4', 'Muc 5'],
    y: [20, 14, 23, 19, 25],
    type: 'bar'
};

var data = [trace1];

var layout = {
    title: 'Bar Chart',
};

Plotly.newPlot('bar-chart-chart', data, layout);

var data = [{
    values: [19, 26, 55, 40, 23],
    labels: ['Team1', 'Team2', 'Team3', 'Team4', 'Team5'],
    type: 'pie'
}];

var layout = {
    title: 'Pie Chart',
};

Plotly.newPlot('pie-chart-chart', data, layout);

var data = [{
    values: [19, 26, 55, 40, 23],
    labels: ['Team1', 'Team2', 'Team3', 'Team4', 'Team5'],
    hole: .4,
    type: 'pie'
}];

var layout = {
    title: 'Donut Chart',
};

Plotly.newPlot('donut-chart-chart', data, layout);

var trace1 = {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    y: [1, 6, 3, 6, 1, 4, 7, 2, 5, 8],
    mode: 'markers',
    marker: {
        size: [30, 80, 50, 100, 30, 60, 70, 80, 90, 100]
    }
};

var data = [trace1];

var layout = {
    title: 'Bubble Chart',
    showlegend: false,
};

Plotly.newPlot('bubble-chart-chart', data, layout);