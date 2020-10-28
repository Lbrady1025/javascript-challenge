// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

tableData.forEach( sighting => {
    console.log(sighting);
});

tableData.forEach( sighting => {
    let tr = tbody.append("tr");
    Object.entries(sighting).forEach( function ([key,value]) {
        let cell=tr.append("td");
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");
var datetime = d3.select("#datetime");
var form = d3.select("form");

button.on("click", runEnter);


function runEnter () {

    d3.event.preventDefault();

    var input = 
}