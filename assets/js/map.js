//================== Navigation Menu Items ================//

$(document).ready(function() {
  $("#map-top").hover(function() {
    $("#map-top").toggleClass("top-active");
  });
  $("#map-bottom").hover(function() {
    $("#map-bottom").toggleClass("bottom-active");
  });

  //========= About Data (starting information on Map page)=====================//

  function aboutText() {
    $(".info-heading").html("<h3>A Brief Guide to Kefalonia</h3>");
    $(".info-text").text("The stunning island of Kefalonia is one of the lar" +
      "gest and most beautiful of the 200 plus inhabited Greek islands. It's" +
      " likely you have already seen Kefalonia on pictures and postcards, bu" +
      "t the reality is far better than any picture. Positioned in the cente" +
      "r of the Ionian sea, Kefalonia captivated many with its beauty and wa" +
      "s the location of the famous movie 'Captain Corelli’s Mandolin'. Inde" +
      "ed, wherever you look, you’ll see nature at its best! Possessing a br" +
      "eathtaking landscape with superb beaches, pretty fishing villages and" +
      " underground caves, Kefalonia is a great destination for nature lovers!");
    $("#img-box").html("<img class='img-responsive' src='assets/img/ith-fisk" +
      ".jpg' alt='The island of Ithaka from Fiskardo'>");
    $("#active-link").html(" ");
  }
  aboutText();

  //======= Recalls the About information linked to the About anchor tag =======//

  $("#about").click(function() {
    aboutText();
  });
});

//============ About & Weather anchor link (Hover and Click events) ==========//

$(document).ready(function() {
  $(".about-link").click(function() {
    $(".about-link").removeClass("about-active");
    $(this).addClass("about-active");
  });
  $(".about-link").hover(function() {
    $(this).toggleClass("about-hover");
  });
});

//========== Tooltips ==========//

/*$(function() {
    $(".map-button").tooltip({
        position: { my: "left+15 center", at: "right center", collision: "flipfit flip" }
    });

})*/

//================ Map Buttons - Hover and Click events ==================//

$(document).ready(function() {
  $("button").click(function() {
    $("button").removeClass("map-button-active");
    $(".about-link").removeClass("about-active");
    $(this).addClass("map-button-active");
  });
  $("button").hover(function() {
    $(this).toggleClass("map-button-hover");
  });
});

//============================== Location Arrays ==========================//

