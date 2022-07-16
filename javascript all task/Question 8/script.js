var ck_name = /^[A-Za-z0-9]{3,20}$/;
var ck_email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
var ck_password = /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;
var ck_phone = /^[0-9]{10}$/;

function validate(form) {
    var name = form.name.value;
    var email = form.email.value;
    var password = form.password.value;
    var phone = form.phoneNumber.value;
    var gender = form.gender.value;
    var language = form.language.value;
    var course = form.course.value;
    var framework = form.framework.value;
    var about = form.about.value;
    var date = form.date.value;

    var errors = [];

    if (!ck_name.test(name)) {
        errors[errors.length] = "Enter Your valid Name .";
    }

    if (!ck_email.test(email)) {
        errors[errors.length] = "You must enter a valid email address.";
    }
    if (!ck_password.test(password)) {
        errors[errors.length] = "You must enter a valid Password min 6 char.";
    }
    if (!ck_phone.test(phone)) {
        errors[errors.length] = "Enter 10 digit Phone no without +91";
    }
    if (gender == 0) {
        errors[errors.length] = "Select Gender";
    }
    if (language == 0) {
        errors[errors.length] = "Select language";
    }
    if (course == 0) {
        errors[errors.length] = "Select courses";
    }

    if (framework.checked == false) {
        errors[errors.length] = "Select framework";
    }
    if (about == 0) {
        errors[errors.length] = "Please fill about yourself";
    }
    if (date == 0) {
        errors[errors.length] = "Select date";
    }

    if (errors.length > 0) {
        reportErrors(errors);
        return false;
    }

    let message = "Your name is " + name;
    message += "\n Your email is " + email;
    message += "\n Your password is " + password;
    message += "\n Your phone number is " + phone;
    message += "\n Your gender is " + gender;
    message += "\n You know " + language;
    message += "\n About you : " + about;
    message += "\n You selcted this date : " + date;
    alert(message);
    return true;
}

function reportErrors(errors) {
    var msg = "Please Enter Valide Data...\n";
    for (var i = 0; i < errors.length; i++) {
        var numError = i + 1;
        msg += "\n" + numError + ". " + errors[i];
    }
    alert(msg);
}