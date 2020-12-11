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


//------------ EmailJS Email API ---------------//

/*function sendMail(contactForm) {
    emailjs.send("gmail", "discover_kefalonia", {
        "from_name": contactForm.first-name.value + contactForm.last-name.value,
        "reply-to": contactForm.email-address.value,
        "message": contactForm.message.value,
        "mobile": contactForm.mobile.value,
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
    return false;
}
*/


window.onload = function() {
            document.getElementById('contact-form').addEventListener('submit', function(event) {
                emailjs.sendForm('gmail', 'discover_kefalonia', this)
                    .then(function() {
                        console.log('SUCCESS!');
                    }, function(error) {
                        console.log('FAILED...', error);
                    });
            });
        }
        