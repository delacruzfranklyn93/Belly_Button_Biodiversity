// create init function to build inital plot when refreshed
currentID = ""
function init(){
    buildPlot()
}

//Submit Button Handler
function optionChanged() {
    // Prevent the page from refreshing
    // d3.event.preventDefault();
  
    // Build the plot with the new stock
    buildPlot();
  }



//create a function that builds the new plot. 
function buildPlot(){


    d3.json("samples.json").then((data) =>{
        //get a list of all the id names
        var idValues = data.names;

        // Create the drop down menu by inserting every id name in below function.
        idValues.forEach(id => d3.select('#selDataset').append('option').text(id).property("value", id));


        // Use D3 to select the current ID and store in a variable to work with
        var currentID = d3.selectAll("#selDataset").node().value;
        console.log(currentID)

        //filter the data for the current ID to get relavant information
        filteredID = data.samples.filter(entry => entry.id == currentID);

        //sort the data from highest to lowest sample sample

        console.log(filteredID[0].sample_values);

        // create Trace for the horizontal bar chart
        var trace1 = {
            x: filteredID[0].sample_values.slice(0,10).reverse(),
            y: filteredID[0].otu_ids.slice(0, 10).reverse().map(int => "OTU " + int.toString()),
            text: filteredID[0].otu_labels.slice(0,10).reverse(),
            type:"bar",
            orientation: 'h'
        };
        // filteredID[0].otu_ids.slice(0, 10).map(int => "OTU " + int.toString())

        // data
        var data = [trace1];

        // Layout
        var layout = {
            title : 'Top 10 OTU samples',
            margin: {
                l: 75,
                r: 100,
                t: 60,
                b: 60
            }

        };

        // Use plotly to create new bar
        Plotly.newPlot("bar", data, layout);
        })
};


// Create a function that creates the demograhpic info panel


// select the current ID and store it in a variable to work with


    

init();

// y = data.samples.sort((a,b) => b.sample_values[0] - a.sample_values[0])
// console.log(data)
//  x = data.samples.map(data => data.sample_values[0])
// console.log(idValues)

// })


