

// ***************  VÜCUT KİTLE ENDEKSİ HESAPLAMA  ***************  

//Örnek Verilen formüle göre vücut kitle indeksi hesaplayan ve hesapladığı değere göre yazı yazan bir program yazalım. Programda yazılmış kısımları okuyup eksik kısımları tamamlayın.

//Fonksiyon parametreleri prompt ile kullanıcıdan alınmalı.

//Formül: vki = kg/(m * m)

//İstenilenler:

//Prompt ile kullanıcıdan bilgi almak
//Verilen formülü uygun yere yazmak
//Formülde metre cinsinden istendiği için diyalog kutucuğuna metre cinsinden örnek 1.66 yazarak kullanıcıya rehberlik etmek


var weight = prompt("Boyunuzun Metre cinsinden değerinizi giriniz", "Örnek: 1.80")
var height = prompt("Kilo değerinizi giriniz", "Örnek: 77")


function vkiHesapla(weight, height) {

var vki = (height / (weight * weight) );


  if(vki<18.5) return alert(`Vücut kitle indeksiniz: ${vki}, değerleriniz düşüktür`);

  if(vki>= 18.5 && vki <= 24.9) return alert(`Vücut kitle indeksiniz: ${vki}, normal değerdesiniz`);
  
  if(vki>= 25.0 && vki <= 29.9) return alert(`Vücut kitle indeksiniz: ${vki}, KİLOLUSUNUZ`);
  
  if(vki>= 30) return alert(`Vücut kitle indeksiniz: ${vki}, aşırı kilolusunuz`);
  
  return alert("Girdiğiniz değerleri kontrol ediniz");
  
};

vkiHesapla(weight, height);
console.log(vkiHesapla);

//let kg = 77
//let m = 1.80

//let vki = (kg / (m * m) );
//console.log(vki)  // 21.604938271604937




// ***************  TAHMİN OYUNU  ***************  

//Örnek Tahmin Oyunu: Bilgisayar tarafından 10 'a kadar tutulmuş olan rastgele sayıyı bulalım:

var randomSayi = Math.floor(Math.random() *10); 
// Girdiğimiz sayıyı aklında tutması için prompt değişkene atanır

var tahmin = prompt("Bir sayi gir ve rastgele sayiyi bulmaya çalış!");

if ( tahmin == randomSayi && tahmin != null) alert("Bildin bro!!!");

else if (tahmin == "") alert("Boş bırakma hacıt!");
else if (tahmin == null) alert("Giriş yapmaktan vazgeçtiniz!");

else {
alert("Bir daha dene bea :(, Random Sayi: " + randomSayi);
}




// ***************  NOT ORTALAMASI HESAPLAMA  ***************  

//Örnek: Vize ve final notları belli olan bir öğrencinin yıl sonunda dersten geçip geçmediğini hesaplayalım:

//Şartlar:
// Öğrencinin vize notunun %30'unu final notunun %70'ini alalım.
// Vize ve final notunun toplamından doğan not ortalaması eğer 0-30 aralığındaysa KALDINIZ (FF) yazdıralım.
// 31-49 aralığındaysa DC - KOŞULLU yazdıralım.
// 50- 84 aralığındaysa CC - GEÇTİNİZ! yazdıralım.
// 85-100 aralığındaysa Notunuz AA yazdıralım.

// Elimizdeki bilgiye göre:
// Vize Notu: 10
// Final Notu: 65
// Ortalama kaç gelir ve sonuç ne çıkar?


var ogrVizeNot = 10;
var ogrFinalNot = 65;

var ogrOrtalama = (ogrVizeNot * 0.3) + (ogrFinalNot * 0.7);

if (ogrOrtalama >= 0 && ogrOrtalama <= 30 ) {
    console.log("Not ortalamanız: " +ogrOrtalama + " KALDINIZ (FF)."  );
}

else if (ogrOrtalama >= 31 && ogrOrtalama <= 49 ) {
    console.log("Not ortalamanız: " +ogrOrtalama + " KOŞULLU GEÇTİNİZ (DC)."  );
}

else if (ogrOrtalama >= 50 && ogrOrtalama <= 84 ) {
    console.log("Not ortalamanız: " +ogrOrtalama + " GEÇTİNİZ! (CC)."  );
}


else if (ogrOrtalama >= 85 && ogrOrtalama <= 100 ) {
    console.log("Not ortalamanız: " +ogrOrtalama + " GEÇTİNİZ! (AA)."  );
}

//Not ortalamanız: 48.5 KOŞULLU GEÇTİNİZ (DC).



// ***************  BASİT BİR HESAP MAKİNESİ  ***************  

