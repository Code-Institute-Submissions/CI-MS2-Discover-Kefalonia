//---------------- Navigation Menu ----------------//

$(document).ready(function() {
    $("#map-top").hover(function() {
        $("#map-top").toggleClass("top-active");    
    });
});

$(document).ready(function() {
    $("#map-bottom").hover(function() {
        $("#map-bottom").toggleClass("bottom-active");    
    });
});

//---------------- Location Arrays ---------------//

var beaches = [
    { lat: 38.322903, lng: 20.453183, name: "Fteri Beach", info: "Test"},
    { lat: 38.260949, lng: 20.376721, name: "Petani", info: "Stretching for about 850 meters and having a Blue Flag status, this is one of the most impressive Kefalonia beaches! This beach is perched in Paliki peninsula, 20km west of Argostoli, and has crystal clear waters, white sand, pebbles and a heavenly verdant backdrop."},
    { lat: 38.471623, lng: 20.562531, name: "Kimilia", info: "Test"},
    { lat: 38.466161, lng: 20.573059, name: "Empilisi", info: "Test"},
    { lat: 38.064207, lng: 20.779002, name: "Kaminia", info: "This is one of the most natural and best-loved beaches in the southern part of Kefalonia. Come here to enjoy not only a spectacular turquoise sea. Kaminia beach is a bed of golden sand to sink your toes into."},
    { lat: 38.342578, lng: 20.535872, name: "Myrtos", info: "Myrtos has been described as one of the 30 most beautiful beaches in the world. Not only is this place a very important symbol of Kefalonia but it is also one of the strips of coast that have made Greece an ideal destination for beach holidays. Located in the Pylaros region, on the north east coast, Myrtos is a breathtaking bay, enhanced by a myriad of white pebbles and sand."},
    { lat: 38.154322, lng: 20.480938, name: "Makris Gialos", info: "Just 3 kilometres from Argostoli (the capital) you come across the mesmerising beach of Makris Gialos, in the Lassi area. To be more specific, there are actually two adjacent beaches here; Platis and Makris Gialos. Golden sands, blue sea that merges into the sky along the horizon and a thick, lush vegetation that separates the coastline from the rest of the island."},
    { lat: 38.260612, lng: 20.673927, name: "Antisamos", info: "Awarded the blue flag for its clean water, Antisamos is located a few kilometres from the town of Sami and combines a spectacular sea with lush headlands which jealously guard its treasures. Well-organised, easy to reach and spangled with pure white pebbles, Antisamos was also the location for John Madden’s film “Captain Corelli's Mandolin”."},
    { lat: 38.075906, lng: 20.800971, name: "Skala", info: "Skala beach is located about 40 kilometres from Argostoli and 10 from Poros, in the Elios-Pronnoi region. Skala beach stretches for about 3 kilometres, offering soft sand, crystal clear water. This is a great beach that is also suitable for children, where they can enjoy calm waters."},
    { lat: 38.452562, lng: 20.576679, name: "Foki", info: "Test"}
];

var towns = [
    { lat: 38.1732, lng: 20.4900, name: "Argostolion", info: "Test"},
    { lat: 38.1640, lng: 20.4826, name: "Lassi", info: "Test"},
    { lat: 38.4582, lng: 20.5770, name: "Fiskardo", info: "Test"},
    { lat: 38.3782, lng: 20.5401, name: "Assos", info: "Test"},
    { lat: 38.2514, lng: 20.6472, name: "Sami", info: "Test"},
    { lat: 38.2022, lng: 20.4370, name: "Lixouri", info: "Test"},
    { lat: 38.3031, lng: 20.5978, name: "Agia Effimia", info: "Test"},
    { lat: 38.1540, lng: 20.7713, name: "Poros", info: "Test"},
    { lat: 38.0741, lng: 20.7968, name: "Skala", info: "Test"},
    { lat: 38.1162, lng: 20.6341, name: "Loudas", info: "Test"}
];

