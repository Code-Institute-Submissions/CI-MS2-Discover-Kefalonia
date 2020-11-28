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


//------------ JS Deliver Email API ---------------//

function sendMail(contactForm) {
    emailjs.send("gmail", "gareth", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value,
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
    return false;
}