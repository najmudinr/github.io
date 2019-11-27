//Responsive Bar

function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}

//Jquery untuk form login dan sign up

$(document).ready(function () {
    $("#form-link").click(function () {
        $(".form-login").css("display", "block");
    });
    $("#form-linkSignUp").click(function () {
        $(".form-login").css("display", "none");
        $(".form-signUp").css("display", "block");
    });
    $("#form-linkLogin").click(function () {
        $(".form-login").css("display", "block");
        $(".form-signUp").css("display", "none");
    });
    $(".close").click(function () {
        $(".form-login").css("display", "none");
        $(".form-signUp").css("display", "block");
    });
});

//Close form

$(document).mouseup(function (e) {
    if ($(".form-login").is(e.target) || $(".form-signUp").is(e.target)) {
        $(".form-login").css("display", "none");
        $(".form-signUp").css("display", "none");
    }
});

//Validasi login

function validasi() {
    var username = document.forms["login"]["username"].value;
    var password = document.forms["login"]["password"].value;
    if ((username == "agill" || username == "agill@gmail.com" ) && (password == "agill1234")) {
        return true;
    } else {
        alert("Username atau password yang anda masukkan salah")
        return false;
    }

}
