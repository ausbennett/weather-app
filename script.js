const card = document.getElementById('card');

card.innerText = "Hello this is some text!"

//simple get request for open-meteo
fetch("https://api.open-meteo.com/v1/forecast?latitude=43.27&longitude=-79.92&hourly=temperature_2m")
    .then((response) => response.json()) //resolves the json object from the fetch promise
    .then((data) => console.log(data)); // log the response object for now

//test button
document.getElementById('btn1').addEventListener("click", () => {
    window.alert("CLICKED")
})