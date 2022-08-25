function btnAbreMenu() {
    menu = document.getElementsByClassName("menu");
    menu[0].style.display="block";

    btnMenu = document.getElementsByClassName("btn-menu");
    btnMenu[0].style.display = "none";
}


function btnFechaMenu() {
    menu = document.getElementsByClassName("menu");
    menu[0].style.display="none";

    btnMenu = document.getElementsByClassName("btn-menu");
    btnMenu[0].style.display="block";
}