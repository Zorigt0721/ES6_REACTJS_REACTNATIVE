const name = 'Zorigt';
console.log(`Hello ${name}`);

/* 
 const Dota2gg = function(radius){
    let gg = 3.14 * radius ** 2;
    console.log(gg);
}
Dota2gg(5);
console.log(gg); // gg tanigdahgui uchir gg blockond ashiglagdsan buguud block-s garah uydee turul ni utgagui bna.
*/
// *! ene uyd bol ajillana uchir ni block-g garsan 'gg'-d turul onooj duudsan yum.
// const Pubg = function(radius){
//     let gg = 3.14 * (radius ** 2);
//     return gg;
// }
// const gg = Pubg(5);
// console.log(gg);


// *? Arrow function tuhai buyu '() =>' temdeglegee
const Dota2gg = (radius) => {
    return 3.14 * radius ** 2;
}
const gg = Dota2gg(3);
console.log(gg);

// *? buur boginosgoson helber
const Pubg = radius => 3.14 * radius ** 2;
const chicken = Pubg(5);
console.log(chicken);

// *? Practise arrow function

const shine = () => `Hello ${name}`;
const butsaalt = shine();
console.log(butsaalt);

// !TODO: jishee 1a huvilbar

// const tulbur = function (buteegdehuun, une){
//     let niilberdun = 0;
//     for (let i = 0; i < buteegdehuun.length; i++){
//         niilberdun += buteegdehuun[i] + buteegdehuun[i] * une;
//     }
//     return niilberdun;
// }

// !TODO: jishee 1b huvilbar

const tulbur = (buteegdehuun, une) => {
    let niilberdun = 0;
    for (let i = 0; i < buteegdehuun.length; i++){
        niilberdun += buteegdehuun[i] + buteegdehuun[i] * une;
    }
    return niilberdun;
}

console.log(tulbur([10,20,30,45], 0.2));

const greet = () => 'Snuu?';
let butsaalt1 = greet();
console.log(butsaalt1);

let butsaalt2 = name.toUpperCase();
console.log(butsaalt2);

// *! Callbacks and foreach-iin talaar func dotor func duudah
// *? callbacks
const myFunc = (callbackFunc) => {
    let utga = 100;
    callbackFunc(utga);
};
myFunc(function(utga){
    console.log(utga);
});
// Arrowiig ashiglaval iinhuu bogino oilgomjtoi haragdana
myFunc(utga =>{
    console.log(utga);
});
// *? foreach

let humuus = ['Temuulen', 'P.Anujin', 'Zorigt'];

// humuus.forEach(function(){
//     console.log('henbeee');
// });
// ene ni humuus dotor utguudiig henbeee-r oorchilno

// hun gedeg huvisagchind hunii ner oruulaad hewlej bgaa baidal.
humuus.forEach(function(hun){
    console.log(hun);
});
// foreach bichiglel ni
// !TODO:
/*
    (yronhii utguud[, index[, tuhain element]])
*/
humuus.forEach((hun, bairshil, again) => {
    console.log(again, bairshil, hun);
});
// arrow-tai baidal
const logHun = (hun, index) => {
    console.log(`${index} - sainuu? ${hun}`);
};
humuus.forEach(logHun);