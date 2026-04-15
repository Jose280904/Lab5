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

// Validation
if (isNaN(bill) || bill < 0) {
    tipAmount.value = "";
    totalWithTip.value = "";
    billWithTax.value = "";
    convertedTip.value = "";
    convertedTotal.value = "";
    return;
}

// Reset if bill is 0
if (bill === 0) {
    tipAmount.value = "0.00";
    totalWithTip.value = "0.00";
    billWithTax.value = "0.00";
    convertedTip.value = "0.00";
    convertedTotal.value = "0.00";
    return;
}

const tipValue = bill * (tip / 100);
tipAmount.value = tipValue.toFixed(2);

// Total with tip
const totalTip = bill + tipValue;
totalWithTip.value = totalTip.toFixed(2);

// Total with tax (11%)
const taxTotal = bill * 1.11;
billWithTax.value = taxTotal.toFixed(2);

// Total with tip AND tax
const totalWithTipAndTax = taxTotal + tipValue;

let rate = 1;

// Determine conversion rate
if (currency.value === "eur") {
    rate = 0.95;
} else if (currency.value === "inr") {
    rate = 85;
}

// Convert values
const convertedTipValue = tipValue * rate;
const convertedTotalValue = totalWithTipAndTax * rate;

// Display converted values
convertedTip.value = convertedTipValue.toFixed(2);
convertedTotal.value = convertedTotalValue.toFixed(2);