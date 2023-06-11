// Beden Kitle İndeksi Hesaplama
//Vücut ağırlığının boy uzunluğunun karesine bölünmesiyle bulunur.

let kilo = Number(prompt("Lütfen kilonuzu giriniz:"));
let boy = Number(prompt("Lütfen boyunuzu metre cinsinden giriniz:"));

let indeks = kilo/(boy*boy);

if(indeks<18.5){
    console.log("İdeal kilonun altindasiniz." + indeks);
}else if(indeks>=18.5 && indeks<=24.9){
    console.log("İdeal kilodasiniz.");
}else if(indeks>=25 && indeks<=29.9){
    console.log("İdeal kilonun üstündesiniz." + indeks);
}else if(indeks>=30 && indeks<=39.9){
    console.log("İdeal kilonun çok üstündesiniz(obez)." + indeks);
}else if(indeks>=40){
    console.log("İdeal kilonun çok üstündesiniz(morbid obez)" + indeks);
}