const card = document.getElementById('card');

card.innerText = "Hello this is some text!"

//simple get request using
fetch("https://www.boredapi.com/api/activity/")
    .then((response) => response.json()) //resolves the json object from the fetch promise
    .then((data) => card.innerText = data.activity