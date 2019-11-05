// create a new map object, pass the <div> id as parameter:
let mymap = L.map('mapid');
// center it on ReDI school, zoom level 13:
mymap.setView([52.531446, 13.384752], 13);

// create a new layer using Mapbox
// let layer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
// 	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
// 	maxZoom: 18,
// 	id: 'mapbox.streets',
// 	accessToken: 'your.mapbox.access.token'
// });

// - or - create a new Layer using HERE:
let layer = L.tileLayer(
	"http://1.base.maps.cit.api.here.com/maptile/2.1/maptile/newest/normal.day/{z}/{x}/{y}/256/png8?app_id=XXX&app_code=XXX"
);

// add the new layer to the map:
layer.addTo(mymap);

let marker = L.marker([52.531446, 13.384752]);
marker.addTo(mymap);

marker.bindPopup("<b>ReDI School</b><br>This is ReDI!")
