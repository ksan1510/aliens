// Get a reference to the table body
var tabledata= data;
var tbody = d3.select("tbody");
var submit= d3.select("#filter-btn")

function buildTable(dataA){
dataA.forEach((tabledata) => {
  var row = tbody.append("tr");
  Object.entries(tabledata).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});
}


submit.on("click", function() {
  d3.event.preventDefault();
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  var filteredData = tabledata.filter(row => row.datetime === inputValue);
  console.log(filteredData);

  tbody.html(" ")
  buildTable(filteredData)
});

buildTable(tabledata);