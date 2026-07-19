// const input = {
//     ali: {
//         tasks: {
//             task1: { completed: true },
//             task2: { completed: true },
//             task3: { completed: false }}
//     },
//     vali: {
//         tasks: {
//             task1: { completed: false },
//             task2: { completed: false }}
//     },
//     sami: {
//         tasks: {
//             task1: { completed: true },
//             task2: { completed: true },
//             task3: { completed: true }}
//     }
// };

// function getData(obj){
//     let output = {}
//     for (let key in obj) {
//         let obj2 = obj[key].tasks
//         let count = 0;
//         for(let key2 in obj2){
//             if (obj2[key2].completed) {
//                 count++
//             }
//         }
//         if(count >= 2) output[key] = count
//     }
//     return output
// }

// console.log(getData(input));





// let obj = {
//     id:1,
//     ism:"Ali",
//     age: 20,
//     amount:100,
//     manzil:"Namangan kosonsoy",
//     ishxona:"Oxford"
// }

// function getData(obj1){
//     let sum = 0
//     for(let key in obj1){
//         if (typeof(obj1[key]) === "number") {
//             sum += obj1[key]
//         }
//     }
//     return sum;
// }

// console.log(getData(obj));







// let obj = {
//     id:1,
//     ism:"Ali",
//     age: 60,
//     amount:100,
//     manzil:"Namangan kosonsoy",
//     ishxona:"Oxford",
//     child:{
//         id:2,
//         ism:"Ali",
//         age: 40,
//         amount:50,
//         manzil:"Namangan kosonsoy",
//         ishxona:"Oxford",
//         child:{
//             id:1,
//             ism:"Ali",
//             age: 20,
//             amount:100,
//             manzil:"Namangan kosonsoy",
//             ishxona:"Oxford"
//         }
//     }
// }

// function fam(data){
//     let count = 0
//     while(true){
//         for(let key in data){
//             if(typeof data[key] === "string")count++
//         }
//         if ("child" in data) {
//             data = data.child
//         } else {
//             break
//         }
//     }

//     return count
// }

// console.log(fam(obj));


// let webbrain = {
//     frontend: {
//       1: { course: "react", price: 120 },
//       2: { course: "vue", price: 110 },
//       3: { course: "angular", price: 100 },
//     },
//     backend: {
//       1: { course: "java", price: 120 },
//       2: { course: "php", price: 110 },
//       3: { course: "nodejs", price: 100 },
//     },
//     mobile: {
//       android: {
//         1: { course: "android", price: 120 },
//         2: { course: "flutter", price: 110 },
//       },
//       ios: {
//         1: { course: "ios", price: 120 },
//         2: { course: "flutter", price: 110 },
//       },
//     },
//   };
  
// let sum = function(data){
//   summa = 0
//   for(let key in data){
//     let obj = data[key];
//     for(let key2 in obj){
//       if (`${+key2}` === "NaN") {
//         let obj2 = obj[key2]
//         for(let key3 in obj2){
//           summa += obj2[key3].price
//         }
//       } else {
//         summa += obj[key2].price
//       }
//     }
//   }
//   return summa;
// }

// console.log(sum(webbrain));


// let obj = {
//   id: 1,
//   name: "Mackbook",
//   price: 1000,
//   marka: "USA",
//   chip: "M4",
//   active: false,
//   color: "Silver"
// }

// let macbook = function(mac){
//   let ret = {
//     raqam: 0,
//     matn: 0,
//     boolean: 0
//   }
//   for(let key in mac){
//     let val = mac[key]
//    if(typeof val === "number"){
//     ret.raqam++
//    }else if(typeof val === "boolean"){
//     ret.boolean++
//    }else if (typeof val === "string"){
//     ret.matn++
//    }
//   }
//   return ret
// }

// console.log(macbook(obj));


let obj = {
  id: 1,
  name: "Mackbook",
  price: 1000,
  marka: "USA",
  chip: "M4",
  active: false,
  color: "Silver"
}
let len = 0;
let result;
for(let key in obj){
  if (obj[key].length > len) {
    len = obj[key].length;
    result = {key: obj[key]}
  }
}

console.log(result);

