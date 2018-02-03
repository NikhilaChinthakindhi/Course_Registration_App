//get course id passed from display courses page from the url
var url = window.location.href.split('?');
var course_id = url[url.length - 1];

//Assigning course data from local storage to array
var course_details_arr;
var ls_course;
if (course_id == "1001") {
    course_details_arr = JSON.parse(localStorage.getItem('ls_course1'));
    ls_course = "ls_course1";
}

else if (course_id == "1002") {
    course_details_arr = JSON.parse(localStorage.getItem('ls_course2'));
    ls_course = "ls_course2";
}

else if (course_id == "1003") {
    course_details_arr = JSON.parse(localStorage.getItem('ls_course3'));
    ls_course = "ls_course3";
}

else if (course_id == "1004") {
    course_details_arr = JSON.parse(localStorage.getItem('ls_course4'));
    ls_course = "ls_course4";
}

else if (course_id == "2001") {
    course_details_arr = JSON.parse(localStorage.getItem('ls_course5'));
    ls_course = "ls_course5";
}

else if (course_id == "2002") {
    course_details_arr = JSON.parse(localStorage.getItem('ls_course6'));
    ls_course = "ls_course6";
}

else if (course_id == "2003") {
    course_details_arr = JSON.parse(localStorage.getItem('ls_course7'));
    ls_course = "ls_course7";
}

else if (course_id == "2004") {
    course_details_arr = JSON.parse(localStorage.getItem('ls_course8'));
    ls_course = "ls_course8";
}

else {
    alert("Invalid URL");
    window.location.href = "../display_courses.html";
}


//Assign values to id's to display in register courses page
$('#course_name').text(course_details_arr.name);
$('#total_seats').text("Total seats for the course are " + course_details_arr.total);
$('#remaining_seats').text("Remaining seats are " + course_details_arr.remaining);
$('#user_name').text("Hi " + localStorage.getItem("ls_name") + ",");



//Decrement remaining seats on enroll button click
$('#enroll').click(function () {
    if (course_details_arr.remaining == 0) {
        alert("No seats remaining to enroll");
        window.location.href = "../register_courses.html";
    }
    else{
        course_details_arr.remaining -= 1;
        localStorage.setItem(ls_course, JSON.stringify(course_details_arr));
    }

});


