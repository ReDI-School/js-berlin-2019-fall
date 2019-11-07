<!-- .slide: id="lesson19" -->

# Basic Frontend - Fall 2019

Lesson 19, Tuesday, 2019-11-05

---

### Introducing Leaflet

* Leaflet (https://leafletjs.com/) is a neat little library to render maps
* Leaflet has a neat Quick-Start guide (https://leafletjs.com/examples/quick-start/) but uses some confusing JavaScript (chaining)
* We're providing our own template instead :)

---

### Leaflet: Steps

1. We need to include the Leaflet library and the CSS
1. We need to create a HTML `<div>` element that contains the map
1. We need to create a JavaScript `L.map` object that renders the map
1. We need to tell Leaflet where to get the map data from, using a `L.layer` object

---

### Step 1

* Include the leaflet CSS and leaflet JavaScript library in the HTML `<head>` section:

```html
<head>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css"
   integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
   crossorigin=""/>
  <script src="https://unpkg.com/leaflet@1.5.1/dist/leaflet.js"
   integrity="sha512-GffPMF3RvMeYyc1LWMHtK8EbPv0iNZ8/oTtHPx9/cc2ILxQ+u905qIwdpULaqDkyBKgOaB57QTMg7ztg8Jm2Og=="
   crossorigin=""></script>
</head>
```

---

### Step 2

* Next, we need to add an HTML `<div>` element in the HTML `<body>` that should contain the map:

```html
<div id="mapid"></div>
```

* And we need to give it some width, e.g by setting some CSS in the HTML `<head>` section:

```css
#mapid { height: 180px; }
```

---

### Step 3

* Create a map object in JavaScript. Remember - All leaflet functions are in the `L` object (namespace):

```js
// create a new map object, pass the <div> id as parameter:
let mymap = L.map('mapid');
// center it on ReDI school, zoom level 13:
mymap.setView([52.531446, 13.384752], 13);
```

---

### Step 4 - HERE Maps

* Create a Layer to tell Leaflet where to get the data from, e.g. [HERE](https://here.com) or [Mapbox](https://mapbox.com):

```js
let layer = L.tileLayer(
	"http://1.base.maps.cit.api.here.com/maptile/2.1/maptile/newest/normal.day/{z}/{x}/{y}/256/png8?app_id=XXX&app_code=XXX"
);
layer.addTo(mymap);
```

---

### Step 4 - Mapbox

```js
let layer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: 'your.mapbox.access.token'
});
layer.addTo(mymap);
```

---

### Try it out

You can copy paste our code to your machine to try it out:

https://github.com/ReDI-School/js-berlin-2019-fall/tree/master/19_leaflet1

The access tokens are on the slack channel. If you want to create your own, visit https://www.mapbox.com/studio/account/tokens/ for Mapbox or https://developer.here.com/ for HERE (free registration required)

---

### What now?

You should see a map, centered at ReDI school. Using the `setView` function, you can scroll the map to any location.

You can add markers to the map:

```js
let marker = L.marker([52.531446, 13.384752]);
marker.addTo(mymap);
```

Can you add a marker to where you live?

---

### Popups

You can also assign popups to markers:

```js
marker.bindPopup("<b>ReDI School</b><br>This is ReDI!")
```

Can you add a popup with a fun message to your marker?

---

### Combining APIs

Remember the BVG API?

```js
let url = "https://1.bvg.transport.rest/journeys?from=900000007104&to=900000100003&bus=false&tickets=false"
```

Can you place markers at the legs of the route?

---

### BONUS: restcountries

Remember [restcountries.eu](https://restcountries.eu) ?

Can you fetch infos about a country and zoom your map to the `latlng` of that country?
