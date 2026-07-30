// 1 - masala
let str1 = " 144 "
console.log(Math.sqrt(parseInt(str1.trim(" "))));


// 2 - masala
let str2 = "7.89"
str2 = parseFloat(str2)
str2 = Math.floor(str2)
console.log(`${str2}`)


// 3 - masala
let str3 = "-25"
str3 = parseInt(str3)
str3 = Math.abs(str3)
console.log(`${str3}`);


// 4 - masala
let str4 = "javascript";
str4 = str4[0].toUpperCase() + str4.slice(1);
console.log(str4);


// 5 - masala
let str5 = "81";
str5 = Math.sqrt(parseInt(str5)).toString().repeat(2);
console.log(str5)


// 6 - masala
let str6 = "frontend"
str6 = str6.length
str6 = Math.pow(str6, 2)
console.log(str6);


// 7 - masala
let str7 = "125";
str7 = Math.cbrt(parseInt(str7)).toString();
console.log(str7);


// 8 - masala
str8 = "React JS"
str8 = str8.replace(" ", "_").toUpperCase()
console.log(str8);


// 9 - masala
let str9 = "15.51"
str9 = parseFloat(str9)
str9 = Math.round(str9)
console.log(`${str9}`);


// 10 - masala
let str10 = "HTML,CSS,JS"
str10 = str10.split(",")
str10 = str10.length
console.log(str10);


// 11 - masala
let str11 = "49"
str11 = parseInt(str11)
str11 = Math.pow(Math.sqrt(str11),2)
console.log(str11);


// 12 - masala
let str12 = "backend"
str12 = str12.at(-1)
str12 = str12.toUpperCase()
console.log(str12);


// 13 - masala
let str13 = "  36.9  "
str13 = str13.trim("  ")
str13 = parseFloat(str13)
str13 = Math.ceil(str13)
console.log(str13);


// 14 - masala
let str14 = "apple banana apple"
str14 = str14.replaceAll("apple", "orange")
console.log(str14);


// 15 - masala
let str15 = "-64"
str15 = Math.abs(parseInt(str15))
console.log(Math.sqrt(str15, 2));


// 16 - masala
let str16 = "hello"
str16 = str16.repeat(3).length
console.log(str16);


// 17 - masala
let str17 = "100"
str17 = Math.sign(parseInt(str17))
console.log(str17);


// 18 - masala
let str18 = "JavaScript"
str18 = str18.slice(4).toUpperCase()
console.log(str18);


// 19 - masala
let str19 = "5.678"
str19 = Math.ceil(parseFloat(parseFloat(str19).toFixed(1)))
console.log(str19);


// 20 - masala
let str20 = " 256 "
str20 = Math.cbrt(Math.sqrt(parseInt(str20.trim("  "))))
console.log(Math.floor(str20));