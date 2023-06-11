//Armstrong Sayi Uygulamasi
//Bir sayiyiyi oluşturan rakamlarının her birinin küpünün toplaminin sayinin kendisini vermesidir.
//153 = 1+125+27
//string metodlarindan yararlanmak için kullanicidan aldiğimiz sayiyi numbere çevirmiyoruz.


let sayi = prompt("Sayiyi giriniz");
let toplam =0;


for(let i=0; i<sayi.length; i++){
    let rakam = sayi.charAt(i);
    toplam += rakam*rakam*rakam;
}


if(toplam==Number(sayi)){
    alert("Girmiş olduğunuz sayi bir armstrong sayisidir.");
}
else{
    alert("Girmiş olduğunuz sayi bir armstrong sayisi değildir.");
}