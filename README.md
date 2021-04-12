# Exploring Belly Button Biodiversity via Interactive Dashboard. 

## Summary: 
The purpose of this project is to create an interactive dashboard that allows the user to explore belly button biodiversity dataset, which catalogs the microbes that colonize human navels. The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

Tools Used: D3, Plotly, Bootstrap

Link for interactive dashboard: https://delacruzfranklyn93.github.io/Belly_Button_Biodiversity/

## Steps: 
1)	**Drop down and Demographics panel:** The first step was to add all the IDs to the “Test Subject ID No” dropdown so that the user can select which ID they would like to look at and so we can use that ID to parse out the information that we need from our data json file. I then use the ID to filter out the metadata pertaining to the selected ID and stored it in an object. I then used d3 to select the panel-body class in my index.html where I used a forEach statement to iterate through the object and append the data to the demographics panel.

![drop_down](https://user-images.githubusercontent.com/63375741/114325761-c2c59a00-9aff-11eb-94dc-7cebc5eaedb2.png)


2)	**Horizontal bar chart and Bubble Chart:** To create the horizontal chart, I first filtered the JSON data by the current ID that the user has selected. I then created a trace for the chart with the top 10 sample values as the x and the OTU IDs as the y. I then used Plotly to create the bar chart. I followed the same steps above to create the bubble chart.

![h_chart](https://user-images.githubusercontent.com/63375741/114325773-d40ea680-9aff-11eb-91b8-ea13a2e008d3.png)

![bubble_chart](https://user-images.githubusercontent.com/63375741/114325776-d96bf100-9aff-11eb-91bb-feb53c3f32f8.png)


3)	**Gauge chart:** To create the gauge chart, I first created my pie chart which would have the gradient colors and labels from lowest to highest frequency washings per week. I then proceeded to create my needle by  created several SVG paths that would draw the needle and that correlate with the washing frequency of a subject. I then created a function that would use a switch statement to select the correct path drawing for the needle  depending on the number of washing frequency. . 

![gauge_chart](https://user-images.githubusercontent.com/63375741/114325787-e092ff00-9aff-11eb-91e9-f964ee1b93c0.png)

