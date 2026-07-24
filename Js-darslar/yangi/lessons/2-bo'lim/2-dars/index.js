let a = 100
let b = -100
let c = 5
console.log("Eng katta son:", Math.max(a,b,c));
console.log("Eng kichik son",Math.min(a,b,c));
if(a!=c && c!=b){
    console.log("Eng o'rtacha son:",c);
}

let yil = prompt("Tug'ilgan yilingizni kiriting!")

let yosh = 2026-yil

if (yosh>0) {
    console.log(`Siz ${yil}-yili dunyoga kelgansiz.`, "Siz", yosh , "yoshdasiz")    
}else{
    console.log("Siz hali tug'ilmagansiz, bu yil hali kelmagan");
}

// Sharpness V
// Looting III
// Unbreaking III
// Mending I
// Fire Aspect II
// Sweeping Edge III
// Knockback II