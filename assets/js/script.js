let result = document.getElementById("ergebnis");
result = 0;
console.log(result.value);

function add1() {
    result ++;
    document.getElementById("ergebnis").innerHTML = result;
}
function sub1() {
    result --;
    document.getElementById("ergebnis").innerHTML = result;
}
function add10() {
    result += 10;
    document.getElementById("ergebnis").innerHTML = result
}
function sub10() {
    result -= 10;
    document.getElementById("ergebnis").innerHTML = result
}
function add100() {
    result += 100;
    document.getElementById("ergebnis").innerHTML = result
}
function sub100() {
    result -= 100;
    document.getElementById("ergebnis").innerHTML = result
}
function reset() {
    result = 0;
    document.getElementById("ergebnis").innerHTML = result
}
function multi2() {
    result *= 2;
    document.getElementById("ergebnis").innerHTML = result
}