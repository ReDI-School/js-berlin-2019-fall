let inputField = document.getElementById('keyword');
let searchButton = document.getElementById('searchButton');

async function getFromWikipedia() {
  let response = await fetch('https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=' + encodeURIComponent(inputField.value));
  let data = await response.json();
  console.log(data);


  for (let result of data.query.search) {
    let div = document.createElement('div');
    document.body.appendChild(div);

    let anchor = document.createElement('a');
    anchor.href = 'https://en.wikipedia.org/?curid=' + result.pageid;
    anchor.textContent = result.title;
    div.appendChild(anchor);
  }
}
