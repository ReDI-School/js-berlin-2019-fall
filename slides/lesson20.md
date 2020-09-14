<!-- .slide: id="lesson20" -->

# Basic Frontend - Fall 2019

Lesson 20, Thursday, 2019-11-07

---

### Recap: What did we learn last time?

 * **JSON**
 * **fetch()** and **APIs**
 * ```async / await```

---

### fetch

* “Fetch” means “Go and get something”
* Easily get data from the internet

---

### HTTP(S) Request URLs

```js
'https://www.example.com/api.php?name1=value1&name2=value2'
```

---

### What is that?

```js
'https://www.example.com/api.php'
```
* The path to the API

```js
'?'
```
* Start of the query parameters

```js
'name1=value1&name2=value2'
```
* query parameters


---

### Task
Create a page that takes a search term from the user and searches for it in Wikipedia using Wikipedia’s API, then displays the results of the search to the user.

---

### part 1
Create a simple page with an input field and a button to search


---

### part 2

Try to understand how does the Wikipedia API works.

This time you have to search for everything you need, you don't need us anymore!


Console.log the output of `fetch` to see what it contains

---

### part 3

Take the user input and search for it using the Wikipedia API
<!-- Checkout the [Wikipedia API Tutorial page](https://www.mediawiki.org/wiki/API:Tutorial) -->


---

### part 4

Render the results, get wild!
