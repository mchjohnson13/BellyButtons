var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse();

var topFiveCities = sortedCities.slice(0,5);

var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: { title: "City" },
    yaxis: { title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);


var sortedPop = cityGrowths.sort((a,b) =>
a.population - b.population).reverse();
  
var topFivePop = sortedPop.slice(0,5);

var topFivePopNames = topFivePop.map(city => city.City);
var topFiveCityPop = topFivePop.map(city => parseInt(city.population));

var trace = {
    x: topFivePopNames,
    y: topFiveCityPop,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Highest Population Cities",
    xaxis: { title: "City" },
    yaxis: { title: "Population, 2016-2017"}
  };
  Plotly.newPlot("bar-plot_2", data, layout);