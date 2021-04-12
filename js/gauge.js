// create the function that you will call in your main app.js
function gauge(){
d3.json("samples.json").then((data) =>{
    var currentID = d3.selectAll("#selDataset").node().value;
    filteredMeta = data.metadata.filter(entry => entry.id == currentID);
    x = filteredMeta[0].wfreq
    path = pathFind(x)
    createGauge()
 
});

// crete the function to retrieve the correct path for needle

function pathFind(wfreq){
    switch(wfreq){
        case 0:
            return 'M .48 .5 L 0.25 .58 L .56 .515 Z';
            break;
        case 1:
            return 'M .48 .5 L 0.25 .58 L .56 .515 Z';
            break;
        case 2:
            return 'M .48 .5 L 0.25 .64L .55 .5 Z';
            break;
        case 3:
            return 'M .48 .5 L 0.32 .74L .52 .5 Z';
            break;
        case 4:
            return 'M .48 .5 L 0.41 .81L .52 .5 Z';
            break;
        case 5:
            return 'M .48 .5 L 0.50 .85L .52 .5 Z';
            break;
        case 6:
            return 'M .48 .5 L 0.61 .82 L .52 .5 Z';
            break;
        case 7:
            return 'M .48 .5 L 0.70 .76 L .52 .5 Z';
            break;
        case 8:
            return 'M .46 .5 L 0.77 .68 L .52 .5 Z';
            break;
        case 9:
            return 'M .48 .515 L 0.85 .58 L .60 .5 Z';
            break;
    }
}


// create pie chart first 

function createGauge() {
    meter_chart = [
    {
    //set the values and labels and marker colors
    "values": [9,1,1,1,1,1,1,1,1,1],
    "labels": [' ','0-1','1-2','2-3','3-4','4-5','5-6','6-7','7-8','8-9'],
    'marker':{
        'colors':[
            'rgb(255, 255, 255)',
            'rgb(232, 226, 202)',
            'rgb(216, 212, 174)',
            'rgb(198, 198, 147)',
            'rgb(177, 186, 121)',
            'rgb(154, 173, 97)',
            'rgb(129, 162, 74)',
            'rgb(101, 150, 51)',
            'rgb(68, 139, 29)',
            'rgb(14, 127, 0)'
        ]
    },
    // "domain": {x: [0], y: [0]
    // },
    "name": "Gauge",
    "hole": .4,
    "type": "pie",
    "direction": "clockwise",
    "rotation": 90,
    "showlegend": false,
    "textinfo": "label",
    "textposition": "inside",
    "hoverinfo": "label"
}]

 var layout = {
    title: '<b>Belly Button Washing Frequency</b> <br> Scrubs per Week',
    height: 600,
    width: 600,
    shapes:[{
        type: 'path',
        // path: 'M .48 .5 L 0.5 .85 L .52 .5 Z',
        path: path,
        fillcolor: '850000',
        line: {
          color: '850000'
        }
      }]
 
    
 }
 Plotly.newPlot('gauge', meter_chart, layout);
}};

