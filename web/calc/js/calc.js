console.log("calc js loaded");

const answer = document.getElementById("result");

function aTest() {
    answer.innerHTML = "Farts";
}

function aAdd() {
    answer.innerHTML =12 * 5;
}

function aPlus() {
    var a = 45 + 81;
    console.log("Fourty Five Plus Eighty One Is: " + a);
    answer.innerHTML = a;
}

function aMinus(c, d) {
    var result = c * d;
    answer.innerHTML = result;
}
