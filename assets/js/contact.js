//========== Navigation Menu ==========//

$(document).ready(function() {
    $("#contact-top").hover(function() {
        $("#contact-top").toggleClass("top-active");    
    });
    $("#contact-bottom").hover(function() {
        $("#contact-bottom").toggleClass("bottom-active");    
    });
});

//========== EmailJS API code copied directly from documentation ==========//

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        emailjs.sendForm("gmail", "discover_kefalonia", this)        
        .then(
            function(response) {
                console.log("SUCCESS!", response);                
        }, 
            function(error) {
                console.log('FAILED...', error);
            });        
    });
    return false;
}; 

//========== Contact Form Button ==========//

$(document).ready(function() {
    $(".contact-btn").hover(function() {
        $(".contact-btn").toggleClass("submit-hover");
    })
    $(".contact-btn").click(function() {
        $(".contact-btn").removeClass("submit-click");
        $(".contact-btn").addClass("submit-click");
    });
});

//========== Footer Items ==========//

$(document).ready(function() {    
    $("#social-tab").click(function() {
        $("#social-container").toggleClass("social-active");        
    });   
});