// var бол хувьсагчийн төрөл юм. Энэ нь тэмдэг болон тоон төрлийн нэгтгэсэн хувьсагчийн төрөл 


var exe = 100; // Энд тоон төрлийг ашигласан байдал байна. exe бол мэдээж хувьсагч шүүдээ тэ =)


var school = 'olonlog'; // Энд тэмдэгтийн төрлийг ашигласан байдал байна.
var axa = '203';

console.log('Hello everybody');
// үүнийг бэв броузерийнхаа console орчингоос харах боломжтой.

console.log(exe + +axa); // *? aimshigtai gaihamshigtai


var surguuli = 'olonlog';

// ** ийм '' кавичиг `` энэ хоёр ялгаатай шүү.

var result = `This is ${surguuli} schools`;

console.log(result);

console.log(school);

// *! const тогтмол төрөл учраас тогтмол хувьсагчийн утгыг өөрчилж болохгүй. Мэдээж энэ нь алдаа заана.
// const olonlog = 100;

// olonlog = 50;

// *? console.log(olonlog); үүнийг ажиллуулбал алдаа заана.

// *! html дээр үр дүн хэвлэж үзэцгээе.

// *TODO: 1-р арга 
// *! Энд document-ын араас body-таг дээр үг текстийг хэвлэхээр гаргалаа. Энэ нь дэд тагууд дээр бичигдэх боломжтой.
// *TODO: Бусад тагууд болох эсэхийг туршаад үзээрэй.

// document.body.innerHTML = ("Hello everybody");
// *TODO: 2-р арга 
// alert("hello guys");

// olonlog = "OE11a"; // хувьсагчинд утга оноож алертаар гаргах. Мэдээж том жижиг үсэг ялгаатай.
// alert(olonlog);

// *TODO: 3-р арга
window.alert("Sain uu? user-ee");
// *TODO: 4-р арга
document.write('Temuulen Anujin 2oo snuu?');
// *TODO: 5-р арга
var z = 'Zorigt';
document.getElementById("biy").innerHTML = `My name is ${z}`;
// *TODO: 6-р арга
document.getElementsByClassName("bod").innerHTML = "2019.05.01";