
// create pie chart first 

meter_chart = [{
    //set the values and labels and marker colors
    "values": [8,1,1,1,1,1,1,1,1],
    "labels": [' ','0-1','1-2','2-3','3-4','4-5','5-6','7-8','8-9'],
    'marker':{
        'colors':[
            'rgb(255, 255, 255)',
            'rgb(232, 226, 202)',
            'rgb(201, 212, 173)',
            'rgb(170, 198, 144)',
            'rgb(139, 184, 115)',
            'rgb(107, 169, 87)',
            'rgb(76, 155, 58)',
            'rgb(45, 141, 29)',
            'rgb(14, 127, 0)'
        ]
    },
    "domain": {"x": [0]},
    "name": "Gauge",
    "hole": .3,
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
        path: 'M 0.235 .5 L 0.24 0.65 L 0.245 0.5 Z',
        fillcolor: '850000',
        line: {
          color: '850000'
        }
      }]
    
 };
//  'M -.0 -0.025 L .0 0.025 L '
Plotly.newPlot('gauge', meter_chart, layout);




// var level = 170;

// // Trig to calc meter point
// var degrees = 180 - level,
// 	 radius = .5;
// var radians = degrees * Math.PI / 180;
// var x = radius * Math.cos(radians);
// var y = radius * Math.sin(radians);

// // Path: may have to change to create a better triangle
// var mainPath = 'M -.0 -0.025 L .0 0.025 L ',
// 	 pathX = String(x),
// 	 space = ' ',
// 	 pathY = String(y),
// 	 pathEnd = ' Z';
// var path = mainPath.concat(pathX,space,pathY,pathEnd);


// var data = [{ type: 'scatter',
//    x: [0], y:[0],
// 	marker: {size: 27, color:'850000'},
// 	showlegend: false,
// 	name: 'speed',
// 	text: level,
// 	hoverinfo: 'text+name'},
//   { values: [50/9, 50/9, 50/9, 50/9, 50/9, 50/9,50],
//   rotation: 90,
//   text: ['9-10', '8-9', '7-8', '6-7',
// 			'5-6', '4-5', '3-4','2-3','1-2'],
//   textinfo: 'text',
//   textposition:'inside',	  
//   marker: {colors:['rgba(14, 127, 0, .5)', 'rgba(110, 154, 22, .5)',
// 						 'rgba(170, 202, 42, .5)', 'rgba(202, 209, 95, .5)',
// 						 'rgba(210, 206, 145, .5)', 'rgba(232, 226, 202, .5)',
// 						 'rgba(255, 255, 255, 0)']},
//   labels: ['151-180', '121-150', '91-120', '61-90', '31-60', '0-30', ''],
//   hoverinfo: 'label',
//   hole: .5,
//   type: 'pie',
//   showlegend: false
// }];

// var layout = {
//   shapes:[{
//       type: 'path',
//       path: path,
//       fillcolor: '850000',
//       line: {
//         color: '850000'
//       }
//     }],
//   title: '<b>Belly Button Washing Frequency</b> <br> Scrubs per Week',
//   height: 600,
//   width: 600,
//   xaxis: {zeroline:false, showticklabels:false,
// 			 showgrid: false, range: [-1, 1]},
//   yaxis: {zeroline:false, showticklabels:false,
// 			 showgrid: false, range: [-1, 1]}
// };

// Plotly.newPlot('gauge', data, layout);
