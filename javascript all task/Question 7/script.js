function sumOfPowers() {
    let ans = 0;
    let start = document.getElementById("start").value;
    let end = document.getElementById("end").value;
    let power = document.getElementById("power").value;

    start = parseInt(start);
    end = parseInt(end);
    power = parseInt(power);

    for (let i = start; i <= end; i++) {
        let store = i ** power;

        ans += store;
    }
    document.getElementById("result").style.color = "green";
    document.getElementById("result").innerHTML = "Answer = " + ans;
}