// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

tableData.forEach( sighting => {
    console.log(sighting);
});

// let tr = d3.select("thead > tr");

tableData.forEach( sighting => {
    let tr = tbody.append("tr");
    Object.entries(sighting).forEach( function ([key,value]) {
        let cell=tr.append("td");
        cell.text(value);
    });
});