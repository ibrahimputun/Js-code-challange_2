//? JS'de stringler nasıl olusturulur ve yazdırılır?

const str1 = "new string"
console.log(str1);
const str2 = 'new string'
console.log(str2);
const str3 = `new string`//template literal
console.log(str3);
const str4 = new String("new string")
console.log(str4);

const str5 = "45"

console.log(str5);


const str6 = "❤️"

console.log(str6);

//? String metodu ile cümle oluştur

let cümle = "Ömer\"in kalemini unutma."
console.log(cümle);

//? Paragraf oluştur
const paragraf = "\tMerhaba Cohort 15 akinleri,\nGünününüz güzel geçsin.\nCalismalarinizda kolayliklar dilerim."
console.log(paragraf);

//? String yapisi ve indexleme

let course = "Clarusway"

console.log(course[0]);
console.log(course[4]);
console.log(course[7]);
console.log(course[-1]);
//? course stringinde 6. elamanın yerine v karakterini yazın.

course[6] = "v"
console.log(course[6]); // Stringler, primitive olduğu için parça olarak değiştirilemezler.

//? course="Full Stack" şeklinde degistir.

course = "Full Stack"
console.log(course);

//!                        STRING METHODS AND PROPERTIES                      */

//!                        STRING METHODS AND PROPERTIES                      */

//? lenght property ne demektir.
// bir kelimenin harflerini tek tek yazdıran kod blouğudur.

console.log(course.length);

for (let i = 0; i <= course.length - 1; i++) {
    console.log(course[i]);
}

//? emoji karakterlerinin length'i
const emoji = "😘"
console.log(emoji);

//!                               STRING BİRLEŞTİRME                       */
//!                               + , concat , temlate literal             */

const metin1 = "Hello!"
const metin2 = " Clarusway."
const metin3 = " Gününüz güzel geçsin."
console.log(metin1 + "" + metin2 + "" + metin3);

//? concat

let yeniMetin = metin1.concat(metin2).concat(metin3)
console.log(metin1);
console.log(metin2);
console.log(metin3);
console.log(yeniMetin);

/*                              Template Literal                              */
/* ECMAScript 6 (ES6) ile gelen template literals, stringleri daha okunaklı bir şekilde birleştirmenize olanak tanır. */

const ad = "Sema"
const soyad = "Güven"
// backtikler kullanılır
//  değişkenleri ${ } içine alıyoruz
const fullName = `${ad} ${soyad} nasilsiniz?
Bugün Js dersinin Stringler konusundasiniz. Pre classlari bitirdiginizi umuyoruz.
`
console.log(fullName);

//?                                toUpperCase()                              */  Karakterleri büyük harfe dönüştürme -immutable(kalıcı değişiklik yapmaz)

const sentences = "Güzel bir gün"
const newSentences = sentences.toUpperCase()
console.log(newSentences);
console.log(sentences);

//?                                toLowerCase()                              */
//? Karakterleri küçük harfe dönüştürme - immutable ( kalıcı değişiklik yapmaz)

const littleLetSentences = sentences.toLocaleLowerCase()
console.log(littleLetSentences);

// kullanıcıdan aldığı  ad bilgisini HOŞGELDİN SEMA olarak görüntüleyen kod bloğu

// let name = prompt("Adinizi Girin:")
// console.log(`HOŞGELDİN ${name.toUpperCase()}`);

/*                   split ()
                 split parçaladığı bölümleri diziye çevirir.                 */

//str.split(separator)
//? Cümleleri speratöre (ayırıcı) göre parçalama - immutable - kalıcı değişiklik yapmaz.

let metin4 = "Clarusway IT Bootcamp"
let splittedMetin4 = metin4.split("")
console.log(splittedMetin4);
console.log(metin4);

for (let i = 0; i < splittedMetin4.length; i++) {
    if (splittedMetin4[i] === "Clarusway") {
        console.log(`Clarusway kelimesi bu cümlenin ${i + 1}. elemanidir.`);
    }
}
console.log(metin4.split(""));

let monts = "Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec"

console.log(monts.split("/"));

let date = "14.10.2023"
let bugunTarihi = date.split(".")
console.log(bugunTarihi);

let liste = "Harry Trump; Fred Barny; Helen Rigby; Bill Abel; Chris Hand"

// Bir sayı ile sınırlandırma da yapabilirim

console.log(liste.split(";", 3));

//! join ve reverse metodları string metodu değildir, Array metodlarıdır. Ama split ile çok kullanıbilir.

//? Join Metodu

let yeniListe = liste.split(",")
// Parçalandıktan sonra array oldu. Bu sayede Array metodlarından join ve reverse  kullanabilirim.
console.log(yeniListe);
// console.log(yeniListe.join())  default olarak arasına virgül koyar.

console.log(yeniListe.join("-"));
console.log(littleLetSentences);

//? reverse
// reverse methodu ile bir diziyi tersine çevirebilmekteyiz. Dizi içerisindeki ilk değeri son, Son değeri ise ilk sıraya şeklinde sıralayabilmekteyiz.

