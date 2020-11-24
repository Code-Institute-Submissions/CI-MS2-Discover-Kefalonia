//---------------- Navigation Menu ----------------//

$(document).ready(function() {
    $("#contact-top").hover(function() {
        $("#contact-top").toggleClass("top-active");    
    });
});

$(document).ready(function() {
    $("#contact-bottom").hover(function() {
        $("#contact-bottom").toggleClass("bottom-active");    
    });
});

//-------------- Footer Items -------------------//

$(document).ready(function() {
    $("#social-tab").click(function() {
        $("#social-container").toggleClass("social-active");
        console.log("hover");
    });
});