var beaches = [
  [38.322903, 20.453183, "Fteri Beach", "This beach is heaven is a little" +
    " bit of heaven! Azuze waters lapping a dramatic coastline, dramatic " +
    "scenery, are all combined here to create a captivating environment t" +
    "hat anyone visiting Kefalonia shouldn't miss. Located North of the t" +
    "own of Lixouri Fteri is regarded as one of the most picturesque yet " +
    "hidden beaches on Kefalonia. Unlike most of the islands beaches, you" +
    "'ll need to take your own umbrella, food and bottles of water becaus" +
    "e the beach is remote and completely devoid of any amenities.", "<im"+
    "g class='img-responsive' src='assets/img/beaches/beach-fteri.jpg' al"+
    "t='Fteri beach'>", " "
  ],
  [38.260949, 20.376721, "Petani Beach", "Stretching for about 850 meters" +
    " this Blue Flag beauty is another of Kefalonia's impressive beaches!" +
    " This beach is perched in the middle of the Paliki peninsula, 20km N" +
    "orth Weat of Argostoli and Lixouri. Accessible by road it benefits f" +
    "rom crystal clear turquoise waters, white sand, pebbles and a heaven" +
    "ly verdant backdrop. There are even two beachside tavernas which sup" +
    "ply sun loungers and umbrellas.", "<img src='assets/img/beaches/beac" +
    "h-petani.jpg' alt='Petani beach'>", " "
  ],
  [38.47161, 20.54846, "Dafnoudi Beach", "Hidden at the very Northern tip" +
    " of the island, a shorth drive from Fiskardo, Dafnoudi beach is a be" +
    "autiful, secluded cove. Another of the beaches only accessible only " +
    "on foot, the short walk down the valley is beautiful and dramatic an" +
    "d worth the effort as you emerge from the trees onto the beach. Like" +
    " Fteri beach, this cove is devoid of any services, so you'll need to" +
    " come prepared. Just be aware that because of its secluded location," +
    " the beach is popular with naturists!", "<img src='assets/img/beache" +
    "s/beach-dafn.jpg' alt='Dafnoudi beach'>", " "
  ],
  [38.466161, 20.573059, "Emplisi Beach", "Emplisi beach is a walkable di" +
    "stance just North of Fiskardo, and lies in a very beautiful bay with" +
    " crystal clear sapphire waters. Like many of Kefalonia's beaches it " +
    "consists of white pebbles. This is a great location if you like to s" +
    "norkel, as you can do it along the rocks which line the small bay. T" +
    "he water that surrounds Emplisi are among the clearest on the whole " +
    "island, so it's a good place to try and spot some of the local sea l" +
    "ife.", "<img src='assets/img/beaches/beach-emplisi.jpg' alt='Emplisi" +
    " beach'>", " "
  ],
  [38.342578, 20.535872, "Myrtos Beach", "Myrtos is the iconic Kefalonian" +
    " beach, much like Navagio is to Zakynthos; it has been described as " +
    "possibly one of the 30 most beautiful beaches in the world. Not only" +
    " is this place an important symbol of Kefalonia but it is also one o" +
    "the strips of coastline that has made Greece Europes best destinatio" +
    "n for beach holidays. Located in the Pylaros valley, a short distanc" +
    "e south of Assos town on the North East coast, Myrtos is a shimmerin" +
    "g bay of brilliant white sand and pebbles surrounded by the bluest w" +
    "arter you could imagine. As you can imagine this is a very popular b" +
    "each, but is very well organised, with all the amenities you need.",
    "<img src='assets/img/beaches/beach-myrtos.jpg' alt='Myrtos beach'>",
    " "
  ],
  [38.154322, 20.480938, "Makris Gialos Beach", "Just 3 kilometers south " +
    "of Argostoli you come across the popular resort village of Lassi and" +
    " it's myriad of beaches the biggest and most popular of which is the" + 
    "mesmerising beach of Makris Gialos, also known as Costa Costa beach," +
    " after the popular beachside bar. To be presice, there are actually " +
    "two adjacent beaches here; Platis Gialos and Makris Gialos. One of t" +
    "he few beaches with golden sands it has clean blue waters that merge" +
    " into the horizon. The beach is backed by thick lush vegetation that" + 
    "separates the coastline from the rest of the life on the island. Thi" +
    "s is another popular beach but benefits from decent parking and grea" +
    "t facilities", "<img src='assets/img/beaches/beach-makris.jpg' alt='" +
    "Makris Gialos beach'>", " "
  ],
  [38.260612, 20.673927, "Antisamos Beach", "Another of the islands beach" +
    "es benefitting from being awarded the Blue Flag for its clean waters" +
    ", Antisamos is located in a secluded bay a few kilometres from the t" +
    "own of Sami and combines spectacular deep blue sea with lush tree li" +
    "ned headlands which guard this treasure. This is a very popular and " +
    "well-organised beach, easy to accessible by road. Be aware that most" +
    " of the beach is reserved for the large beach bars which charge for " +
    "using their services, however there is a small section to the south " +
    "where you do not have to pay. Lined with pure white pebbles, Antisam" +
    "os was the focal point for John Madden’s film 'Captain Corelli's Man" +
    "dolin'.", "<img src='assets/img/beaches/beach-anti.jpg' alt='Antisam" +
    "os beach'>", " "
  ],
  [38.075906, 20.800971, "Skala Beach", "Skala beach is located about 40 k" +
    "ilometres from Argostoli and 10 from Poros, where you have a bonafide" +
    " Blue Flag beauty. Big enough to cater for moments of sandy solitude " +
    "as well as action-packed activities, holiday makers can go from cave " +
    "explorations to buzzing hotspots in a matter of strides.",
    "<img src='assets/img/beaches/beach-skala.jpg' alt='Skala beach'>", " "
  ],
  [38.452562, 20.576679, "Foki Beach", "Foki beach is a beautiful inlet ju" +
    "st south of Fiskardo. This is a small beach with white pebbles surrou" +
    "nded by olive trees, which offer some natural shade and there are som" +
    "e interesting caves and coves on the right side of the beach to explo" +
    "re. It’s definitely one of the more picturesque beaches in Kefalonia " +
    "so remember to bring your camera with you.", "<img src='assets/img/be" +
    "aches/beach-foki.jpg' alt='Foki beach'>", " "
  ],
  [38.16058, 20.41527, "Xi Beach", "This 3km Blue Flag beauty is accessori" +
    "sed with striking red sands and white clay cliffs. Xi's answer to a f" +
    "ree spa treatment, the natural clays offer an all-over body mask whil" +
    "e you sunbathe. A fantastic, family-friendly option for a day spent o" +
    "n the sand, the warm shallows invite little water babies to splash ar" +
    "ound safely.", "<img src='assets/img/beaches/beach-xi.jpg' alt='Xi be" +
    "ach'>", " "
  ]
];

