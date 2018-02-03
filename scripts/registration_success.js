//Assign values to id's to display in register courses page
$('#courses_name').text(course_details_arr.name);
$('#remaining_seats_upon_reg').text("Remaining seats are " + course_details_arr.remaining);
$('#users_name').text(localStorage.getItem("ls_name") + ",");