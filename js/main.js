/* localStore */
/*localStorage.setItem('ism','islom');
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

let sorov = new XMLHttpRequest();
sorov.open("get","https://getty.uz/serverdan/malumot/olish");
sorov.send();