// islem adında bir name fonksiyon ifadesi (function expression) tanımladık, bu fonksiyon ifadesi 3 parametre alıyor. 1. ve 2. parametreler işlem yapılacak sayılar ve 3. parametre 'string' olarak yapılacak işlemdir. Switch yapısında tanımlanmış olan case etiketlerinde yapmak istediğimiz işlemleri tanımlıyoruz. Bu fonksiyonun işlem sonucunda bir değer döndürmesini istedik, sonrasında ilgili işlemler için sonuçları konsola yazdırdık.

let islem = function (x, y, calculator) {
    
    switch (calculator) {

        case 'toplama':
            return x + y;
        break;

        case 'cikarma':
            return x- y;
        break;

        case 'carpma':
            return x * y;
        break;

        case 'bolme':
            return x / y;
        break;

        case 'us':
            return x ** y;
        return;

        case 'us + (x ile toplama)':
            return x ** y + x;
        break;

        case 'Karekök':
            return  x * x;
        break;

        default:
            return 'Tanimlanmamis islem';
        break;
    }
};

console.log(islem(300, 100, 'toplama'));  // 400

console.log(islem(300, 100, 'carpma')) // 30000

console.log(islem(2, 4, 'us')) // 16

console.log(islem (2, 4, 'us + (x ile toplama)') ) // 18

console.log(islem (7, 7, 'Karekök' )); // √49


// ***************  NOT ORTALAMASI HESABI (AA - ... - FF)  ***************  

// index.html:
//<h2 id="info"></h2>

const PATATES = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-dizzy" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M9.146 5.146a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708zm-5 0a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 1 1 .708.708l-.647.646.647.646a.5.5 0 1 1-.708.708L5.5 7.207l-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708zM10 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
</svg>`

const SMILE = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-sunglasses" viewBox="0 0 16 16">
  <path d="M4.968 9.75a.5.5 0 1 0-.866.5A4.498 4.498 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.498 3.498 0 0 1 8 11.5a3.498 3.498 0 0 1-3.032-1.75zM7 5.116V5a1 1 0 0 0-1-1H3.28a1 1 0 0 0-.97 1.243l.311 1.242A2 2 0 0 0 4.561 8H5a2 2 0 0 0 1.994-1.839A2.99 2.99 0 0 1 8 6c.393 0 .74.064 1.006.161A2 2 0 0 0 11 8h.438a2 2 0 0 0 1.94-1.515l.311-1.242A1 1 0 0 0 12.72 4H10a1 1 0 0 0-1 1v.116A4.22 4.22 0 0 0 8 5c-.35 0-.69.04-1 .116z"/>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-1 0A7 7 0 1 0 1 8a7 7 0 0 0 14 0z"/>
</svg>` 

let examGrade = prompt("Not Ortalamanızı Yazınız");

let textInfo;

textInfo = 
(examGrade == '') ? 'Boş' :  // console.log'da gözükür sadece, çünkü aşağıda innerHTML kısmında belirttim
(examGrade >= 90) ? `AA ${SMILE}` : 
(examGrade >= 85) ? `BA ${SMILE}` :
(examGrade >= 80) ? `BB ${SMILE}` :
(examGrade >= 75) ? `CB ${SMILE}` :
(examGrade >= 70) ? `CC ${SMILE}` :
(examGrade >= 65) ? `DC ${SMILE}` :
(examGrade >= 60) ? `DD ${SMILE}` :
(examGrade >= 50) ? `FD ${SMILE}` :
(examGrade <  50) ? `FF ${PATATES}` : 
"";

let info = document.querySelector('#info'); // info id'li h2 başlığımda yazacağım

// info.classList.add('text-primary') // info id'li h2'başlığıma yazılacak şeyin rengine müdahale ettim

info.classList.add = 
(examGrade >= 50 && examGrade <= 100) ? info.classList.add('text-primary') : 
info.classList.add('text-danger'); // 50-100 arası mavi yazacak > 0-50 arası ise kırmızı

//info.innerHTML =  `${examGrade ? textInfo : "Boş bıraktınız :(" }`  // Burada sadece AA - BB gibi aldığı notlar yazar, fakat:
info.innerHTML =  `${(examGrade >= 0 && examGrade <= 100) ? `Notunuz: ${examGrade} / Durumunuz: ${textInfo}` : 
"Geçersiz Not veya boş bıraktınız :(" }`   
// Notunuz :100 / Durumunuz: AA (sırıtan smiley)
// Ayrıçana 0-100 arası sayı değilde, -1 veya 101 yazarsanız: "Geçersiz Not veya boş bıraktınız :(" çıktısı gelecektir!

console.log(textInfo) // console penceresinde de yazar.

















