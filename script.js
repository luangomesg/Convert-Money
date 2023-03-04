const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const valor = document.querySelector(".valor");
const valorTwo = document.querySelector(".valorTwo");
const select = document.querySelector(".select");
const secondImg = document.querySelector(".secondImg");
let convertValue 
btn.addEventListener("click", convert)
select.addEventListener("change", chandeCurrency)


function convert() {
    convertValue = chandeCurrency()
    valor.innerHTML = new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(input.value);
    
}

function chandeCurrency() {
    const money = document.querySelectorAll(".money");
    
    switch (select.value) {
        case "Dolar":
            secondImg.src = "/img/estados-unidos (1) 1.jpg"
            money[1].innerHTML = "Dólar Americano"
            convertValue = input.value / 5.20;
            valorTwo.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(convertValue);
            return convertValue
            break;
        case "Euro":
            secondImg.src = "/img/euro.jpg"
            money[1].innerHTML = "Euro"
            convertValue = input.value / 5.53
            valorTwo.innerHTML = new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"}).format(convertValue);
            return convertValue
            break;
        default:
            break;
    }
    
}

