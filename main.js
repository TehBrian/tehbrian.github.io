function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function buttonOne() {
    document.getElementById("one").innerHTML = "Clicked One Button!";
    window.alert("Clicked One Button!");
}

function buttonTwo() {
    document.getElementById("two").innerHTML = "Clicked Two Button! And, your random number is " + randomNum(0, 10) + "!";
}