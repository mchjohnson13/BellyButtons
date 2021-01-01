const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(spaceXResults =>
    {console.log(spaceXResults.map(lati => lati.location.latitude,long => long.location.longitude))});

