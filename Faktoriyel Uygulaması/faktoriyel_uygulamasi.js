//Faktöriyel Uygulamasi

let sayi = Number(prompt("Lütfen sayiyi giriniz:"));
let carpim=1;

for(let i=1; i<=sayi; i++){
    carpim*=i;
    
}
alert(sayi+"! "+"= "+carpim);

