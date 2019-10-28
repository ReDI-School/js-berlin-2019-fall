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

Yuppy! So who does not love the ...

... **Berlin Public Transportation System**.


---

p.s. They have an API

https://1.bvg.transport.rest


---

### API: GET Parameters

GET parameters are used in API call just like arguments are used in functions.

---

Local/Client Implementation

```js

// locations of BVG stations by name
function getLocations(name){
  // logic to retrieve the location
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
// https://1.bvg.transport.rest/locations?query=Nordbahnhof

let locations = await fetch("https://1.bvg.transport.rest/locations?query=Nordbahnhof")
```

---

**GET parameters** can be used to query API's.

In order to know which GET parameter can be used we neeed to 
check the **API specification**. 

---

BVG API Specifications:
https://github.com/derhuerst/bvg-rest/blob/master/docs/index.md

---

Exercise 1: Get the station ID for **Nordbahnof** from the API.

---

Exercise 2: Use the BVG api to find out the duration of a journey 
from **Nordbahnof** to **U. Bernauerstrase** by tram.

---

```
let url = https://1.bvg.transport.rest/journeys?from=900000007104&to=900000100003&results=3&bus=false&tickets=true

```

---

Exercise 3: Implement a simple html form with:
1. An origin field
2. An destination field
3. A submit button: when clicked it will dispaly the duration of a journey between the origin and the destination
by tram. 

*Note: destination and origin are fields that will receive the ID of the station.*
---





