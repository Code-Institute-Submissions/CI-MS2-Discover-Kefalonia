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
    });
});


//------------ EmailJS Email API ---------------//

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
        return false;
    });
    return false;
}        