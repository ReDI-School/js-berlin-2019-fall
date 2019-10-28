<!-- .slide: id="lesson16" -->

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

```js
function getS
```

---

### APIs

An API tells you what data you can give it, and what data it will give you back.

In our course, all the APIs we will be using are basically some servers on the internet.

We can connect to these servers using links or URLs.

```js
let apiLink = 'https://randomuser.me/api/';
```

---


### Exercise


Read about the API at https://randomuser.me/

* how can I get 50 people at once?

---


### fetch

So, we have these servers that can give us something we need, how can we get the data?

we use `fetch`:

```js
let response = await fetch('https://randomuser.me/api/');
let data = await response.json();
console.log(data);
```

---


### async, await

Unfortunately, the internet is quite slow and unreliable, that is why the data we requested using `fetch` are not delivered immediately. There are two keywords that help us with this.


`await`: I want for JavaScript to wait for something...

`async`: A function does something that is gonna take a while to finish and I don't know how much

---

We can only use `await` in functions that are defined as `async`

```js
// A function does something that is gonna take a while to finish
// and I don't know how much
async function downloadData(url){

  // I want JavaScript to wait for the `fetch`
  let response = await fetch(url);

  // I want JavaScript to wait for the conversion to json
  let data = await response.json();

  return data;
}
```


---

But don't forget, now your function `downloadData` is `async`, which means when you need the data directly, you have to `await` it.

```js
async function downloadData(url){
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

// this also has to be async, because we are calling await
async function getAndRender(){
  let data = await downloadData('http://some.url/some/path');
  render(data);
}
//....
```

---


Let us put all of this stuff together.


---

### Exercise

* Visit https://randomuser.me/api/ in your browser.
* Check the returned JSON - what fields does it have? What is an array, what is an object?
* Now get that object using JavaScript.
* Show the most important data of your fetched object to the user.
* Create a button, that will fetch a new random user every time you click it. Make sure you render the changes to the user.