var towns = [
  [38.1732, 20.4900, "Argostolion", "The modern cosmopolitan capital city " +
    "(more like a large town) is a lively place with good nightlife that c" +
    "ombines tourism and local life with plenty to offer culture vultures." +
    " Visitors can enjoy a walk alkong the palm lined waterfront promenade" +
    ", and enjoy a meal in one of the many bars and tavernas. Don't miss t" +
    "he Loggerhead turtles which feed in Koutavos lagoon.", "<img src='ass" +
    "ets/img/towns/town-argo.jpg' alt='Argostolion'>", " "
  ],
  [38.1640, 20.4826, "Lassi", "Located just 6km from the airport and 3km f" +
    "rom the capital city of Argostoli (aka Argostolion) this bustling Sou" +
    "th coast resort village is popular with first time visitors to the is" +
    "land. It has numerous hotels and self-catering apartments to choose f" +
    "rom plus a mile long stretch of tavernas, cafes, bars, souvenir shops" +
    ", mini markets, and car rental and excursion offices.", "<img src='as" +
    "sets/img/towns/town-lassi.jpg' alt='Lassi'>", " "
  ],
  [38.4582, 20.5770, "Fiskardo", "This former fishing village on the North" +
    " end of Kefalonia has become an upmarket holiday resort and is a true" +
    " gem of a place. Its backstreets contain old pastel-painted Venetian " +
    "buildings. A selection of modern cafes, bars, and boutique shops can " +
    "be found in the new section, and the harbour is packed full of yachts" +
    " as well as traditional fishing boats.", "<img src='assets/img/towns/" +
    "town-fisk.jpg' alt='Fiskardo'>", " "
  ],
  [38.3782, 20.5401, "Assos", "This tiny secluded village with its colourf" +
    "ul houses nestled on the craggy hillside of a picturesque peninsula i" +
    "s surrounded by pine and cypress trees and is ideal for couples who s" +
    "eek downtime to rest, relax, and recuperate on a romantic getaway, pu" +
    "rposefully seeking a place without any nightlife.",
    "<img src='assets/img/towns/town-assos.jpg' alt='Assos'>", " "
  ],
  [38.2514, 20.6472, "Sami", "This large and lively modern coastal town is" +
    " what you might call a ‘real Greek town’ enabling tourists to have a " +
    "pleasant stay and locals to go about daily life. Modern as well as tr" +
    "aditional cafes, bars, and tavernas can be found on the harbour where" +
    " the fishermen still unload their catch of the day.",
    "<img src='assets/img/towns/town-sami.jpg' alt='Sami'>", " "
  ],
  [38.2022, 20.4370, "Lixouri", "Kefalonia’s second largest city feels a b" +
    "it more upmarket than Argostoli and is very picturesque with its tree" +
    "-lined streets and small bridges that allow the stream that splits th" +
    "e city in two to be crossed.Lixouri provides a little something for e" +
    "veryone whether staying in a hotel, a small studio apartment, or larg" +
    "er holiday villa.", "<img src='assets/img/towns/town-lixo.jpg' alt='L" +
    "ixouri'>", " "
  ],
  [38.3031, 20.5978, "Agia Effimia", "Agia Efimia is a picturesque coastal" +
    " village 31.5 km northeast of Argostoli. It lies around the natural b" +
    "ay and it is home to a small and lovely port where fishing and excurs" +
    "ion boats moor. Those with access to a boat should definitely explore" +
    " its pristine isolated beaches and stunning coves.",
    "<img src='assets/img/towns/town-agia.jpg' alt='Agia Efimia'>", " "
  ],
  [38.1540, 20.7713, "Poros", "Located on the south east of the island, it" +
    " is surrounded by green forests and nestled between Mount Atros and M" +
    "ount Pahni. Picturesque Poros is a working port divided into 3 bays w" +
    "ith an old harbour and new harbour. Poros is good for independent tra" +
    "vellers whether backpackers on a budget or older couples who enjoy na" +
    "ture and walking.", "<img src='assets/img/towns/town-poros.jpg' alt='" +
    "Poros'>", " "
  ],
  [38.0741, 20.7968, "Skala", "The most popular holiday resort on the isla" +
    "nd, the lively yet lovely South coast village of Skala provides coupl" +
    "es and families with a typical beach resort holiday whilst still reta" +
    "ining some of its original Greek charm. A well-organized beach is bac" +
    "ked by a pine forest and is covered in sandy shingle with lots of roc" +
    "k formations.", "<img src='assets/img/towns/town-skala.jpg' alt='Skal" +
    "a'>", " "
  ],
];

