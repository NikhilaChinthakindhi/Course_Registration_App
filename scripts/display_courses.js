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
        $('.card').hide();
        $('#course1').show();
        $('#course2').show();
        $('#course3').show();
    }

    else if (education == "Graduate" && semester == "Summer" && career == "Computer Science") {
        $('.card').hide();
        $('#course3').show();
    }

    else if (education == "Graduate" && semester == "Fall" && career == "Computer Science") {
        $('.card').hide();
        $('#course1').show();
        $('#course2').show();
        $('#course3').show();
        $('#course4').show();
    }

    else if (education == "Under graduate" && semester == "Spring" && career == "Computer Science") {
        $('.card').hide();
        $('#course1').show();
        $('#course2').show();
    }

    else if (education == "Under graduate" && semester == "Summer" && career == "Computer Science") {
        $('.card').hide();
        alert("No available courses");
        window.location.href = "../index.html";
    }

    else if (education == "Under graduate" && semester == "Fall" && career == "Computer Science") {
        $('.card').hide();
        $('#course1').show();
        $('#course2').show();
        $('#course3').show();
    }


    //Law
    else if (education == "Graduate" && semester == "Spring" && career == "Law") {
        $('.card').hide();
        $('#course5').show();
        $('#course6').show();
        $('#course7').show();
    }

    else if (education == "Graduate" && semester == "Summer" && career == "Law") {
        $('.card').hide();
        $('#course6').show();
    }

    else if (education == "Graduate" && semester == "Fall" && career == "Law") {
        $('.card').hide();
        $('#course5').show();
        $('#course6').show();
        $('#course7').show();
        $('#course8').show();
    }

    else if (education == "Under graduate" && semester == "Spring" && career == "Law") {
        $('.card').hide();
        $('#course5').show();
        $('#course6').show();
    }

    else if (education == "Under graduate" && semester == "Summer" && career == "Law") {
        $('.card').hide();
        alert("No available courses");
        window.location.href = "../index.html";
    }

    else if (education == "Under graduate" && semester == "Fall" && career == "Law") {
        $('.card').hide();
        $('#course5').show();
        $('#course6').show();
        $('#course7').show();
    }

    else {
        alert("Invalid input");
    }
    

    //Previous students reviews on instructors and courses
    jQuery('#student_review_course1_1').replaceWith(jQuery('#student_review1'));
    jQuery('#student_review_course1_2').replaceWith(jQuery('#student_review2'));
    jQuery('#student_review_course1_3').replaceWith(jQuery('#student_review3'));
    jQuery('#student_review_course3_1').replaceWith(jQuery('#student_review4'));
    jQuery('#student_review_course3_2').replaceWith(jQuery('#student_review5'));
    jQuery('#student_review_course4_1').replaceWith(jQuery('#student_review1'));
    jQuery('#student_review_course6_1').replaceWith(jQuery('#student_review3'));
    jQuery('#student_review_course6_2').replaceWith(jQuery('#student_review2'));
    jQuery('#student_review_course7_1').replaceWith(jQuery('#student_review1'));
    jQuery('#student_review_course7_1').replaceWith(jQuery('#student_review4'));
});

