function convert() {
let celciusValue = Number(document.getElementById("input").value);
let fahrenheitValue = (celciusValue * 1.8) + 32;
let result = document.getElementById("result");
result.innerHTML= fahrenheitValue.toFixed(2) + " degree fahrenheit";
}