var active = [
  [38.12273, 20.61336, "Sea Kayaking Kefalonia", "Run by Yvonne and Pavlos" +
    ", Sea Kayaking Kefalonia is a sea kayaking outfitter who organize day" +
    " and multi-day kayak trips as well as sea kayak courses in the crysta" +
    "l clear and warm mediterranean waters of the Ionian.", "<img src='ass" +
    "ets/img/active/active-kayak.jpg' alt='Sea kayaking'>",
    "<a href='http://www.seakayakingkefalonia-greece.com/index.html' targe" +
    "t='_blank'>Visit Sea Kayaking Kefalonia</a>"
  ],
  [38.16252, 20.59040, "Robola Winery", "In the heart of the Robola Viticu" +
    "lture Zone, dozens of viticulturists from Omala and the surrounding a" +
    "reas (Troiannata, Vlachata, Mousata, Faraklata, Dilinata) created in " +
    "1982 the Agricultural Wine Cooperative of Producers of Robola Kefalli" +
    "nia but to try to protect Kefalonian vineyard.", "<img src='assets/im" +
    "g/active/robola.jpg' alt='Robola Wine'>", "<a href='https://www.oreal" +
    "ios.gr/en/' target='_blank'>Visit Robola Growers Co-operative</a>"
  ],
  [38.10546, 20.53011, "Wild Nature Expeditions", "Outdoor activities for " +
    "all tastes skills and ages. Caving | Rock Climbing | Hiking | Canyoni" +
    "ng | Stargazing | Mountain biking | Paragliding | Jeep Safari's", "<i" +
    "mg src='assets/img/active/active-para.jpg' alt='Paragliding'>",
    "<a href='https://wildnature-expeditions.gr/' target='_blank'>Visit Wi" +
    "ld Nature Expeditions</a>"
  ],
  [38.25702, 20.62353, "Melissani Cave", "Situated just outside of Sami, t" +
    "his natural wonder has been open to visitors since 1963, and gives yo" +
    "u a unique view of a limestone cave holding a breathtaking sunlit lak" +
    "e. The waters which feed this natural wonder travel through the rocks" +
    " all of the way from Argostoli", "<img src='assets/img/active/melis-c" +
    "ave.jpg' alt='Melissani Cave'>", "<a href='https://www.melissani-cave" +
    ".com/' target='_blank'>Visit Melissani Cave</a>"
  ],
  [38.21405, 20.64759, "Bavarian Horse Riding", "Enjoy the mountains, cany" +
    "ons, valleys, olive groves and the virgin nature of Kefalonia on hors" +
    "eback. We'll show you all these places on our sturdy, sure-footed and" +
    " well trained Haflingers and Bavarian warm blood horses.",
    "<img src='assets/img/active/active-horse.jpg' alt='Bavarian horse rid" +
    "ing'>", "<a href='https://www.kephalonia.com/' target='_blank'>Visit " +
    "Bavarian Horse Riding Stable</a>"
  ]
];

