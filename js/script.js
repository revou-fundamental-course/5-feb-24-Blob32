var formSuhu = document.getElementById("formSuhu");
var inputCelsius = document.getElementById("inputCelsius");
var inputFahrenheit = document.getElementById("inputFahrenheit");
var caraKalkulasi = document.getElementById("caraKalkulasi");
var btnKonvert = document.getElementById("btnKonvert");
var btnReset = document.getElementById("btnReset");
var btnReverse = document.getElementById("btnReverse");
function convertTo(unit) {
    if (unit === 'fahrenheit') {
        var celsius = parseFloat(inputCelsius.value);
        var fahrenheit = (celsius * 9/5) + 32;
        inputFahrenheit.value = fahrenheit;
        caraKalkulasi.value = celsius + "°C × 9/5 + 32 = " + fahrenheit + "°F";
    } else {
        var fahrenheit = parseFloat(inputFahrenheit.value);
        var celsius = (fahrenheit - 32) * 5/9;
        inputCelsius.value = celsius;
        caraKalkulasi.value = fahrenheit + "°F - 32 × 5/9 = " + celsius + "°C";
    }
}
function reset() {
    inputCelsius.value = "";
    inputFahrenheit.value = "";
    caraKalkulasi.value = "";
}
function reverse() {
    var labelCelsius = document.querySelector('label[for="inputCelsius"]');
    var labelFahrenheit = document.querySelector('label[for="inputFahrenheit"]');
    var tempLabel = labelCelsius.innerHTML;
    labelCelsius.innerHTML = labelFahrenheit.innerHTML;
    labelFahrenheit.innerHTML = tempLabel;
    
    var tempValue = inputCelsius.value;
    inputCelsius.value = inputFahrenheit.value;
    inputFahrenheit.value = tempValue;
    inputCelsius.value = "";
    inputFahrenheit.value = "";
    caraKalkulasi.value = "";
}
btnKonvert.addEventListener("click", function() {
    var unit = document.querySelector('label[for="inputCelsius"]').innerHTML;
    if (unit === 'Celsius') {
        convertTo('fahrenheit');
    } else {
        convertTo('celsius');
    }
});
btnReset.addEventListener("click", function() {
    reset();
});
btnReverse.addEventListener("click", function() {
    reverse();
});