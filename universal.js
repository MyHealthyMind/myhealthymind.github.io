/*menu*/
var openm = false;
function openmenu() {
    if (openm == false) {
        document.getElementById("menu").style.height = "1900px";
        openm = true;
    }
    else if (openm == true) {
        document.getElementById("menu").style.height = "170px";
        openm = false;
    }
}

setInterval(function() {
    let width = window.screen.width;
    if (width < 1024 && openm == true) {
        document.getElementById("menu").style.height = "1900px";
        document.getElementById("menu").style.backgroundColor = "whitesmoke";
    }
    else if (width > 1024) {
        document.getElementById("menu").style.height = "85px";
    }

}, 10);