var map;

//============= Map Initialisation ==============//

function initMap() {

  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 38.270,
      lng: 20.575
    },
    zoom: 10,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: google.maps.ControlPosition.TOP_RIGHT,
    },
    zoomControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    styles: [{
      featureType: "poi",
      elementType: "labels",
      stylers: [{
        visibility: "off"
      }]
    }]
  });

  var marker, i;
  var markers = [];

  //========== Place Markers for the locations of the beaches and clear out previous markers =======//

  $("#beaches").click(function() {
    clearMarkers();
    map.setZoom(10);
    map.setCenter({
      lat: 38.270,
      lng: 20.575
    });

    for (let i = 0; i < beaches.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(beaches[i][0], beaches[i][1]),
        animation: google.maps.Animation.DROP,
        icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        title: beaches[i][2],
        map: map
      });

      markers.push(marker);

      //========== Renders title and text into the html window and zooms into the marker position ==========//        

      google.maps.event.addListener(marker, "click", (function(marker, i) {
        return function() {
          $(".info-heading").html(beaches[i][2]);
          $(".info-text").text(beaches[i][3]);
          $("#img-box").html(beaches[i][4]);
          $("#active-link").html(beaches[i][5]);
          map.setZoom(15);
          map.setCenter(marker.getPosition());
          window.scrollTo(0, document.getElementById('location-window').offsetTop);
        };
      })(marker, i));
    }
  });
  //========== Clear away any existing markers ==========//

  function clearMarkers() {
    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers = [];
  }

  //========== Place Markers for the locations of the towns and clear out previous markers ===========//

  $("#towns").click(function() {
    clearMarkers();
    map.setZoom(10);
    map.setCenter({
      lat: 38.270,
      lng: 20.575
    });

    for (let i = 0; i < towns.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(towns[i][0], towns[i][1]),
        animation: google.maps.Animation.DROP,
        title: towns[i][2],
        map: map
      });

      markers.push(marker);

      //========== Renders title and text into the html window and zooms into the marker position ==========//

      google.maps.event.addListener(marker, "click", (function(marker, i) {
        return function() {
          $(".info-heading").html(towns[i][2]);
          $(".info-text").text(towns[i][3]);
          $("#img-box").html(towns[i][4]);
          $("#active-link").html(towns[i][5]);
          map.setZoom(15);
          map.setCenter(marker.getPosition());
          window.scrollTo(0, document.getElementById('location-window').offsetTop);
        };
      })(marker, i));
    }
  });
  //========== Clear away any existing markers ==========//

  function clearMarkers() {
    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers = [];
  }

  //========== Place Activity Markers and clear out old markers ==========//

  $("#activities").click(function() {
    clearMarkers();
    map.setZoom(10);
    map.setCenter({
      lat: 38.270,
      lng: 20.575
    });

    for (let i = 0; i < active.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(active[i][0], active[i][1]),
        animation: google.maps.Animation.DROP,
        title: active[i][2],
        map: map
      });

      markers.push(marker);

      //======= Renders title & text into html window & zooms into marker position ======//

      google.maps.event.addListener(marker, "click", (function(marker, i) {
        return function() {
          $(".info-heading").html(active[i][2]);
          $(".info-text").text(active[i][3]);
          $("#img-box").html(active[i][4]);
          $("#active-link").html(active[i][5]);
          map.setZoom(15);
          map.setCenter(marker.getPosition());
          window.scrollTo(0, document.getElementById('location-window').offsetTop);
        };
      })(marker, i));
    }
  });
  //========== Clear away any existing markers ==========//

  function clearMarkers() {
    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers = [];
  }
}
//=========== Zoom Out & Recenter when clicking the Zoom-out button ==========//

