//---------------- Navigation Menu Items ----------------//

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
    [38.322903, 20.453183, "Fteri", "Fteri beach is heaven! Turquoise waters, amazing dramatic coastline, unique scenery, all combined create a magical environment that you should not miss.This is one of the most beautiful and hidden beaches of Kefalonia, near Lixouri city. Equip yourself with umbrella & bottles of water because the beach is completely devoid of services.", "<img src='assets/img/beaches/beach-fteri.jpg' alt='Fteri beach'>"],
    [38.260949, 20.376721, "Petani", "Stretching for about 850 meters and having a Blue Flag status, this is one of the most impressive Kefalonia beaches! This beach is perched in Paliki peninsula, 20km west of Argostoli, and has crystal clear waters, white sand, pebbles and a heavenly verdant backdrop.", "<img src='assets/img/beaches/beach-petani.jpg' alt='Petani beach'>"],
    [38.47161, 20.54846, "Dafnoudi", "Hidden at the very northern tip of Kefalonia, Dafnoudi beach is a secluded gem. Accessible only on foot, the walk down the valley is beautiful and dramatis as you emerge from the trees onto the pebbly beach. Just be aware that because of its seclusion the beach is popular with naturists!", "<img src='assets/img/beaches/beach-dafn.jpg' alt='Dafnoudi beach'>"],
    [38.466161, 20.573059, "Emplisi", "Emplisi lies in a very beautiful bay with crystal clear blue-green water a few kilometres from Fiskardo. The beach consists of white pebbles. If you like to snorkel, you can do it among the rocks. The water that surrounds Emplisi are among the clearest on the whole island", "<img src='assets/img/beaches/beach-emplisi.jpg' alt='Emplisi beach'>"],    
    [38.342578, 20.535872, "Myrtos", "Myrtos has been described as one of the 30 most beautiful beaches in the world. Not only is this place a very important symbol of Kefalonia but it is also one of the strips of coast that have made Greece an ideal destination for beach holidays. Located in the Pylaros region, on the north east coast, Myrtos is a breathtaking bay, enhanced by a myriad of white pebbles and sand.", "<img src='assets/img/beaches/beach-myrtos.jpg' alt='Myrtos beach'>"],
    [38.154322, 20.480938, "Makris Gialos", "Just 3 kilometres from Argostoli (the capital) you come across the mesmerising beach of Makris Gialos, in the Lassi area. To be more specific, there are actually two adjacent beaches here; Platis and Makris Gialos. Golden sands, blue sea that merges into the sky along the horizon and a thick, lush vegetation that separates the coastline from the rest of the island.", "<img src='assets/img/beaches/beach-makris.jpg' alt='Makris Gialos beach'>"],
    [38.260612, 20.673927, "Antisamos", "Awarded the blue flag for its clean water, Antisamos is located a few kilometres from the town of Sami and combines a spectacular sea with lush headlands which jealously guard its treasures. Well-organised, easy to reach and spangled with pure white pebbles, Antisamos was also the location for John Madden’s film “Captain Corelli's Mandolin”.", "<img src='assets/img/beaches/beach-anti.jpg' alt='Antisamos beach'>"],
    [38.075906, 20.800971, "Skala", "Skala beach is located about 40 kilometres from Argostoli and 10 from Poros, where you have a bonafide Blue Flag beauty. Big enough to cater for moments of sandy solitude as well as action-packed activities, holiday makers can go from cave explorations to buzzing hotspots in a matter of strides.", "<img src='assets/img/beaches/beach-skala.jpg' alt='Skala beach'>"],
    [38.452562, 20.576679, "Foki", "Foki beach is a beautiful inlet just south of Fiskardo. This is a small beach with white pebbles surrounded by olive trees, which  offer some natural shade and there are some interesting caves and coves on the right side of the beach to explore. It’s definitely one of the more picturesque beaches in Kefalonia so remember to bring your camera with you.", "<img src='assets/img/beaches/beach-foki.jpg' alt='Foki beach'>"],
    [38.16058, 20.41527, "Xi", "This 3km Blue Flag beauty is accessorised with striking red sands and white clay cliffs. Xi's answer to a free spa treatment, the natural clays offer an all-over body mask while you sunbathe. A fantastic, family-friendly option for a day spent on the sand, the warm shallows invite little water babies to splash around safely.", "<img src='assets/img/beaches/beach-xi.jpg' alt='Xi beach'>"]
];

