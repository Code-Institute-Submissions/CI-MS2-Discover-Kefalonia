//---Page Transition----//
$("#explore").click(function() {
    location.href = "map.html";
});

//---------------- Google Maps ---------------//

var beaches = [
    [38.322903,20.453183],
    [38.260949,20.376721],
    [38.471623,20.562531],
    [38.466161,20.573059],
    [38.064207,20.779002],
    [38.342578,20.535872],
    [38.154322,20.480938],
    [38.260612,20.673927],
    [38.075906,20.800971],
    [38.452562,20.576679],
];

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: new google.maps.LatLng(38.28109,20.48000),
        zoom: 11,
        mapID: "ceb61baad4160370",        
    });

    var infowindow = new google.maps.InfoWindow;

    for (let i = 0; i < beaches.length; i++) {  
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(beaches[i][0], beaches[i][1]),
            icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
            map: map
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(beaches[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}
    

/*for (let i = 0; i < beaches.length; i++) {
  addMarker(beaches);
  console.table(beaches);
}*/

/*const marker = new google.maps.Marker({
        position: {lat: 38.342578, lng: 20.535872},    
        animation: google.maps.Animation.DROP,
        map: map,            
        icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    });
}*/

/*var beaches = [
    {lat: 38.322903, lng: 20.453183},
    {"lat": 38.260949, "lng": 20.376721,},
    {"lat": 38.471623, "lng": 20.562531,},
    {"lat": 38.466161, "lng": 20.573059,},
    {"lat": 38.064207, "lng": 20.779002,},
    {"lat": 38.342578, "lng": 20.535872,},
    {"lat": 38.154322, "lng": 20.480938,},
    {"lat": 38.260612, "lng": 20.673927,},
    {"lat": 38.075906, "lng": 20.800971,},
    {"lat": 38.452562, "lng": 20.576679,},
];
    
   var myMark = {"lat": 38.342578, "lng": 20.535872,};*/
