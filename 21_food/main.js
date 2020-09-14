let apiKey = ""; // ADD YOUR API KEY HERE

let baseUrl = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=" + apiKey;

let ingredients = [ "butter", "milk", "cheese", "ketchup" ];

async function doRequest() {


    // NOTE - spoonacular only allows a few requests per day.
    // Thus, use a sample reply for playing around.

    /*
    let response = await fetch(baseUrl + "&ingredients=" + encodeURIComponent(ingredients.join(",")));
    let reply = await response.json();
    */

    for (let recipe of reply) {
        console.log(recipe.title);
    }
}

doRequest();
