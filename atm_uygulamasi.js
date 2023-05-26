// ATM Uygulaması
/*
1-Bakiye Görüntüleme
2-Para Çekme
3-Para Yatırma
4-Çıkış
*/

let bakiye = Number(1000);
const yeniSatir="\r\n";
let secim = prompt("1-Bakiye Görüntüleme"+yeniSatir+"2-Para Çekme"+yeniSatir+"3-Para Yatirma"+yeniSatir+"4-Çikiş"+yeniSatir+"Lütfen yapmak istediğini işlemi seçiniz:");

switch(secim){
    case "1":
        alert("Bakiye:"+bakiye+" TL");
        break;
    case "2":
        let cekilecekTutar = Number(prompt("Çekmek istediğiniz tutari giriniz:"));
        if(cekilecekTutar>bakiye){
            alert("Yetersiz Bakiye!"+yeniSatir+"Bakiye: "+bakiye+yeniSatir+"Çekmek istediğiniz tutar: "+cekilecekTutar);
        }else{
            alert("Para Çekme işleminiz başariyla gerçekleştirilmiştir. "+yeniSatir+"Çekilen tutar: "+cekilecekTutar+yeniSatir+"Güncel Bakiye: "+(bakiye-cekilecekTutar));
        }
        break;
    case "3":
        let yatirilacakMiktar = Number(prompt("Yatirmak istediğiniz miktari giriniz:"));
        let guncelBakiye = bakiye+yatirilacakMiktar;
        alert("Eski bakiye: "+bakiye+yeniSatir+"Yatirilan Miktar: "+yatirilacakMiktar+yeniSatir+"Güncel bakiye: "+guncelBakiye);
        break;
    case "4":
        alert("Çikiş işleminiz başariyla gerçekleştirilmiştir.");
        break;
    default :
        alert("Lütfen gecerli bir işlem numarasi giriniz!");
        break;

        

}






