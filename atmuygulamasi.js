/*
! -------------ATM UYGULAMASI----------
1-Bakiye Görüntüleme
2-Para Çekme
"-Para Yatırma
4-Çıkış
*/

let yeniSatir = "\r\n";
let bakiye = 1000;

let metin = "1- Bakiye Görüntüleme" + yeniSatir
    + "2- Para Çekme" + yeniSatir
    + "3- Para Yatırma" + yeniSatir
    + "4- Çıkış" + yeniSatir
    + "Lütfen bir değer seçiniz";
//alert(metin);

let secim = prompt(metin);
switch (secim) {
    case "1":
        alert("Bakiyeniz :" + bakiye);
        break;
    case "2":
        let cekilecekTutar = Number(prompt("Çekmek istediğiniz tutarı giriniz :"));
        if (cekilecekTutar < bakiye) {
            //başarılı
            bakiye = bakiye - cekilecekTutar;
            alert("Kalan Bakiye :" + bakiye);
        } else {
            alert("Bakiyeniz yetersiz" + yeniSatir
                + "Bakiyeniz :" + bakiye + " " + "Çekmek istediğiniz tutar ise :" + cekilecekTutar);
        } break;
    case "3":
        let yatiralacakTutar = Number(prompt("Lütfen yatırmak istediğiniz miktarı giriniz"));
        bakiye = bakiye + yatiralacakTutar;
        alert("Güncel Bakiyeniz : " + bakiye);
        break;

    case "4":
        alert("Sistemden Çıkılmıştır...");
        break;
    default:
        alert("Lütfen 1-4 arasında istediğini işlem için seçim yapınız");
        break;
}