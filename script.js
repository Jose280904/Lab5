const form = document.getElementById("tipForm");
const billTotal = document.getElementById("billTotal");
const billWithTax = document.getElementById("billWithTax");
const currency = document.getElementById("currency");
const tipRange = document.getElementById("tipRange");
const tipPercent = document.getElementById("tipPercent");
const tipAmount = document.getElementById("tipAmount");
const totalWithTip = document.getElementById("totalWithTip");
const totalWithTipAndTax = document.getElementById("totalWithTipAndTax");
const convertedTip = document.getElementById("convertedTip");
const convertedTotal = document.getElementById("convertedTotal");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("input", function () {
    const bill = parseFloat(billTotal.value);
    const tip = parseFloat(tipRange.value);

    tipPercent.value = tip + "%";
    errorMessage.textContent = "";

    if (billTotal.value.trim() === "") {
        tipAmount.value = "";
        totalWithTip.value = "";
        totalWithTipAndTax.value = "";
        billWithTax.value = "";
        convertedTip.value = "";
        convertedTotal.value = "";
        return;
    }

    if (isNaN(bill) || bill < 0 || billTotal.value.includes("$")) {
        errorMessage.textContent = "Please enter a valid positive number for the bill total.";
        tipAmount.value = "";
        totalWithTip.value = "";
        totalWithTipAndTax.value = "";
        billWithTax.value = "";
        convertedTip.value = "";
        convertedTotal.value = "";
        return;
    }

    if (bill === 0) {
        tipAmount.value = "0.00";
        totalWithTip.value = "0.00";
        totalWithTipAndTax.value = "0.00";
        billWithTax.value = "0.00";
        convertedTip.value = "0.00";
        convertedTotal.value = "0.00";
        return;
    }

    const tipValue = bill * (tip / 100);
    const totalTip = bill + tipValue;
    const taxTotal = bill * 1.11;
    const finalTotal = taxTotal + tipValue;

    let rate = 1;

    if (currency.value === "eur") {
        rate = 0.95;
    } else if (currency.value === "inr") {
        rate = 85;
    }

    const convertedTipValue = tipValue * rate;
    const convertedTotalValue = finalTotal * rate;

    tipAmount.value = tipValue.toFixed(2);
    totalWithTip.value = totalTip.toFixed(2);
    billWithTax.value = taxTotal.toFixed(2);
    totalWithTipAndTax.value = finalTotal.toFixed(2);
    convertedTip.value = convertedTipValue.toFixed(2);
    convertedTotal.value = convertedTotalValue.toFixed(2);
});