$(document).ready(function () {

    //Form submit 
    $("#home_form").submit(function () {
        if (typeof (Storage) !== "undefined") {
            localStorage.setItem("ls_name", $('#user_name').val());
            localStorage.setItem("ls_email", $('#user_email').val());
            localStorage.setItem("ls_education", $('#education').val());
            localStorage.setItem("ls_semester", $('#semester').val());
            localStorage.setItem("ls_career", $('#career').val());
        }
        else {
            document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
        }
    });


});

