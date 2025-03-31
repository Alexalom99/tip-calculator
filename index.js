// ¡Buena suerte!

const bill = document.querySelector("#bill");
const tip = document.querySelector("#tip");
const button = document.querySelector("#calculate");
const total = document.querySelector("#total");

button.addEventListener("click", function (e) {
    let result = parseFloat(bill.value) + parseFloat(bill.value)*parseFloat(tip.value)*0.01;
    total.textContent = "$" + result.toFixed(2);
});