var active = [
    [38.12273,20.61336,"Sea Kayaking Kefalonia","Run by Yvonne and Pavlos, Sea Kayaking Kefalonia is a sea kayaking outfitter who organize day and multi-day kayak trips as well as sea kayak courses in the crystal clear and warm mediterranean waters of the Ionian."],
    [38.16252,20.59040,"Robola Winery","In the heart of the Robola Viticulture Zone, dozens of viticulturists from Omala and the surrounding areas (Troiannata, Vlachata, Mousata, Faraklata, Dilinata) created in 1982 the Agricultural Wine Cooperative of Producers of Robola Kefallinia but to try to protect Kefalonian vineyard."],
    [38.10546,20.53011,"Wild Nature Expeditions","Outdoor activities for all tastes skills and ages. Caving | Rock Climbing | Hiking | Canyoning | Stargazing | Mountain biking | Paragliding | Jeep Safari's"],
    [38.25702,20.62353,"Melissani Cave","Situated just outside of Sami, this natural wonder has been open to visitors since 1963, and gives you a unique view of a limestone cave holding a sunlit lake"],
    [38.21405,20.64759,"Bavarian Horse Riding","Enjoy the mountains, canyons, valleys, olive groves and the virgin nature of Kefalonia on horseback. We'll show you all these places on our sturdy, sure-footed and well trained Haflingers and Bavarian warm blood horses"]
];

let markers = [];
let map;

//-------Map Initialisation--------//
function initMap() {

    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 38.270, lng: 20.575},
        zoom: 11,
        disableDefaultUI: true,
        MapTypeID: "terrain"               
    });
}
    
//--------Place Markers for the locations of the beaches and clear out previous markers--------//
function dropOne() {
  clearMarkers();

  for (let i = 0; i < beaches.length; i++) {
    addMarkerWithTimeout(beaches[i], i * 200);
  }
}

function addMarkerWithTimeout(position, timeout) {
  window.setTimeout(() => {
    markers.push(
      new google.maps.Marker({
        position: position,
        map,
        animation: google.maps.Animation.DROP,
        icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
      })
    );
  }, timeout);
}

function clearMarkers() {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}

//--------Place Markers for the locations of the towns--------//
function dropTwo() {
    clearMarkers();

    for (let i = 0; i < towns.length; i++) {
        addMarkerWithTimeout(towns[i], i * 200);
    }
}

function addMarkerWithTimeout(position, timeout) {
    window.setTimeout(() => {
        markers.push(
        new google.maps.Marker({
            position: position,
            map,
            animation: google.maps.Animation.DROP,            
        })
    );
  }, timeout);
}

function clearMarkers() {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}
//-----------Place Activity Markers-----------------//

    $("#activities").click(function() {        
        
        for (let i = 0; i < active.length; i++) {  
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(active[i][0], active[i][1]),
                animation: google.maps.Animation.DROP,
                icon: "https://maps.google.com/mapfiles/kml/paddle/blu-stars.png",
                scale: 4,
                title: active[i][2],                
            });
            marker.setMap(map);

            google.maps.event.addListener(marker, "click", (function(marker, i) {
                return function() {
                    $(".info-heading").text(active[i][2]);
                    $(".info-text").text(active[i][3]);
                    map.setZoom(15);
                    map.setCenter(marker.getPosition());
                }
            })(marker, i));            
        }    
    });
//-----------Zooms out and recenters the map when the Zoom Out button is clicked----------------//
    $('#zoom-out').click(function() {
        map.setZoom(11);
        map.setCenter({ lat: 38.270, lng: 20.575});
    });
  
//--------Change the map zoom dependant on the device window size----------//
    var responsiveZoom = (window.innerWidth < 768) ? 7 : 11;

    window.addEventListener("resize", function() {
        if (window.innerWidth < 768) responsiveZoom = 7
        else if (window.innerWidth > 768) responsiveZoom = 11
            map.setZoom(responsiveZoom);
    });

//--------Weather Data----------//

/*


$("#activities").click(function() {        
        
        for (let i = 0; i < active.length; i++) {  
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(active[i][0], active[i][1]),
                animation: google.maps.Animation.DROP,
                icon: "https://maps.google.com/mapfiles/kml/paddle/blu-stars.png",
                scale: 4,
                title: active[i][2],                
            });
            marker.setMap(map);

            google.maps.event.addListener(marker, "click", (function(marker, i) {
                return function() {
                    $(".info-heading").text(active[i][2]);
                    $(".info-text").text(active[i][3]);
                    map.setZoom(15);
                    map.setCenter(marker.getPosition());
                }
            })(marker, i));            
        }    
    });*/