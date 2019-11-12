//Responsive Bar

function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}
//PopUp Form 

var popup = document.getElementById("form-box");
var linked = document.getElementById("form-link");
var linkedSignUp = document.getElementById("form-linkSignUp");
var popupSignUp = document.getElementById("form-boxSignUp");
var close = document.getElementsByClassName("close")[0];
var closeSignUp = document.getElementsByClassName("closeSignUp")[0];


linked.onclick = function() {
    popup.style.display = "block";

}
linkedSignUp.onclick = function() {
    popup.style.display = "none";
    popupSignUp.style.display = "block";
}

close.onclick = function() {
    popup.style.display = "none";

}
closeSignUp.onclick = function() {
    popupSignUp.style.display = "none";

}
window.onclick = function(event) {
    if (event.target == popup || event.target == popupSignUp) {
        popup.style.display = "none";
        popupSignUp.style.display = "none";

    }
}

//Validasi

function validasi() {
    var username = document.forms["login"]["username"].value;
    var password = document.forms["login"]["password"].value;
    if ((username == "agill" || username == "agill@gmail.com") && (password == "agill1234")) {
        return true;
    } else {
        alert("Username atau password yang anda masukkan salah")
        return false;
    }

}