// let obj = {
//     ism: "Marker",
//     soni: 3,
//     maqsadi: "Yozish",
//     yil: 2026,
// }

// let obj = {
//     ism: "Eshmat",
//     yosh: 20
// }

// 1. Object.assign()
// let cobj = Object.assign({}, obj)
// cobj.ism = "Toshmat"
// cobj["yosh"] = 30
// console.log(obj);
// console.log(cobj);

// 2.structuredClone()
// let cobj = structuredClone(obj)
// cobj.ism = "Toshmat"
// cobj["yosh"] = 30
// console.log(obj);
// console.log(cobj);

// let obj = {
//     ism: "Eshmat",
//     yosh: 20,
//     child: {
//         ism: "Toshmat",
//         yosh: 20
//     }
// }

// let cobj = structuredClone(obj)
// cobj.ism = "Ali"
// cobj.child.ism = "Vali"
// console.log(cobj);
// console.log(obj);

// Objectning kalit va qiymatlari bir xil bo'lasa uni bitta qilib yozib ketsa bo'ladi!node

let manzil = "kosonsoy"
let daraja  = "m"
let ism = "ism"

let obj = {
    ism : "Murodjon",
    yosh: 13,
    manzil,
    daraja,
    [ism]: manzil,
}

console.log(obj);
