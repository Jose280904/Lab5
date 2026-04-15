const form = document.getElementById("tipForm");
const billTotal = document.getElementById("billTotal");
const billWithTax = document.getElementById("billWithTax");
const currency = document.getElementById("currency");
const tipRange = document.getElementById("tipRange");
const tipPercent = document.getElementById("tipPercent");
const tipAmount = document.getElementById("tipAmount");
const totalWithTip = document.getElementById("totalWithTip");
const convertedTip = document.getElementById("convertedTip");
const convertedTotal = document.getElementById("convertedTotal");

form.addEventListener("input", function () {
    const bill = parseFloat(billTotal.value);
    const tip = parseFloat(tipRange.value);

    tipPercent.value = tip + "%";
});

//validation
if (isNaN(bill) || bill < 0) {
    tipAmount.value = "";
    totalWithTip.value = "";
    billWithTax.value = "";
    convertedTip.value = "";
    convertedTotal.value = "";
    return;
}

//reset if bill is 0
if (bill == 0) {
    tipAmount.value = "0.00";
    totalWithTip.value = "0.00";
    billWithTax.value = "0.00";
    convertedTip.value = "0.00";
    convertedTotal.value = "0.00";
    return;
}

//calculating tip based on percentage
const tipValue = bill * (tip / 100);
tipAmount.value = tripValue.toFixed(2);

//total with tip
const totalTip = bill + tipValue;
totalWithTip.value = totalTip.toFixed(2);

//total with approx tax which is set to 11%
const taxTotal = bill * 1.11;
billWithTax.value = taxTotal.toFixed(2);

//total with tip and tax
const totalWithTipAndTax = taxTotal + tipValue;