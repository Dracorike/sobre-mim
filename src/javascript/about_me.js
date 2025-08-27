//Código para calcular a minha idade de acordo com o ano atual
let currentAge = new Date().getFullYear() - 2001;
document.getElementById('current-age').innerText = String(currentAge);