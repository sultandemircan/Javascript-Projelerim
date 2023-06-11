/*
? SORULAR
1-Türkçe 40
2-Matematik 40
3-Sosyal Bilgiler 20
4-Fen Bilimleri 20

----100 puan ÖSYM tarafindan veriliyor.
----Okul max 60 puan veriyor.
----Her soru 4 puan değerinde
*/


let matematikDogru,matematikYanlis =0;
let turkceDogru,turkceYanlis =0;
let sosyalDogru,sosyalYanlis =0;
let fenDogru,fenYanlis =0;
let okulPuani=0;
let toplamDogru=0;
let toplamYanlis=0;
let puan=0;
let toplamNet=0;
const yeniSatir = "\r\n";
let secim = prompt("TYT Puan Hesaplama Uygulamasina Hoşgeldiniz"+yeniSatir+"Lütfen yapmak istediğiniz işlemi seciniz"+yeniSatir+"1-Puan Hesapla"+yeniSatir+"2-Çikiş Yap");

switch(secim){
    case "1":
        okulPuani = Number(prompt("Okul puaninizi giriniz:"));

        matematikDogru = Number(prompt("Matematik doğru sayisi:"));
        matematikYanlis=Number(prompt("Matematik yanliş sayisi:"));

        turkceDogru = Number(prompt("Türkçe doğru sayisi:"));
        turkceYanlis=Number(prompt("Türkçe yanliş sayisi:"));

        sosyalDogru = Number(prompt("Sosyal doğru sayisi:"));
        sosyalYanlis=Number(prompt("Sosyal yanliş sayisi:"));

        fenDogru = Number(prompt("Fen doğru sayisi:"));
        fenYanlis=Number(prompt("Fen yanliş sayisi:"));

        let toplamDogru=Number((matematikDogru+turkceDogru+sosyalDogru+fenDogru));
        let toplamYanlis=Number((matematikYanlis+turkceYanlis+sosyalYanlis+fenYanlis));
        let toplamNet=Number(toplamDogru-(toplamYanlis/4));
        let puan = Number((toplamNet*4)+okulPuani+100);

        alert("TYT Puaniniz: "+puan);
        break;

    case "2":
        alert("Çikiş yapma işleminiz başariyla gerçekleştirilmiştir.");
        break;

    default:
        alert("Lütfen geçerli bir işlem numarasi seçiniz!");
        break;







        


}






