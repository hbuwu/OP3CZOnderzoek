let deftoep = document.querySelector(".deftoep");
let voornadeel = document.querySelector(".voornadeel");
let proj = document.querySelector(".proj");
let buurt = document.querySelector(".buurt");

deftoep.addEventListener("click", change_page_deftoep);
voornadeel.addEventListener("click", change_page_voornadeel);
proj.addEventListener("click", change_page_proj);
buurt.addEventListener("click", change_page_buurt);

function change_page_deftoep() {
    window.location.href = "definitie-toepassingen.html";
}

function change_page_voornadeel() {
    window.location.href = "voordelen-nadelen.html";
}

function change_page_proj() {
    window.location.href = "circulair-zuid.html";
}

function change_page_buurt() {
    window.location.href = "buurt-zuid.html";
}