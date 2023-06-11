// DERS ORTALAMASI BULMA UYGULAMASI
// vize1 %30, vize2 %30, final %40


let vize1 = Number(prompt("1. Vize notunuzu giriniz:"));
let vize2 = Number(prompt("2. Vize notunuzu giriniz:"));
let final = Number(prompt("Final notunuzu giriniz:"));

let ortalama = vize1*0.3 + vize2*0.3 + final*0.4;

if(ortalama>=60){
    alert("Ortalamaniz:"+ortalama + ", Tebrikler, geçtiniz.");
    console.log("Tebrikler, geçtiniz");

}else{
    alert("Ortalamaniz:"+ortalama +", Maalesef kaldiniz.");
    console.log("Maalesef kaldiniz");
}


