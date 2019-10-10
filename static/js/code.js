var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
});

var layers = {
  ZIPMARKERS: new L.LayerGroup()
};

// Create the map with our layers
var map = L.map("map-id", {
  center: [34.0522, -118.2437],
  zoom: 13,
  layers: [
    layers.ZIPMARKERS
  ]
});

// Add our 'lightmap' tile layer to the map
lightmap.addTo(map);

// Initialize an object containing icons for each layer group
var icons = {
  ZIPMARKERS: L.ExtraMarkers.icon({
    icon: "ion-settings",
    iconColor: "white",
    markerColor: "yellow",
    shape: "star"
  })
};


// function rent_compare( a, b ) {
//   if ( a.Gross_Rent < b.Gross_Rent ){
//     return 1;
//   }
//   if ( a.Gross_Rent > b.Gross_Rent ){
//     return -1;
//   }
//   return 0;
// }


// //console.log(citieslatlong[0]);
// // When the first API call is complete, perform another call to the Citi Bike Station Status endpoint
d3.json("../../db/gentrification_Clean.json", function(neighborhood) {
      
   d3.json("../../db/newZips.json", function(cities) {
  
    for(var i = 0; i < 20; i++)
    {
      var obj = cities.filter(d => d.fields.zip == neighborhood[i].zipcode)[0].fields;

      // Create a new marker with the appropriate icon and coordinates
      var newMarker = L.marker([obj.latitude, obj.longitude]
    );
      console.log(newMarker);
      newMarker.addTo(layers["ZIPMARKERS"]);

    }
  });
  });

   /*
  var zipcode = zipcode;
    var stationStatus = statusRes.data.stations;
    var stationInfo = infoRes.data.stations;

    // Create an object to keep of the number of markers in each layer
    var stationCount = {
      COMING_SOON: 0,
      EMPTY: 0,
      LOW: 0,
      NORMAL: 0,
      OUT_OF_ORDER: 0

var url = "";

d3.json(url, function(response) {

  console.log(response);

  

});
*/