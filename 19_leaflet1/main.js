// create a new map object, pass the <div> id as parameter:
let mymap = L.map('mapid');
// center it on ReDI school, zoom level 13:
mymap.setView([52.531446, 13.384752], 13);

// create a new layer
let layer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: 'your.mapbox.access.token'
});
// add the new layer to the map:
layer.addTo(mymap);
