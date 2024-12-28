let icon = document.getElementById("icon");

// Click Function
icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "./img/sun.png";
    } else {
        icom.src = "img/moon.png"
    }
}