//---------------- Location Arrays ---------------//

var beaches = [
    [38.322903,20.453183,"Fteri Beach",""],
    [38.260949,20.376721,"Petani","Stretching for about 850 meters and having a Blue Flag status, this is one of the most impressive Kefalonia beaches! This beach is perched in Paliki peninsula, 20km west of Argostoli, and has crystal clear waters, white sand, pebbles and a heavenly verdant backdrop."],
    [38.471623,20.562531,"Kimilia","Test"],
    [38.466161,20.573059,"Empilisi","Test"],
    [38.064207,20.779002,"Kaminia","This is one of the most natural and best-loved beaches in the southern part of Kefalonia. Come here to enjoy not only a spectacular turquoise sea. Kaminia beach is a bed of golden sand to sink your toes into."],
    [38.342578,20.535872,"Myrtos","Myrtos has been described as one of the 30 most beautiful beaches in the world. Not only is this place a very important symbol of Kefalonia but it is also one of the strips of coast that have made Greece an ideal destination for beach holidays. Located in the Pylaros region, on the north east coast, Myrtos is a breathtaking bay, enhanced by a myriad of white pebbles and sand."],
    [38.154322,20.480938,"Makris Gialos","Just 3 kilometres from Argostoli (the capital) you come across the mesmerising beach of Makris Gialos, in the Lassi area. To be more specific, there are actually two adjacent beaches here; Platis and Makris Gialos. Golden sands, blue sea that merges into the sky along the horizon and a thick, lush vegetation that separates the coastline from the rest of the island."],
    [38.260612,20.673927,"Antisamos","Awarded the blue flag for its clean water, Antisamos is located a few kilometres from the town of Sami and combines a spectacular sea with lush headlands which jealously guard its treasures. Well-organised, easy to reach and spangled with pure white pebbles, Antisamos was also the location for John Madden’s film “Captain Corelli's Mandolin”."],
    [38.075906,20.800971,"Skala","Skala beach is located about 40 kilometres from Argostoli and 10 from Poros, in the Elios-Pronnoi region. Skala beach stretches for about 3 kilometres, offering soft sand, crystal clear water. This is a great beach that is also suitable for children, where they can enjoy calm waters."],
    [38.452562,20.576679,"Foki","Test"]
];

var towns =  [
    [38.1732,20.4900,"Argostolion","Test"],
    [38.1640,20.4826,"Lassi","Test"],
    [38.4582,20.5770,"Fiskardo","Test"],
    [38.3782,20.5401,"Assos","Test"],
    [38.2514,20.6472,"Sami","Test"],
    [38.2022,20.4370,"Lixouri","Test"],
    [38.3031,20.5978,"Agia Effimia","Test"],
    [38.1540,20.7713,"Poros","Test"],
    [38.0741,20.7968,"Skala","Test"],
    [38.1162,20.6341,"Loudas","Test"]
];

//--------- Google Maps --------//

var customMapStyles = [
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {"visibility": "off"}
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
]



//-------Map Initialisation--------//
function initMap() {

    var center = new google.maps.LatLng(38.270,20.575);

    const map = new google.maps.Map(document.getElementById("map"), {
        center: center,
        zoom: 11,
        disableDefaultUI: true,
        MapTypeID: "terrain",
        Styles: customMapStyles       
    });
//--------Change the map zoom dependant on the device window size----------//
    var responsiveZoom = (window.innerWidth < 768) ? 7 : 11;

    window.addEventListener("resize", function() {
        if (window.innerWidth < 768) responsiveZoom = 7
        else if (window.innerWidth > 768) responsiveZoom = 11
            map.setZoom(responsiveZoom);
    });

//--------Place Markers for the locations of the beaches--------//
    $('#beaches').click(function() {        

        for (let i = 0; i < beaches.length; i++) {  
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(beaches[i][0], beaches[i][1]),
                animation: google.maps.Animation.DROP,
                icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
                title: beaches[i][2],
                map: map
            });
            google.maps.event.addListener(marker, "click", (function(marker, i) {
                return function() {
                    $(".info-heading").text(beaches[i][2]);
                    $(".info-text").text(beaches[i][3]);
                    map.setZoom(15);
                    map.setCenter(marker.getPosition());
                }
            })(marker, i));                    
        }    
    });

//--------Place Markers for the locations of the towns--------//
    $('#towns').click(function() {    
        
        function clearMarkers() {
        setMapOnAll(null);
}

        for (let i = 0; i < towns.length; i++) {             
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(towns[i][0], towns[i][1]),
                animation: google.maps.Animation.DROP,
                //icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
                title: towns[i][2],
                map: map
            });
            google.maps.event.addListener(marker, "click", (function(marker, i) {
                return function() {
                    $(".info-heading").text(towns[i][2]);
                    $(".info-text").text(towns[i][3]);
                    map.setZoom(15);
                    map.setCenter(marker.getPosition());                    
                }
            })(marker, i));                    
        }      
    });
//-----------Zooms out and recenters the map when the Zoom Out button is clicked----------------//
    $('#zoom-out').click(function() {
        map.setZoom(11);
        map.setCenter(center);
    });
}  

    
//--------GSAP Animations--------//

gsap.from(".map-control", {duration: 2, opacity: 0, transform: "translateY(15vh)", stagger: 0.3}); 