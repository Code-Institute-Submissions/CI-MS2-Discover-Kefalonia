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
      "r of the Ionian sea, Kefalonia has captivated many with its beauty. I" +
      "ndeed, wherever you look, you’ll see nature at its best! Possessing a" +
      " breathtaking landscape with superb beaches, pretty fishing villages " +
      "and underground caves, Kefalonia is a great destination for nature lo" +
      "vers!");
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
    " bit of heaven! Azure waters lapping a dramatic coastline, dramatic " +
    "scenery, are all combined here to create a captivating environment t" +
    "hat anyone visiting Kefalonia shouldn't miss. Located North of the t" +
    "own of Lixouri, Fteri is regarded as one of the most picturesque yet" +
    " hidden beaches on Kefalonia. Unlike most of the islands beaches, yo" +
    "u'll need to take your own umbrella, food and bottles of water becau" +
    "se the beach is remote and completely devoid of any amenities.", "<i" +
    "mg src='assets/img/beaches/beach-fteri.jpg' alt='Fteri beach'>", " "
  ],
  [38.260949, 20.376721, "Petani Beach", "Stretching for about 850 meters" +
    " this Blue Flag beauty is another of Kefalonia's impressive beaches!" +
    " This beach is perched in the middle of the Paliki peninsula, 20km N" +
    "orth West of Argostoli and Lixouri. Accessible by road it benefits f" +
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
    "f the strips of coastline that has made Greece, Europe's best destin" +
    "ation for beach holidays. Located in the Pylaros valley, a short dis" +
    "tance south of Assos town on the North East coast, Myrtos is a shimm" +
    "ering bay of brilliant white sand and pebbles surrounded by the blue" +
    "st water you could imagine. As you can imagine this is a very popula" +
    "r beach, but is very well organised, with all the amenities you need.",
    "<img src='assets/img/beaches/beach-myrtos.jpg' alt='Myrtos beach'>",
    " "
  ],
  [38.154322, 20.480938, "Makris Gialos Beach", "Just 3 kilometres south " +
    "of Argostoli you come across the popular resort village of Lassi and" +
    " it's myriad of beaches the biggest and most popular of which is the" + 
    " mesmerising beach of Makris Gialos, also known as Costa Costa beach" +
    " after the popular beachside bar. To be precise, there are actually " +
    "two adjacent beaches here; Platis Gialos and Makris Gialos. One of t" +
    "he few beaches with golden sands it has clean blue waters that merge" +
    " into the horizon. The beach is backed by thick lush vegetation that" + 
    " separates the coastline from the rest of the life on the island. Th" +
    "is is another popular beach but benefits from decent parking and gre" +
    "at facilities.", "<img src='assets/img/beaches/beach-makris.jpg' alt" +
    "='Makris Gialos beach'>", " "
  ],
  [38.260612, 20.673927, "Antisamos Beach", "Another of the island's beac" +
    "hes benefitting from being awarded the Blue Flag for its clean water" +
    "s, Antisamos is located in a secluded bay a few kilometres from the " +
    "town of Sami and combines spectacular deep blue sea with lush tree l" +
    "ined headlands which guard this treasure. This is a very popular and" +
    " well-organised beach, easy to accessible by road. Be aware that mos" +
    "t of the beach is reserved for the large beach bars which charge for" +
    " using their services, however there is a small section to the south" +
    " where you do not have to pay. Lined with pure white pebbles, Antisa" +
    "mos was the focal point for John Madden’s film 'Captain Corelli's Ma" +
    "ndolin'.", "<img src='assets/img/beaches/beach-anti.jpg' alt='Antisa" +
    "mos beach'>", " "
  ],
  [38.075906, 20.800971, "Skala Beach", "Skala beach is located on the So" +
    "uth Eastern tip of the island about 40 kilometres from Argostoli and" +
    " 10 kilometres South of Poros. Here you have another genuine Blue Fl" +
    "ag beauty, big enough to cater for this popular location and yet sti" +
    "ll provide moments of sandy solitude. There is also plenty to cater " +
    "for the active holiday makers who can go from cave explorations to b" +
    "uzzing hotspots in a matter of strides.",
    "<img src='assets/img/beaches/beach-skala.jpg' alt='Skala beach'>", " "
  ],
  [38.452562, 20.576679, "Foki Beach", "My personal favourite is Foki bea" +
    "ch which lies a short distance around the coast from Fiskardo. This " +
    "is a beautiful inlet with clear, warm, blue waters popular with the " +
    "yachting community. This is a small beach, just off the back road in" +
    "to Fiskardo, with white pebbles surrounded by olive trees, which off" +
    "er some natural shade. There are some interesting caves and coves on" +
    " the right side of the beach which you can explore. It’s certainly o" +
    "ne of the more photogenic beaches on Kefalonia so remember to bring " +
    "your camera with you.", "<img src='assets/img/beaches/beach-foki.jpg" +
    "' alt='Foki beach'>", " "
  ],
  [38.16058, 20.41527, "Xi Beach", "This 3 kilometre long Blue Flag beach" +
    " a short drive south of Lixouri, is unique on the island as it has s" +
    "triking red sands backed by white clay cliffs. Xi's clay cliffs are " +
    "well known as free spa treatment offering an all-over body mask whil" +
    "e you sunbathe. A popular, family-friendly option on the quieter wes" +
    "tern peninsula, it's the perfect spot for a day spent on the beach w" +
    "hile the warm shallows invite little water babies to splash around s" +
    "afely.", "<img src='assets/img/beaches/beach-xi.jpg' alt='Xi beach'>",
    " "
  ]
];

