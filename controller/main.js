var stylesheet = document.getElementById("theme");
var checkbox = document.getElementById("darkMode");

checkbox.addEventListener('change', e => {

    if(e.target.checked){
        console.log("checked")
        stylesheet.setAttribute("href", "stylesheets/dark_theme.css")
    }
    else {
        stylesheet.setAttribute("href", "stylesheets/light_theme.css")
    }

});