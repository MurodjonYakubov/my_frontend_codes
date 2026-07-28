// 1. length
// Berilgan matnning nechta harfdan iboratligini aniqlang. (Masalan: "salom" => 5)
let str1 = "salom"
console.log(str1.length);


// 2. charAt
// Berilgan "Javascript" matnining 4-indeksidagi (ya'ni 5-belgi) harfni toping.
let str2 = "Javascript"
console.log(str2.charAt(4));


// 3. at
// "Web development" matnining oxirgi belgisini va 2-indeksdagi belgisini oling (at() yordamida).
let str3 = "Web development"
console.log(str3.at(-1), str3.at(2));


// 4. charCodeAt
// "A" va "a" harflarining Unicode (ASCII) kodlarini toping va ularning farqini hisoblang.
let str4 = "A"
let str5 = "a"
console.log(str4.charCodeAt > str5.charCodeAt);


// 5. concat
// "Hello" va "World" so'zlarini birlashtirib, "Hello World" hosil qiling (concat ishlating).
let str6 = "Hello "
let str7 = "World"
console.log(str6.concat(str7));


// 6. includes
// "Men JavaScript o'rganyapman" jumlasida "JavaScript" so'zi bor yoki yo'qligini tekshiring.
let str8 = "Men JavaScript o'rganyapman"
console.log(str8.includes("JavaScript"));


// 7. startsWith
// "https://example.com" manzili "https" bilan boshlanadimi? Javobni true/false qaytaring.
let str9 = "https://example.com"
console.log(str9.startsWith("https"));


// 8. endsWith
// "report.pdf" fayl nomi ".pdf" bilan tugaydimi? Tekshiring.
let str10 = "report.pdf"
console.log(str10.endsWith(".pdf"));


// 9. search
// "Mening telefon raqamim 99 123 45 67" matnidan birinchi uchraydigan raqam indeksini toping (regex bilan).
let str11 = "Mening telefon raqamim 99 123 45 67"
console.log(str11.search("9"));


// 10. indexOf
// "qizil olma, yashil olma, sariq olma" matnida "olma" so'zi birinchi marta nechanchi indeksda uchraydi?
let str12 = "qizil olma, yashil olma, sariq olma"
console.log(str12.indexOf("olma"));


// 11. lastIndexOf
// Yuqoridagi "olma" so'zining oxirgi uchraydigan indeksini toping.
let str13 = "qizil olma, yashil olma, sariq olma"
console.log(str13.lastIndexOf("olma"));


// 12. padStart
// "42" matnini 5 xonali qilib, chap tomondan "0" bilan to'ldiring ("00042").
let str14 = "42"
console.log(str14.padStart(7,"00000"));


// 13. padEnd
// "Salom" matnini 10 ta belgidan iborat qilib, o'ng tomondan "." qo'shing.
let str15 = "Salom"
console.log(str15.padEnd(10, "."));


// 14. repeat
// "Ba- " matnini 3 marta takrorlab, "Ba- Ba- Ba- " hosil qiling.
let str16 = "Ba- "
console.log(str16.repeat(3));


// 15. replace
// "Men choyni yaxshi ko'raman" jumlasidagi "choy" so'zini "qahva" bilan almashtiring.
let str17 = "Men choyni yaxshi ko'raman"
console.log(str17.replace("choy", "qahva"));


// 16. replaceAll
// "1, 2, 3, 2, 4, 2" matnidagi barcha "2" raqamlarini "besh"ga almashtiring.
let str18 = "1, 2, 3, 2, 4, 2"
console.log(str18.replaceAll("2", "besh"));


// 17. slice
// "Kod yozish juda qiziq" matnining 4-indeksidan 8-indeksigacha bo'lgan qismini ajratib oling.
let str19 = "Kod yozish juda qiziq"
console.log(str19.slice(4,9));


// 18. substring
// "Dasturlash" so'zining boshidan 5-belgigacha bo'lgan qismini oling.
let str20 = "Dasturlash"
console.log(str20.substring(0,5));


// 19. split
// "olma, banan, gilos, xurmo" matnini vergul va probel orqali massivga aylantiring.
let str21 = "olma, banan, gilos, xurmo"
console.log(str21.split(", "));


// 20. trim
// "   Salom dunyo!   " matnining bosh va oxiridagi bo'sh joylarini olib tashlang.
let str22 = "   Salom dunyo!   "
console.log(str22.trim("   "));


// 21. toString
// 12345 sonini string ko'rinishiga o'tkazing (toString ishlatib).
let str23 = 12345
console.log(str23.toString());


// 22. toUpperCase
// "Men JavaScript bilaman" jumlasining hamma harflarini katta harfga o'tkazing.
let str24 = "Men JavaScript bilaman"
console.log(str24.toUpperCase());


// 23. toLowerCase
// "HELLO WORLD" matnini kichik harflarga o'tkazing.
let str25 = "HELLO WORLD"
console.log(str25.toLowerCase());


// 24. localeCompare
// "apple" va "banana" so'zlarini solishtiring (qaysi biri lug'aviy jihatdan kichik).
let str26 = "apple"
console.log(str26.localeCompare("banana"));


// 25. eval
// Sizga "5 + 3 * 2" matn ko'rinishida berilgan, uni JavaScript ifodasi sifatida hisoblang (eval yordamida).
let str27 = "5 + 3 * 2"
console.log(eval(str27));