var towns = [
  [38.1732, 20.4900, "Argostolion", "The modern cosmopolitan capital has " +
    "the feeling of a small town, yet is a surprisingly lively place with" +
    " great nightlife which manages to combine tourism and local life, wi" +
    "th plenty to offer culture vultures. Both visitors and locals enjoy " +
    "a walk along the palm lined waterfront promenade where they can samp" +
    "le local cuisine in one of the many bars and tavernas. You can't vis" +
    "it Argostolion without seeing the Loggerhead turtles which feed in t" +
    "he lagoon and can frequently be seen swimming right up the promenade.", 
    "<img src='assets/img/towns/town-argo.jpg' alt='Argostolion'>", " "
  ],
  [38.1640, 20.4826, "Lassi", "This small village located just 6 kilometre" +
    "s from the airport and 3 kilometres from Argostolion becomes a bustli" +
    "ng resort village in the summer months. Very popular with first time " +
    "visitors and returning visitors alike. It has a huge selection of hot" +
    "els and self-catering apartments to choose from plus a mile long stre" +
    "tch of tavernas, cafes, bars, souvenir shops mini markets, and car re" +
    "ntal and excursion offices; it can be the perfect base for your holid" +
    "ay. Despite its popularity it never feels too busy or overcrowded and" +
    " loud.", 
    "<img src='assets/img/towns/town-lassi.jpg' alt='Lassi'>", " "
  ],
  [38.4582, 20.5770, "Fiskardo", "This town is a former fishing village o" +
    "n the Northern most tip of Kefalonia which has become an upmarket ho" +
    "liday resort with a slightly more authentic feeling. Its beautiful b" +
    "ackstreets contain old pastel-painted Venetian buildings draped in b" +
    "ougainvillea. An eclectic selection of modern cafes, bars, and bouti" +
    "que shops surround the harbour, which is usually is packed full of y" +
    "achts moored alongside traditional fishing boats.", "<img src='asset" +
    "s/img/towns/town-fisk.jpg' alt='Fiskardo'>", " "
  ],
  [38.3782, 20.5401, "Assos", "This tiny secluded village with its colour" +
    "ful houses is easy to miss if you don't do your homework, as it's ne" +
    "stled on a small isthmus among the craggy cliffs of the West coast. " +
    "This quiet village is surrounded by pine and cypress trees and is th" +
    "e ideal destination for those seeking more solitude, to rest and rel" +
    "ax on a romantic getaway. Other than a few tavernas and bars this is" +
    " a peaceful village without any lively nightlife. Be sure to visit t" +
    "he old ruined Venetian castle on the promontory.", 
    "<img src='assets/img/towns/town-assos.jpg' alt='Assos'>", " "
  ],
  [38.2514, 20.6472, "Sami", "This is a relatively large and lively coasta" +
    "l town and one you might classify as a ‘real Greek town’. It has ever" +
    "ything tourists need to have a pleasant holiday yet allows locals to " +
    "go about daily life. It has a mixture of modern cafe's and bars mixed" +
    " in with more traditional tavernas around the working harbour where t" +
    "he fishermen still unload their catch of the day.",
    "<img src='assets/img/towns/town-sami.jpg' alt='Sami'>", " "
  ],
  [38.2022, 20.4370, "Lixouri", "Kefalonia’s second largest city and forme" +
    "r capital can sometimes feel a bit more upmarket than Argostolion. A " +
    "very picturesque town with tree-lined streets with small bridges cros" +
    "sing the stream that divides the in two. Lixouri provides a little bi" +
    "t of something for everyone, regardless of whether you're staying in " +
    "a hotel, a small studio apartment, or larger holiday villa.", 
    "<img src='assets/img/towns/town-lixo.jpg' alt='Lixouri'>", " "
  ],
  [38.3031, 20.5978, "Agia Effimia", "Agia Efimia is a tiny picturesque co" +
    "astal village 31.5 kilometres North East of Argostoli. The village su" +
    "rrounds a natural bay and is home to a small and lovely port where a " +
    "mixture of fishing and excursion boats moor alongside yachts. If you " +
    "have access to a boat you should definitely explore its pristine isol" +
    "ated beaches and stunning coves. Don't forget to treat yourself in on" +
    "e of the many traditional tavernas.",
    "<img src='assets/img/towns/town-agia.jpg' alt='Agia Efimia'>", " "
  ],
  [38.1540, 20.7713, "Poros", "Nestled between the mountains on the South " +
    "Eastern corner of the island and surrounded by green forests, Poros c" +
    "an feel a bit isolated yet is only a short drive from both Sami and S" +
    "kala. This pretty town surrounds three bays and remains a working por" +
    "t with an old harbour and new harbour. Poros is a great location for " +
    "the independent traveller, whether backpacking on a budget or couples" +
    " who want to enjoy nature and the many walking trails in the surround" +
    "ing hills.", "<img src='assets/img/towns/town-poros.jpg' alt='Poros'>",
    " "
  ],
  [38.0741, 20.7968, "Skala", "Possibly the busiest and most popular holid" +
    "ay resort on the island, this lively yet lovely South coast village p" +
    "rovides couples and families with a more typical beach resort holiday" +
    " whilst still managing to retain some of the original Greek charm. Sk" +
    "ala has a gorgeous well-organized Blue Flag beach is covered in sandy" +
    " shingle with lots of rock formations and is backed by a pine forest," +
    " hotels, bars and restaurants.", "<img src='assets/img/towns/town-ska" +
    "la.jpg' alt='Skala'>", " "
  ],
];

