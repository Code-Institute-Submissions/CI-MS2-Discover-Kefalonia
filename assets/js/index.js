//------GSAP Commands------//

gsap.to("#explore", {duration: 2, opacity: 1, transform: "translateY(50vh)", ease: "back"});

//---Page Transition----//
$("#explore").click(function() {
    location.href = "map.html";
});