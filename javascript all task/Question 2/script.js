var output = document.getElementById("output");

function calc() {
    var year = document.getElementById("input");

    var realNum = Number(year.value);

    if (Number.isInteger(realNum) && realNum != "") {

        if (year.value % 4 == 0 && !(year.value % 100 == 0)) {
            output.innerHTML = year.value + " is a leap year.";
        } else if (year.value % 400 == 0) {
            output.innerHTML = year.value + " is a leap year.";
        } else {
            output.innerHTML = year.value + " is not a leap year.";
        }

    } else {
        output.innerHTML = "Please enter a year (integers only).";
    }
}