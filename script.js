const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const valor = document.querySelector(".valor");
const valorTwo = document.querySelector(".valorTwo");
const select = document.querySelector(".select");
const secondImg = document.querySelector(".secondImg");
let convertValue 
const API = "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL"
btn.addEventListener("click", convert)
select.addEventListener("change", chandeCurrency)


function convert() {
    convertValue = chandeCurrency()
    valor.innerHTML = new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(input.value);
    
}

function chandeCurrency() {
    const money = document.querySelectorAll(".money");
    const price = fetch(API).then((response) => {return response.json()}).catch((error) => {console.log(error)})
    price.then((data) => {

        switch (select.value) {
            case "Dolar":
                secondImg.src = "/img/estados-unidos (1) 1.svg"
                secondImg.alt = "EUA";
                money[1].innerHTML = "Dólar Americano"
                convertValue = input.value / data.USDBRL.ask;
                valorTwo.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(convertValue);
                return convertValue
                break;
            case "Euro":
                secondImg.src = "/img/euro.svg"
                secondImg.alt = "Europa";
                money[1].innerHTML = "Euro"
                convertValue = input.value / data.EURBRL.ask
                valorTwo.innerHTML = new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"}).format(convertValue);
                return convertValue
                break;
            case "Bitcoin":
                secondImg.src = "/img/bitcoin.svg"
                secondImg.alt = "BTC";
                money[1].innerHTML = "BitCoin"
                convertValue = input.value / data.BTCBRL.ask
                valorTwo.innerHTML = new Intl.NumberFormat("de-DE", {style: "currency", currency: "BTC"}).format(convertValue);
                return convertValue
                break;
            default:
                break;
        }
           
    })
    
    
}







