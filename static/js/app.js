// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

// // Step 1: Loop Through `data` and console.log each weather report object
data.forEach(function(alienReport) {
  console.log(alienReport);
});


data.forEach((alienReport) => {
  var row = tbody.append("tr");
  Object.entries(alienReport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});


//filtering
// Assign the data from `data.js` to a descriptive variable
var data = aliens;

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

 // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(data);

  var filteredData = aliens.filter(aliens => aliens.datetime === inputValue)
});