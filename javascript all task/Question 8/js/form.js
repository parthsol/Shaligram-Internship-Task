function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
}

function validateForm() {

    var name = document.Form.name.value;
    var email = document.Form.email.value;
    var mobile = document.Form.mobile.value;
    var country = document.Form.country.value;
    var gender = document.getElementsByName('gender');
    var address = document.Form.address.value;
    var checkbox = document.getElementsByName('check1');
    var selectpicker = document.Form.selectpicker.value;
    var password = document.Form.password.value;


    var nameErr = emailErr = mobileErr = countryErr = genderErr = addressErr = selectpickerErr = passwordErr = true;

    if (address == "") {
        printError("addressErr", "Please enter your address");
        var elem = document.getElementById("address");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        var regex = /^[a-zA-Z0-9\s,'-]*$/;
        if (regex.test(name) === false) {
            printError("addressErr", "Please enter a valid address");
            var elem = document.getElementById("address");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("addressErr", "");
            addressErr = false;
            var elem = document.getElementById("address");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");


        }
    }

    if (name == "") {
        printError("nameErr", "Please enter your name");
        var elem = document.getElementById("name");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
            var elem = document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("nameErr", "");
            nameErr = false;
            var elem = document.getElementById("name");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");


        }
    }


    if (email == "") {
        printError("emailErr", "Please enter your email address");
        var elem = document.getElementById("email");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {

        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
            var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("emailErr", "");
            emailErr = false;
            var elem = document.getElementById("email");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

        }
    }


    if (mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
        var elem = document.getElementById("mobile");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if (regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
            var elem = document.getElementById("mobile");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("mobileErr", "");
            mobileErr = false;
            var elem = document.getElementById("mobile");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }


    if (country == "Select") {
        printError("countryErr", "Please select your country");
        var elem = document.getElementById("country");
        elem.classList.add("input-4");
        elem.classList.remove("input-3");
    } else {
        printError("countryErr", "");
        countryErr = false;
        var elem = document.getElementById("country");
        elem.classList.add("input-3");
        elem.classList.remove("input-4");
    }


    if (!gender[0].checked && !gender[1].checked) {
        printError("genderErr", "Please select your gender");
        var elem = document.getElementById("gender");
        elem.classList.add("input-4");
        elem.classList.remove("input-3");
    } else {
        printError("genderErr", "");
        genderErr = false;
        var elem = document.getElementById("gender");
        elem.classList.add("input-3");
        elem.classList.remove("input-4");
    }



    var regularExpression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    var minNumberofChars = 6;
    var maxNumberofChars = 16;
    if (password == "") {
        printError("passwordErr", " **Fill the password please!");
        var elem = document.getElementById("password");
        elem.classList.add("input-4");
        elem.classList.remove("input-3");
    } else {
        if (!regularExpression.test(password)) {
            printError("passwordErr", " **password has at least one number and at least one specific charecter and at least one lowwer and one Uppar charecter");
            var elem = document.getElementById("password");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
        }
        if (password.length < minNumberofChars || password.length > maxNumberofChars) {
            printError("passwordErr", " **password min and max length error");
            var elem = document.getElementById("password");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
        } else {
            printError("passwordErr", "");
            genderErr = false;
            var elem = document.getElementById("password");
            elem.classList.add("input-3");
            elem.classList.remove("input-4");
        }

    }

    if (selectpicker == "") {
        printError("selectpickerErr", "Please select one or More Than One Skill");
        var elem = document.getElementById("selectpicker");
        elem.classList.add("input-4");
        elem.classList.remove("input-3");
    } else {
        printError("selectpickerErr", "");
        countryErr = false;
        var elem = document.getElementById("selectpicker");
        elem.classList.add("input-3");
        elem.classList.remove("input-4");
    }


    if (checkbox == "") {
        printError("checkboxErr", "Please select your gender");
        var elem = document.getElementById("checkboxErr");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        printError("checkboxErr", "");
        checkboxErr = false;
        var elem = document.getElementById("checkboxErr");
        elem.classList.add("input-1");
        elem.classList.remove("input-2");
    }



    if ((nameErr || emailErr || mobileErr || countryErr || genderErr || checkboxErr) == true) {
        return false;
    }


    document.getElementById('printname').innerHTML =
        document.getElementById("name").value;

    document.getElementById('printemail').innerHTML =
        document.getElementById("email").value;

    document.getElementById('printmobile').innerHTML =
        document.getElementById("mobile").value;

    document.getElementById('printcountry').innerHTML =
        document.getElementById("country").value;

    document.getElementById('printgender').innerHTML = gender[0].checked ? "Male" : "Female";

    let str = "";

    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

    for (var i = 0; i < checkboxes.length; i++) {
        str += checkboxes[i].value + ", ";
    }

    document.getElementById('printexperience').innerHTML = str;
    document.getElementById('printaddress').innerHTML =
        document.getElementById("address").value;

    document.getElementById('printmulti').innerHTML =
        document.getElementById("selectpicker").value;

    return false;


};