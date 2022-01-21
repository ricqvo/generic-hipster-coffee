
// Basic structure
var map = L.map('map').setView([37.7771474, -122.4228755,18.56], 20);






// Layer with api key
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidmlydXVzeGQzMSIsImEiOiJja3lvOG96YjkzeHlhMnhwYm1nMG13MmtwIn0.0p_PhRxEEzBv0ugMdyvisg'
}).addTo(map);