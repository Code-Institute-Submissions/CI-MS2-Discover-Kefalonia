//---Navbar Transparency (https://bootstrapious.com/p/transparent-navbar)----//

$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});

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
        center: { lat: 38.28109, lng: 20.48903 },
        zoom: 11,        
    });   
}