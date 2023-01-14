let currencyElement = document.querySelector(".js-currency");
let amountElement = document.querySelector(".js-amount");
let submitElement = document.querySelector(".js-submit");
let resultElement = document.querySelector(".js-result");

let rateUSD = 4.43;
let rateEUR = 4.69;
let rateGBP = 5.37;
let rateCHF = 4.72;

submitElement.addEventListener("click", (event) => {
    event.preventDefault();

    let currency = currencyElement.value;
    let amount = amountElement.value;

    if (parseFloat(amount.replace(',', '.')) <= 0) {
        alert("Wprowadzona kwota do przeliczenia nie jest dodatnia.")
        return;
    }

    let result = 0;

    switch (currency) {
        case "Dolar Amerykański":
            result = (rateUSD * parseFloat(amount.replace(',', '.')));
            resultElement.value = result.toFixed(2);
            break;

        case "Euro":
            result = (rateEUR * parseFloat(amount.replace(',', '.')));
            resultElement.value = result.toFixed(2);
            break;

        case "Funt Brytyjski":
            result = (rateGBP * parseFloat(amount.replace(',', '.')));
            resultElement.value = result.toFixed(2);
            break;

        case "Frank Szwajcarski":
            result = (rateCHF * parseFloat(amount.replace(',', '.')));
            resultElement.value = result.toFixed(2);
            break;
    }
});