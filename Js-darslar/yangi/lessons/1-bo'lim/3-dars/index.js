// let raqam = 2026;
// let matn = "2026";
// console.log(typeof (raqam + matn));

// let a = null
// let b = 10
// console.log(b*a);

// let a = 10
// let b = 3
// console.log(a%b);

// let summa = 5 * (2 + 9)
// console.log(summa);

// let data = "Oxford"
// console.log(data);

// let i = 1
// console.log(i++, i);
// console.log(++i);
// console.log(i--, i);
// console.log(--i);
// console.log(5 ** 5);

// let i = 1
// console.log(i++);
// console.log(--i);
// console.log(i);
// console.log(i--);
// console.log(i++);

// let a = "5"
// let b = 5
// console.log(a == b);
// console.log(a === b);
// console.log(a < b);
// console.log(a > b);
// console.log(a <= b);
// console.log(a >= b);

// ###########################################################################

// Mantiqiy Operatorlar - Logical Operators.

// 1. || - yoki
// 2. && - va
// 3. ! - not
// 4. ?? - nalish

console.log();

// Falsey - false, 0, null, "", '', ``, undefined.

// ?? - nul va undefined ni false deb qabul qiladi va qolgan barcha qiymatlarni true deb qabul qiladi.

// console.log(0 || (1 && (null ?? true)) || ("salom" && 1));

console.log(0 || (1 ?? 0) && 1); // 1

console.log();

