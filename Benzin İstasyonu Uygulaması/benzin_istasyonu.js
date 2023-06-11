// Benzin İstasyonu Uygulaması
/*
    1-Dizel : 24.53
    2-Benzin : 22.25
    3-LPG : 11.1

    Gelen müşteriden alacağımız bilgiler:
    1-Yakıt Tipi
    2-Yüklenecek yakıt litresi

*/ 

let dizel = 24.53;
let benzin = 22.25;
let lpg = 11.1;

const yenisatir = "\r\n";

let yakitTipi = prompt("1-Dizel"+ yenisatir + "2-Benzin"+ yenisatir + "3-LPG" + yenisatir + "Lütfen yakit tipini seciniz:");



if(yakitTipi=="1" || yakitTipi=="2"  || yakitTipi=="3"){
let litre = Number(prompt("Lütfen yüklenecek yakit litresini giriniz:"));
let bakiye = Number(prompt("Lütfen bakiyenizi giriniz:"));

    if(yakitTipi == "1"){
        let odenecekTutar = (litre* dizel);
        if(odenecekTutar<=bakiye){
            alert("İşleminiz başariyla gercekleşmiştir." + yenisatir + "Bakiye:" + bakiye + yenisatir + "Ödenecek Tutar: " + odenecekTutar + yenisatir + "Kalan Bakiye:" + (bakiye-odenecekTutar));
        }else{
            alert("İşleminiz bakiye yetersizliğinden gercekleştirilememiştir."+ yenisatir + "Bakiye:"+ bakiye + yenisatir + "Ödenecek Tutar: "+ odenecekTutar + yenisatir + "Eksik Tutar: " + (odenecekTutar-bakiye));
        }
    
    }else if(yakitTipi == "2"){
        odenecekTutar = (litre* benzin);
        if(odenecekTutar<=bakiye){
            alert("İşleminiz başariyla gercekleşmiştir." + yenisatir + "Bakiye:" + bakiye + yenisatir + "Ödenecek Tutar: " + odenecekTutar + yenisatir + "Kalan Bakiye:" + (bakiye-odenecekTutar));
        }else{
            alert("İşleminiz bakiye yetersizliğinden gercekleştirilememiştir."+ yenisatir + "Bakiye:"+ bakiye + yenisatir + "Ödenecek Tutar: "+ odenecekTutar + yenisatir + "Eksik Tutar: " + (odenecekTutar-bakiye));
        }
    
    }else if(yakitTipi == "3"){
        odenecekTutar = (litre* lpg);
        if(odenecekTutar<=bakiye){
            alert("İşleminiz başariyla gercekleşmiştir." + yenisatir + "Bakiye:" + bakiye + yenisatir + "Ödenecek Tutar: " + odenecekTutar + yenisatir + "Kalan Bakiye:" + (bakiye-odenecekTutar));
        }else{
            alert("İşleminiz bakiye yetersizliğinden gercekleştirilememiştir."+ yenisatir + "Bakiye:"+ bakiye + yenisatir + "Ödenecek Tutar: "+ odenecekTutar + yenisatir + "Eksik Tutar: " + (odenecekTutar-bakiye));
        }
    
    }
 
}
else{
    alert("Lütfen geçerli bir seçenek giriniz!");
}















