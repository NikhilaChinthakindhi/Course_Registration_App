$(document).ready(function () {

    //get values from local storage to show couses depending on these values
    var name = localStorage.getItem("ls_name");
    var email = localStorage.getItem("ls_email");
    var education = localStorage.getItem("ls_education");
    var semester = localStorage.getItem("ls_semester");
    var career = localStorage.getItem("ls_career");

    //Courses extra details click function in display_courses page
    $('.nav-item a').click(function (e) {
        var tab = $(this);
        if (tab.parent('li').hasClass('active')) {
            window.setTimeout(function () {
                $(".tab-pane").removeClass('active');
                tab.parent('li').removeClass('active');
            }, 1);
        }
    });

    //Conditions to display respective courses for respective inputs selected in display_courses page
    // Computer science
    if (education == "Graduate" && semester == "Spring" && career == "Computer Science") { 
        $('#course1').show();
        $('#course2').hide();
    }

    else if (education == "Graduate" && semester == "Summer" && career == "Computer Science") {
        $('#course1').show();
    }

    else if (education == "Graduate" && semester == "Fall" && career == "Computer Science") {
        $('#course1').show();
    }

    else if (education == "Under graduate" && semester == "Spring" && career == "Computer Science") {
        $('#course1').show();
        $('#course2').hide();
    }

    else if (education == "Under graduate" && semester == "Summer" && career == "Computer Science") {
        $('#course1').show();
    }

    else if (education == "Under graduate" && semester == "Fall" && career == "Computer Science") {
        $('#course1').show();
    }

    //Dentistry
    else if (education == "Graduate" && semester == "Spring" && career == "Dentistry") {
        $('#course1').show();
        $('#course2').hide();
    }

    else if (education == "Graduate" && semester == "Summer" && career == "Dentistry") {
        $('#course1').show();
    }

    else if (education == "Graduate" && semester == "Fall" && career == "Dentistry") {
        $('#course1').show();
    }

    else if (education == "Under graduate" && semester == "Spring" && career == "Dentistry") {
        $('#course1').show();
        $('#course2').hide();
    }

    else if (education == "Under graduate" && semester == "Summer" && career == "Dentistry") {
        $('#course1').show();
    }

    else if (education == "Under graduate" && semester == "Fall" && career == "Dentistry") {
        $('#course1').show();
    }


    //Law
    else if (education == "Graduate" && semester == "Spring" && career == "Law") {
        $('#course1').show();
    }

    else if (education == "Graduate" && semester == "Summer" && career == "Law") {
        $('#course1').show();
    }

    else if (education == "Graduate" && semester == "Fall" && career == "Law") {
        $('#course1').show();
    }

    else if (education == "Under graduate" && semester == "Spring" && career == "Law") {
        $('#course1').show();
        $('#course2').hide();
    }

    else if (education == "Under graduate" && semester == "Summer" && career == "Law") {
        $('#course1').show();
    }

    else if (education == "Under graduate" && semester == "Fall" && career == "Law") {
        $('#course1').show();
    }

    else {
        alert("Invalid input");
    }

});