$("document").ready(function() {
  $("#zoom-out").click(function() {
    $("#zoom-out").toggleClass("map-button-active");
    map.setZoom(10);
    map.setCenter({
      lat: 38.270,
      lng: 20.575
    });
  });
});

//===== Retrieve Weather Data using Rapidapi.com; code copied from doc's =====//

const fetchParams = {
  method: "GET",
  mode: "cors",
  cache: "default",
  headers: {
    "x-rapidapi-key": "51badd8547msh2019515628aaf86p1290f5jsn22972d92b09f",
    "x-rapidapi-host": "climate-data.p.rapidapi.com"
  }
};

const url = "https://climate-data.p.rapidapi.com/api/getclimatedata?LANG=en&LAT=38.181&LON=20.49";

fetch(url, fetchParams)
  .then(response => {
    if (!response.ok) {
      throw Error("There was an ERROR");
    }
    return response.json();
  })
  .then(data => {
    const climateData = data.ClimateDataMonth;
    const monthData = [];
    climateData.forEach(function(item) {
      monthData.push(item.TIME);
    });
    const tempData = [];
    climateData.forEach(function(items) {
      tempData.push(parseInt(items.temp))
    });
    const rainData = [];
    climateData.forEach(function(items) {
      rainData.push(parseInt(items.days_with_rain))
    });

    //===================== Text input for the Weather Data ======================//       

    $("#weather").click(function() {
      $(".info-heading").html("<h3>Typical Weather</h3>");
      $(".info-text").text("Kefalonia benefits from a warm Mediterranean climate w" +
        "ith hot temperatures and lots of sunshine throughout the year. Many peopl" +
        "e consider the climate of Kefalonia to be close to perfection. The main t" +
        "ourist season begins as early as May, when temperatures climb to around 2" +
        "5°C / 77°F; and ends in October. The busiest months are July and August w" +
        "hich can see temperatures rise above 30°C / 86°F.");
      $("#img-box").html("<canvas id='chart-one'></canvas>");
      $("#active-link").html("<a href='https://rapidapi.com/weatheronline/api/clim" +
        "ate-data' target='_blank'>Climate data provided by Weather Online via Rapid" +
        " API</a>");

      //============ Charts the Temperature Data from WeatherOnline.co.uk using Chart.JS  code copied directly from documentation ============//             

      var ctx = document.getElementById("chart-one");
      const myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: monthData,
          datasets: [{
            label: "Avg Monthly Temp (°C)",
            data: tempData,
            backgroundColor: "rgba(226, 125, 83, 0.7)",
            borderColor: "#000",
            borderWidth: 1,
            order: 1
          }, {
            label: "Days with rain",
            data: rainData,
            borderColor: "rgba(0, 0, 0, 1.0)",
            type: "line",
            order: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              ticks: {
                min: 0,
                max: 30,
                beginAtZero: true
              }
            }]
          }
        }
      });
    });
  })
  .catch(error => {
    console.log("There was an ERROR retrieving data from WeatherOnline API", error);
  });

