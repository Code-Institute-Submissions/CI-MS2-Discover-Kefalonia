//---Page Transition----//
document.getElementById("explore").onclick = function() {
    location.href="map.html";
};


//--------------- Weather Data Script ----------//

//function getData(url, cb) {
//    var xhr = new XMLHttpRequest();
//
//    xhr.open("GET", "https://www.ncdc.noaa.gov/cdo-web/api/v2/locations");
//    xhr.send();
//
//    xhr.onreadystatechange = function() {
//        if (this.readyState == 4 && this.status == 200) {
//           cb(JSON.parse(this.responseText));
//        }
//    };
//}

//function printDataToConsole(data) {
//    console.log(data);
//}

//getData(printDataToConsole);

//---------------- Google Maps ---------------//

let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 38.28109, lng: 20.48000 },
        zoom: 11,        
    });   
}