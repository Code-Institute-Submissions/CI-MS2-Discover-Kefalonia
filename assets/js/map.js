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
    [38.452562,20.576679]
];

var towns =  [
    [38.1732,20.4900],
    [38.1640,20.4826],
    [38.4582,20.5770],
    [38.3782,20.5401],
    [38.2514,20.6472],
    [38.2022,20.4370],
    [38.3031,20.5978],
    [38.1540,20.7713],
    [38.0741,20.7968],
    [38.1162,20.6341]
];

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

var map;
const kefalonia_bounds = {
  north: 38.495,
  south: 38.045,
  west: 20.320,
  east: 20.830,
};

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: new google.maps.LatLng(38.270,20.575),
        restriction: {
            latLngBounds: kefalonia_bounds,
            strictBounds: false,
        },
        zoom: 11,
        disableDefaultUI: true,
        MapTypeID: "terrain",
        Styles: customMapStyles       
    });

     $('#beaches').click(function() {
        
        var infowindow = new google.maps.InfoWindow;

        for (let i = 0; i < beaches.length; i++) {  
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(beaches[i][0], beaches[i][1]),
                animation: google.maps.Animation.DROP,
                icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
                map: map
            });

            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    infowindow.setContent(beaches[i][0]);
                    infowindow.open(map, marker);
                }
            })(marker, i));

            /*google.maps.event.addListener(beachMarker, 'click', function() {
            beachMarker.setVisible(false);
            });*/
        }
    
    });

    $('#towns').click(function() {
        
        var infowindow = new google.maps.InfoWindow;

        for (let i = 0; i < towns.length; i++) {             
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(towns[i][0], towns[i][1]),
                animation: google.maps.Animation.DROP,
                //icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
                map: map
            });
            
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    infowindow.setContent(towns[i][0]);
                    infowindow.open(map, marker);
                }
            })(marker, i));
        }
    });    
}


