const ul = document.querySelector('.nernuud');

const nernuud = ['Temuulen', 'P.Anujin', 'Zorigt'];

let html = ``; //html huvisagchind temdegt zarlaj hooson utga onooj bna

nernuud.forEach((name) =>{
    html += `<li style = "color: #0984e3; font-size: 32px"> ${name}</li>`;
});
// console.log(html);

ul.innerHTML = html;