var towns = [
    [38.1732, 20.4900, "Argostolion", "The modern cosmopolitan capital city (more like a large town) is a lively place with good nightlife that combines tourism and local life with plenty to offer culture vultures. Visitors can enjoy a walk alkong the palm lined waterfront promenade, and enjoy a meal in one of the many bars and tavernas. Don't miss the Loggerhead turtles which feed in Koutavos lagoon."],
    [38.1640, 20.4826, "Lassi", "Located just 6km from the airport and 3km from the capital city of Argostoli (aka Argostolion) this bustling South coast resort village is popular with first time visitors to the island. It has numerous hotels and self-catering apartments to choose from plus a mile long stretch of tavernas, cafes, bars, souvenir shops, mini markets, and car rental and excursion offices."],
    [38.4582, 20.5770, "Fiskardo", "This former fishing village on the North end of Kefalonia has become an upmarket holiday resort and is a true gem of a place. Its backstreets contain old pastel-painted Venetian buildings. A selection of modern cafes, bars, and boutique shops can be found in the new section, and the harbour is packed full of yachts as well as traditional fishing boats."],
    [38.3782, 20.5401, "Assos", "This tiny secluded village with its colourful houses nestled on the craggy hillside of a picturesque peninsula is surrounded by pine and cypress trees and is ideal for couples who seek downtime to rest, relax, and recuperate on a romantic getaway, purposefully seeking a place without any nightlife."],
    [38.2514, 20.6472, "Sami", "This large and lively modern coastal town is what you might call a ‘real Greek town’ enabling tourists to have a pleasant stay and locals to go about daily life. Modern as well as traditional cafes, bars, and tavernas can be found on the harbour where the fishermen still unload their catch of the day."],
    [38.2022, 20.4370, "Lixouri", "Kefalonia’s second largest city feels a bit more upmarket than Argostoli and is very picturesque with its tree-lined streets and small bridges that allow the stream that splits the city in two to be crossed.Lixouri provides a little something for everyone whether staying in a hotel, a small studio apartment, or larger holiday villa."],
    [38.3031, 20.5978, "Agia Effimia", "Agia Efimia is a picturesque coastal village 31.5 km northeast of Argostoli. It lies around the natural bay and it is home to a small and lovely port where fishing and excursion boats moor. Those with access to a boat should definitely explore its pristine isolated beaches and stunning coves."],
    [38.1540, 20.7713, "Poros", "Located on the south east of the island, it is surrounded by green forests and nestled between Mount Atros and Mount Pahni. Picturesque Poros is a working port divided into 3 bays with an old harbour and new harbour. Poros is good for independent travellers whether backpackers on a budget or older couples who enjoy nature and walking."],
    [38.0741, 20.7968, "Skala", "The most popular holiday resort on the island, the lively yet lovely South coast village of Skala provides couples and families with a typical beach resort holiday whilst still retaining some of its original Greek charm. A well-organized beach is backed by a pine forest and is covered in sandy shingle with lots of rock formations."],
    [38.1157, 20.5223, "Svoronata", "This traditional village in the South West has managed to combine its old world charm with tourism. Despite being close to the airport, it has not become an overly developed resort and allows visitors to enjoy a peaceful holiday in picturesque surroundings."]
];

