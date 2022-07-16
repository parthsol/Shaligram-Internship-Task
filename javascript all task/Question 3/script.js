function Area() {
    var firstside = parseInt(document.getElementById('firstside').value);
    var secondside = parseInt(document.getElementById('secondside').value);
    var thirdside = parseInt(document.getElementById('thirdside').value);




    console.log(typeof(firstside));
    var s = (firstside + secondside + thirdside) / 2;

    var area = Math.sqrt(s * ((s - firstside) *
        (s - secondside) * (s - thirdside)));

    document.getElementById(
        "display").innerHTML = area;
}