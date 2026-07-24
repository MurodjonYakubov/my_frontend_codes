let text1 = "JavaScript dasturlash tili";
console.log(text1.startsWith("JavaScript"));

let text2 = "Frontend Developer";
console.log(text2.startsWith("Front"));

let text3 = "Backend Developer";
console.log(text3.startsWith("Front"));



let text4 = "JavaScript";
console.log(text4.endsWith("Script"));

let text5 = "Frontend";
console.log(text5.endsWith("end"));

let text6 = "Backend";
console.log(text6.endsWith("front"));



let text7 = "Bugun JavaScript darsi bor";
console.log(text7.search("JavaScript"));

let text8 = "Dasturlash juda qiziqarli";
console.log(text8.search("juda"));

let text9 = "Salom Dunyo";
console.log(text9.search("Hayr"));



let text10 = "Assalomu alaykum";
console.log(text10.indexOf("a"));

let text11 = "JavaScript";
console.log(text11.indexOf("Script"));

let text12 = "Kompyuter";
console.log(text12.indexOf("z"));



let text13 = "JavaScript Java";
console.log(text13.lastIndexOf("Java"));

let text14 = "assalom";
console.log(text14.lastIndexOf("a"))

let text15 = "Dasturlash";
console.log(text15.lastIndexOf("x"));



let id1 = "25";
console.log(id1.padStart(5, "0"));

let code1 = "AB";
console.log(code1.padStart(6, "*"));

let son1 = "9";
console.log(son1.padStart(4, "-"));



let id2 = "25";
console.log(id2.padEnd(5, "0"));

let code2 = "AB";
console.log(code2.padEnd(6, "*"));

let son2 = "9";
console.log(son2.padEnd(4, "-"));




console.log("=".repeat(20));

console.log("JS ".repeat(4));

console.log("A".repeat(8));



let text16 = "Men Java o'rganaman";
console.log(text16.replace("Java", "JavaScript"));

let text17 = "Bugun dars bo'ladi";
console.log(text17.replace("Bugun", "Ertaga"));

let text18 = "Olma shirin meva";
console.log(text18.replace("Olma", "Anor"));



let text19 = "Java Java Java";
console.log(text19.replaceAll("Java", "JS"));

let text20 = "2025-2025-2025";
console.log(text20.replaceAll("2025", "2026"));

let text21 = "Ali Ali Vali Ali";
console.log(text21.replaceAll("Ali", "Hasan"));