let selamla = "naz"
let tersten = selamla.split("").reverse().join("")

if (selamla === tersten) {
    console.log(`${selamla}kelimesi polindrom bir kelimedir.`);
}
else {
    console.log(`${selamla}kelimesi polindrom bir kelime değildir.`);
}

let ataSoz = "Oku da adam ol"
console.log(ataSoz.split("").reverse().join(""));

//!                               STRING PARÇALAMA-PAÇAYA ERİŞİM             */
//!                                Slice, Substring,Substr                   */

//! Slice Metodu
//? String içinde bir bölümü almak için kullanılır. (immmutable, kalıcıdeğişiklik olmaz)

// Slice(başlangıç index numarası, bitiş index numarası(bu numara dahil değildir))
// negatif değerler ile tersten gelme yapılabilir

console.log(ataSoz.slice(7));// Bitiş değeri verilmezse sonuna kadar alır.

console.log(ataSoz.slice(7, 11));
console.log(ataSoz.slice(-11, -8));


//! substring(başlangıç index numarası,bitiş index numarası) 
//Slicedan farkı negatif sayı kullanılmaz

let ozluSoz = "Tecrübe tarak gibidir;ama hayat insana kel olduğu zaman verir."
console.log(ozluSoz.substring(8, 13));

//! substr(başlangıç index numarası,kaç adet karakter alınacağı)
// substr üstü çizili(deprecated) kullanımdan kaldırılmış olması değil daha modern olan substirng ve slice kullanımının önerilmesidir.
console.log(ozluSoz.substr(27, 12));

/                           Stringde Değişiklik yapma                         */
/*                         replace()  ve replaceAll()                         */

// str.replace( ne değiştirecek, ne ile değiştirilecek) (immutable, kalıcı değişiklik yapzmaz)
console.log(ozluSoz.replace("kel", "sacli"));
console.log(ozluSoz);

//Verilen kullanıcı adı değişken kurallarına uygun değilse düzenle

let variable = "kullanıcı adı girisi" //kallanici adi

let yeni = variable.replace("", "_")
console.log(yeni);

let yeniDeg = yeni.replaceAll("ı", "i")
console.log(yeniDeg);
let varieble1 = variable.replaceAll("", "-")
console.log(varieble1);

//!                       String içinde arama işlemleri                       */

// includes, indexOf, search ,match() metodlarını kullanabiliriz

//! includes()   ... yı içeriyor mu -> true yada false bir değer döndürür.caseSensitive (küçük büyük harfe duyarlı) bir özelliktir.

console.log(`özlüsözde tarak kelimesi geçiyor mu? ${ozluSoz.includes("tarak")}`);

let url = "https://clarusway.com"

let msg = url.includes("https") ? `Bu site güvenlidir` : "bu site güvenli değildir."
console.log(msg);

let email = "helenclarusway.com"
msg = email.includes("@") ? "Mail adresi geçerlicir" : "Mail adresi geçersizdir"
console.log(msg);

//! indexOf (aranacak metin, konum)
//? Bir karakter yada karakter grubumun kaçıncı sırada olduğunu yani index numarasını verir. 
//?Eğer o karakter yoksa olmadığını -1 değeri vererek gösterir. Büyük küçük harfe duyarlıdır. Sadece ilk gördüğünün index numarasını verir

console.log(email.indexOf("edu"));

//! search() : bir string içindeki aranan elemanda ilk bulduğunun index numarasını yazar. Bulamazsa -1 dönderir.
// Büyük küçük harfe duyarlıdır. 

let metin5 = "Clarusway IT bootcamp.Clarusway develop you IT field"

console.log(metin5.search("IT"));
console.log(metin5.search("it"));

// Regex ile çözüm bulunabilir
// Regular Expression
//  Regex / / arasında ifade edilir.

//?   /g => global : bütün cümle için uygula
//?   /i => case sensitive özelliğini kaldırKüçük büyük harfe bakmadan bul

console.log(metin5.search(/IT/gi));

let word = "ynigÜn"
console.log(word.search(/ü/gi))

console.log(word.replaceAll(/ü/gi, "i"));
console.log(word.search(/[aeıioöuü]/i));

/*                                   match()                                  */

// string içinde aranan metin bulunur ve bir dizi dönderir.

let text = "Merhaba bugün gerçekten çok sıcak bir Bugün"

console.log(text.match(/bugün/gi));

let say = text.match(/[a]/gi)
console.log(say.length);

/*                                    trim                                    */

let sentence1 = "       Clarusway          "
console.log(sentence1.trim());
console.log(sentence1.trimStart());
console.log(sentence1.trimEnd());

/*                                 startsWith,endsWith                        */

// startswith ve endswith true false değer dönderir

school = "Clarusway"
console.log(school.toUpperCase().startsWith("c"));
console.log(school.toUpperCase().endsWith("COM"));
