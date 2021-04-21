setTimeout(function() {
    $('.loader_bg').fadeToggle();
}, 2500)

let mode = document.getElementById("mode");

function changeMode() {
    if (mode.classList.contains('fa-moon-o')) {
        mode.className = "fa fa-sun-o"
        document.body.style.background = "url('./assets/images/bgDark.jpg')"
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundSize = 'cover'
    } else {
        mode.className = "fa fa-moon-o"
        document.body.style.background = "url('./assets/images/bg.jpg')"
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundSize = 'cover'
    }
}

mode.addEventListener("click", changeMode)