<!-- .slide: id="lesson17" -->

# Basic Frontend - Fall 2019

Lesson 17, Tuesday, 2019-10-28

---

### Recap

What did we learn last time?

 * JSON
 * fetch and APIs
 * async / await


---

What will we learn today?

 * API: GET Parameters
 * API: External Libraries

---

Yuppy! Who does not love Berlin:

... using the beloved BVG REST API:

https://2.bvg.transport.rest

---

### API: GET Parameters

GET parameters are used in API call just like arguments are used in functions.

---

Local/Client Implementation

```js

// locations of BVG stations by name
function getLocations(name){
  // logic to retrive the location
  // ...
  // ...
  return location
}

let locations = getLocations("Nordbahnhof")
```

---

API Request

```js

// locations of BVG stations by name
// https://2.bvg.transport.rest/locations?query=Nordbahnhof


let locations = await fetch("https://2.bvg.transport.rest/locations?query=Nordbahnhof")
```

