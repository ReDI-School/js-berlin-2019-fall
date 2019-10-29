<!-- .slide: id="lesson17" -->

# Basic Frontend - Fall 2019

Lesson 17, Tuesday, 2019-10-28

---

### Recap: What did we learn last time?

 * **JSON**
 * **fetch()** and **APIs**
 * ```js async / await```


---

### What will we learn today?

 * API: **GET Parameters**
 * API: **External Libraries**

---

Yuppy! So who does not **LOVE** the ...

... **Berlin Public Transportation System**.


---

p.s. They have an **API**:

https://1.bvg.transport.rest


---

### API: GET Parameters

**GET parameters** are used in an **API** call just like **arguments** are used in **functions**.

---

### Local/Client Implementation

```js

// locations of BVG stations by name
function getLocations(name){
  // logic to retrieve the location
  // ...
  // ...
  return location
}

let locations = getLocations("Berlin Nordbahnhof")
```

---

### Encoding URL Parameters

Special charaters have to be encoded when used in query parameters.

```js
  // encoding a sample query
  encodeURIComponent("Berlin Nordbahnhof") 
  // "Berlin%20Nordbahnhof"

```

*"...safe and secure format that can be transmitted over the internet"*

---

### API Request

```js

// locations of BVG stations by name
let baseUrl = "https://1.bvg.transport.rest/locations?query="

// encoding needed because of the white space
let getQuery = encodeURIComponent("Berlin Nordbahnhof") 
// "Berlin%20Nordbahnhof"

// locations api request
let locations = await fetch(baseUrl + getQuery)
```

---

**GET parameters** can be used to query **API's**.

In order to know which GET parameter can be used we neeed to 
check the **API specification**. 

---

**BVG API** Specifications:
https://github.com/derhuerst/bvg-rest/blob/2/docs/index.md


---

### Intro: External Libraries

- import scripts from **"outside"**
- **reuse logic** from other developers


---


*Life is all about **Moment(s).js** .*


---


[### Moment.js](https://momentjs.com/)

Parse, validate, manipulate, and display **dates** and **times** in JavaScript.


---


```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.js"></script>
<script>
    console.log("No format: " + "1995-12-25");
    console.log("With format: " + moment("1995-12-25").format("MMM-Do-YYYY"));
</script>
```


---


## Practice Time!


---

Exercise 1: Get the station **ID** for **Nordbahnhof** 
from the BVG API.

---

Exercise 2: Use the BVG API to find out 
the **duration of a journey** from **Berlin Nordbahnhof** 
to **U. Bernauer Straße** by **tram**. 

*Hint: get the departure and arrival time date and substract it using moment.js.*

---

```js
let url = https://1.bvg.transport.rest/journeys?from=900000007104&to=900000100003&bus=false&tickets=false

```

---

### Homework

Implement a simple **HTML form** with:
1. An **origin** field
2. A **destination** field
3. A **submit button**: when clicked it will display the duration of a journey between the origin and the destination by **tram**. 

---

### Homework

*Note: destination and origin are fields that will receive the ID of the station.*







