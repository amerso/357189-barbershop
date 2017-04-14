var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var login = popup.querySelector("[name=login]");
var form = popup.querySelector("form");
var password = popup.querySelector("[name=password]")
var storage = localStorage.getItem("login");
var overlay = document.querySelector(".modal-overlay")


var mapOpen = document.querySelector(".js-map-open");
var mapPopup = document.querySelector(".modal-content-map");







link.addEventListener("click", function(event){

event.preventDefault();

popup.classList.add("modal-content-show");
overlay.classList.add("modal-overlay-show");


if (storage) {
login.value = storage;
password.focus();
}
else{

login.focus();
}

});









close.addEventListener("click", function(event){

event.preventDefault();

popup.classList.remove("modal-content-show");
overlay.classList.remove("modal-overlay-show");

});




form.addEventListener("submit", function(event){
if (!login.value || !password.value){

event.preventDefault();
console.log("Нужно ввести логин и пароль");}
else {
localStorage.setItem("login", login.value);
}


});



window.addEventListener("keydown", function(event) {
if (event.keyCode === 27) {

if (popup.classList.contains("modal-content-show")) {
popup.classList.remove("modal-content-show");
overlay.classList.remove("modal-overlay-show");
}
}
});





overlay.addEventListener("click", function(event){

if (popup.classList.contains("modal-content-show")) {
popup.classList.remove("modal-content-show");
overlay.classList.remove("modal-overlay-show");
}
});












mapOpen.addEventListener("click", function(event){
event.preventDefault();
mapPopup.classList.add("modal-content-show");
});


close.addEventListener("click", function(event){
event.preventDefault();
mapPopup.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event){
if (event.keyCode===27) {
if (mapPopup.classList.contains("modal-content-show")){
mapPopup.classList.remove("modal-content-show");}
}
});

