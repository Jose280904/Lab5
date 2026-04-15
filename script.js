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

tipPercent.addEventListener("focus", function () {
    tipPercent.value = tipRange.value;
});

form.addEventListener("input", function () {
    const bill = parseFloat(billTotal.value);
    let tip;

    if (document.activeElement === tipPercent) {
        tip = parseFloat(tipPercent.value) || 0;

        if (tip < 0) tip = 0;
        if (tip > 100) tip = 100;

        tipRange.value = tip;
    } else {
        tip = parseFloat(tipRange.value);
        tipPercent.value = tip + "%";
    }

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

    const taxTotal = bill * 1.11;
    const tipValue = bill * (tip / 100);
    const totalTip = bill + tipValue;
    const finalTotal = taxTotal + tipValue;

    let rate = 1;

    if (currency.value === "eur") {
        rate = 0.95;
    } else if (currency.value === "inr") {
        rate = 85;
    }

    const convertedBillWithTax = taxTotal * rate;
    const convertedTipValue = convertedBillWithTax * (tip / 100);
    const convertedTotalValue = convertedBillWithTax + convertedTipValue;

    tipAmount.value = tipValue.toFixed(2);
    totalWithTip.value = totalTip.toFixed(2);
    billWithTax.value = taxTotal.toFixed(2);
    totalWithTipAndTax.value = finalTotal.toFixed(2);
    convertedTip.value = convertedTipValue.toFixed(2);
    convertedTotal.value = convertedTotalValue.toFixed(2);
});