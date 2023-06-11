//Asal Sayi Uygulamasi


let sayi = Number(prompt('Sayiyi giriniz'));
let i;
let asal = true;

for (i = 2; i <= sayi/2; i++) {
    if (sayi % i === 0) {
        asal = false;
        break;
    }
}

if (asal) {
    alert(sayi+" asal sayidir");
} else {
    alert(sayi+" asal sayi değildir");
}



