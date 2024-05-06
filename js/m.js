/* localStore */
/*locax`lStorage.setItem('ism','islom');
localStorage.setItem('familya','Toshkanof')
localStorage.setItem('yoshi','20 yoshda')
localStorage['ism'] = "Shaxzoda"
localStorage['familya'] = 'Toshkanova'
let uningIsmi = localStorage.getItem('ism')*/
/*localStorage.removeItem('ism');
localStorage.removeItem('familya');
localStorage.removeItem('yoshi');*/
/*localStorage.clear()
let uningFamilyasi = localStorage.getItem('familya')
localStorage['yoshi'] = "22 yoshda"
let uningYoshi = localStorage.getItem('yoshi')
console.log(uningIsmi,uningFamilyasi,uningYoshi)*/
/*
let sorov = new XMLHttpRequest();
sorov.open("get","https://getty.uz/serverdan/malumot/olish");
sorov.send();
sorov.onload = function () {
    console.log(sorov.responseText)}*/
/*let jsFile = {ism: "Shaxzoda", yoshi: 22};
let jsonFile = '{ "ism": "islom","yoshi": 20}'
console.log(JSON.stringify(jsFile))*/
/*let sorov = new XMLHttpRequest();
sorov.open("get","jsonFile.json");
sorov.send()
sorov.onload' = function () {
console.log(JSON.parse(sorov.responseText));}*/
/*
let matn = "sen gapir sen men esa sen bilan yozib boramiz";
let birinchiSenIndeksi = matn.indexOf('sen');
console.log(matn.indexOf('sen',birinchiSenIndeksi + 1));
*/

let matn = "Salom hammaga! salom berdim hammaga.salom";

let yangiMatn = matn.replace(/salom|hammaga/gi, function (soz) {
    if (soz == "Salom" || soz == "salom"){
        return "alik";
    }else if (soz == "hammaga"){
        return "barchaga";
    }
});
console.log(yangiMatn)
    

