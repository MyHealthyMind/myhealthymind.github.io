/*menu*/
var open = false;
function openmenu() {
    if (open == false) {
        document.getElementById("menu").style.height = "1900px";
        open = true;
    }
    else if (open == true) {
        document.getElementById("menu").style.height = "170px";
        open = false;
    }
}

setInterval(function() {
    let width = window.screen.width;
    if (width < 1024 && open == true) {
        document.getElementById("menu").style.height = "1900px";
        document.getElementById("menu").style.backgroundColor = "whitesmoke";
    }
    else if (width > 1024) {
        document.getElementById("menu").style.height = "85px";
    }

}, 10);