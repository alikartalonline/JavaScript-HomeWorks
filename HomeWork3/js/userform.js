

const userFirstname = document.querySelector('#userFirstname');
const userLastname = document.querySelector('#userLastname');
const userTel = document.querySelector('#userTel');
const userEmail = document.querySelector('#userEmail');
const userAge = document.querySelector('#userAge');
const userCountry = document.querySelector('#userCountry');
const userAdress = document.querySelector('#userAdress');


let userFormDOM = document.querySelector('#userForm')

userFormDOM.addEventListener('submit', formHandler)




const alertDOM = document.querySelector('#alert') 
// html'de ilk sıraya div açtık, id'sini "#alert" yaptık, hata raporu üstte gözüksün istiyorum çünkü.

const alertFunction = (title, message, className= "warning") =>  `<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong> ${title} </strong> ${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`



function formHandler(event) {
    event.preventDefault(); // form submit edildiğinde tarayıcının yneilenmesini önleyen fonksiyon
const userFirstname = document.querySelector('#userFirstname');
const userLastname = document.querySelector('#userLastname');
const userTel = document.querySelector('#userTel');
const userEmail = document.querySelector('#userEmail');
const userAge = document.querySelector('#userAge');
const userCountry = document.querySelector('#userCountry');
const userAdress = document.querySelector('#userAdress');
let at = document.getElementById("userEmail").value.indexOf("@");
submitOK = "true";

    if (userFirstname.value.length < 3) { 
        alert("Geçersiz Kullanıcı Adı!")
        submitOK = "false";
    }

    if (userLastname.value.length < 3) { 
        alert("Geçersiz Kullanıcı Soyadı!")
        submitOK = "false";
    }

    if (userAge.value < 18 || userAge.value > 65) {
        alert("Yaşınız 18 - 65 aralığında olmalıdır, üzgünüm!");
        submitOK = "false";
    }

    if (at == -1) {
        alert("Geçerli bir e-mail adresi giriniz!") // @ işareti olmazsa e-mail'i kabul etmeyecek!
        submitOK = "false";
    }


    // if (submitOK == "false") {  // hata alert'i yani mesajı alırsak form ilerlemeyecek ama ben devam etmesini istiyorum çünkü aşağıda şekilli şukullu bir alert penceresi yaptım :D 
    //     return false;
    // }

    if(
        userFirstname.value, 
        userLastname.value, 
        userAge.value, 
        userEmail.value, 
        userTel.value, 
        userCountry.value, 
        userAdress.value) {
    addItem (
        userFirstname.value, 
        userLastname.value, 
        userAge.value, 
        userEmail.value, 
        userTel.value, 
        userCountry.value, 
        userAdress.value
        );
        userFirstname.value = "";
        userLastname.value = "";
        userAge.value = "" ;
        userEmail.value = "";
        userTel.value = "";
        userCountry.value = "";
        userAdress.value = "";
    } else {
        console.log('hatali giris') // boş olursa hatali giriş uyarısı gözükecek console'da
        alertDOM.innerHTML = alertFunction(
            "BİLGİLER HATALI VEYA BOŞ !",
            "Lütfen Bilgi Formunu Kontrol Ediniz...",
            "danger"
            )
    }

}

let userListDOM = document.querySelector('#userList') // ul'nin id'si olan userList'i ekledim


const addItem = (userFirstname,userLastname,userAge,userEmail,userTel,userCountry, userAdress) => {
    let liDOM = document.createElement('li');
    
    liDOM.innerHTML = `
    "Ad: ${userFirstname}" 
    <br>
    "Soy ad: ${userLastname}"
    <br>
    "Yaş:  ${userAge}"
    <br>
    "Mail:  ${userEmail}"
    <br>
    "Tel:  ${userTel}"
    <br>
    "Ülke:  ${userCountry}"
    <br>
    "Adres:  ${userAdress}"
    `
    liDOM.classList.add('mt-5', 'list-group-item', "text-uppercase", )
    userListDOM.append(liDOM)
}