var active = [
    [38.12273, 20.61336, "Sea Kayaking Kefalonia", "Run by Yvonne and Pavlos, Sea Kayaking Kefalonia is a sea kayaking outfitter who organize day and multi-day kayak trips as well as sea kayak courses in the crystal clear and warm mediterranean waters of the Ionian."],
    [38.16252, 20.59040, "Robola Winery", "In the heart of the Robola Viticulture Zone, dozens of viticulturists from Omala and the surrounding areas (Troiannata, Vlachata, Mousata, Faraklata, Dilinata) created in 1982 the Agricultural Wine Cooperative of Producers of Robola Kefallinia but to try to protect Kefalonian vineyard."],
    [38.10546, 20.53011, "Wild Nature Expeditions", "Outdoor activities for all tastes skills and ages. Caving | Rock Climbing | Hiking | Canyoning | Stargazing | Mountain biking | Paragliding | Jeep Safari's"],
    [38.25702, 20.62353, "Melissani Cave","Situated just outside of Sami, this natural wonder has been open to visitors since 1963, and gives you a unique view of a limestone cave holding a sunlit lake"],
    [38.21405, 20.64759, "Bavarian Horse Riding","Enjoy the mountains, canyons, valleys, olive groves and the virgin nature of Kefalonia on horseback. We'll show you all these places on our sturdy, sure-footed and well trained Haflingers and Bavarian warm blood horses"]
];

//var marker, i;
var markers = [];
var map;   

//-------Map Initialisation--------//
function initMap() {

    map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 38.270, lng: 20.575},
        zoom: 11,        
        MapTypeID: "satellite"               
    });    

var infowindow = new google.maps.InfoWindow();

var marker, i;
var markers = [];

//--------Place Markers for the locations of the beaches and clear out previous markers--------//

$("#beaches").click(function() {
    clearMarkers();

    for (let i = 0; i < beaches.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(beaches[i][0], beaches[i][1]),
            animation: google.maps.Animation.DROP,
            icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
            title: beaches[i][2],
            map: map
        });

        markers.push(marker);
        
        google.maps.event.addListener(marker,"click", (function(marker, i) {
            return function() {                
                $(".info-heading").text(beaches[i][2]);
                $(".info-text").text(beaches[i][3]);
                $("#img-box").html(beaches[i][4]).style.objectFit = "contain";
                map.setZoom(15);
                map.setCenter(marker.getPosition());
            }
        })(marker, i));
    }
})

function clearMarkers() {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}
    
//--------Place Markers for the locations of the towns and clear out previous markers--------//

$("#towns").click(function() {
    clearMarkers();

    for (let i = 0; i < towns.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(towns[i][0], towns[i][1]),
            animation: google.maps.Animation.DROP,            
            title: towns[i][2],
            map: map
        });

        markers.push(marker);

        google.maps.event.addListener(marker,"click", (function(marker, i) {
            return function() {                
                $(".info-heading").text(towns[i][2]);
                $(".info-text").text(towns[i][3]);
                map.setZoom(15);
                map.setCenter(marker.getPosition());
            }
        })(marker, i));
    }
})

function clearMarkers() {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}
//-----------Place Activity Markers and clear out old markers-----------------//

$("#activities").click(function() {
    clearMarkers();

    for (let i = 0; i < active.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(active[i][0], active[i][1]),
            animation: google.maps.Animation.DROP,            
            title: active[i][2],
            map: map
        });

        markers.push(marker);
//------------ Renders title and text into the html window and zooms into the marker position-------------//
        google.maps.event.addListener(marker,"click", (function(marker, i) {
            return function() {                
                $(".info-heading").text(active[i][2]);
                $(".info-text").text(active[i][3]);
                map.setZoom(15);
                map.setCenter(marker.getPosition());
            }            
        })(marker, i));
    }
})

function clearMarkers() {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}

//-------Zoom out & Recenter when clicking the Zoomout button----------//

$("#zoom-out").click(function() {
    console.log("click");
    map.setZoom(11);
    map.setCenter({lat: 38.270, lng: 20.575});
})

//--------Change the map zoom dependant on the device window size----------//
    var responsiveZoom = (window.innerWidth < 768) ? 7 : 11;

    window.addEventListener("resize", function() {
        if (window.innerWidth < 768) responsiveZoom = 10
        else if (window.innerWidth > 768) responsiveZoom = 11
            map.setZoom(responsiveZoom);
    });  

}
//--------Weather Data----------//

