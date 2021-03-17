function viewTechStack() {
    document.getElementById("techStack").style.visibility = "visible";
    document.getElementById("home").style.visibility = "collapse";
}

function viewHome() {
    document.getElementById("techStack").style.visibility = "collapse";
    document.getElementById("home").style.visibility = "visible";
}

setTimeout(function() {
    $('.loader_bg').fadeToggle();
}, 2500);