var active = [
  [38.12273, 20.61336, "Sea Kayaking Kefalonia", "Sea Kayaking Kefalonia i" +
    "s run by Yvonne and Pavlos and is a professional sea kayaking outfitt" +
    "er. They organize short, fun single day trips for the novice and also" +
    " multi-day kayak tours for the more experienced adventurer. They prov" +
    "ide sea kayak training and certification courses in the crystal clear" +   
    " and warm Mediterranean waters of the Ionian.", "<img src='assets/img" +
    "/active/active-kayak.jpg' alt='Sea kayaking'>",
    "<a href='http://www.seakayakingkefalonia-greece.com/index.html' targe" +
    "t='_blank'>Visit Sea Kayaking Kefalonia</a>"
  ],
  [38.16252, 20.59040, "Robola Winery", "In the heart of the island lies t" +
    "he Robola Viticulture Zone, where dozens of local viticulturists from" +
    " Omala and the surrounding areas like Troiannata, Vlachata, Mousata, " +
    "Faraklata and Dilinata created the Robola Producers of Kefallinia Agr" +
    "icultural Wine Cooperative back in 1982 to try to protect the unique " +
    "Kefalonian viticulture. Visitors can now tour this facility and enjoy" +
    " some of this fabulous wine", "<img src='assets/img/active/robola.jpg" +
    "' alt='Robola Wine'>", "<a href='https://www.orealios.gr/en/' target=" +
    "'_blank'>Visit Robola Growers Co-operative</a>"
  ],
  [38.10546, 20.53011, "Wild Nature Expeditions", "Outdoor activities for " +
    "all taste's skills and ages. Caving | Rock Climbing | Hiking | Canyon" +
    "ing | Stargazing | Mountain biking | Paragliding | Jeep Safari's", "<" +
    "img src='assets/img/active/active-para.jpg' alt='Paragliding'>",
    "<a href='https://wildnature-expeditions.gr/' target='_blank'>Visit Wi" +
    "ld Nature Expeditions</a>"
  ],
  [38.25702, 20.62353, "Melissani Cave", "Situated just outside of Sami, t" +
    "his natural wonder has been open to visitors since 1963, and gives yo" +
    "u a unique view of a limestone cave holding a breath-taking sunlit la" +
    "ke. The waters which feed this natural wonder travel through the rock" +
    "s underground all of the way from Argostolion.", "<img src='assets/im" +
    "g/active/melis-cave.jpg' alt='Melissani Cave'>", "<a href='https://ww" +
    "w.melissani-cave.com/' target='_blank'>Visit Melissani Cave</a>"
  ],
  [38.21405, 20.64759, "Bavarian Horse Riding", "Why not take time away fr" +
    "om the beach to enjoy some of the mountains, canyons, valleys, olive " +
    "groves and the virgin nature of Kefalonia on horseback. The guys from" +
    " Bavarian Horse Riding Stables show you all these places on their stu" +
    "rdy, sure-footed and very well trained Haflingers and Bavarian warm b" +
    "lood horses.", "<img src='assets/img/active/active-horse.jpg' alt='Ba" +
    "varian horse riding'>", "<a href='https://www.kephalonia.com/' target" +
    "='_blank'>Visit Bavarian Horse Riding Stable</a>"
  ]
];

var map;

//============= Map Initialisation ==============//
//===== https://developers.google.com/maps/documentation/javascript/adding-a-google-map =====//
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
//===== (https://developers.google.com/maps/documentation/javascript/markers)=====//

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
      tempData.push(parseInt(items.temp));
    });
    const rainData = [];
    climateData.forEach(function(items) {
      rainData.push(parseInt(items.days_with_rain));
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

      //============ Charts the Temperature Data from WeatherOnline.co.uk ==========//
      //======= using Chart.JS  code copied directly from documentation ============//             

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