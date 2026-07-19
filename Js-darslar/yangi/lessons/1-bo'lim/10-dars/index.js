// let o = {
//     ism: "Eshmat",
//     yosh: 20,
// }

// let c = structuredClone(o)

// c.ism = "Toshmat"

// console.log(c);



// let o = {
//     ism: "Eshmat",
//     yosh: 20
// }

// let c = Object.assign({}, o)

// o.ism = "Toshmat"

// console.log(o);



// let user = {
//     id: 100,
//     ism: "Ali",
//     familya: "Valiyev",
//     manzil: "O'zbekiston",
//     status: true
// }

// for (let key in user){
//     if (user.status) {
//         user.manzil = "Namangan"
//     }
// }

// console.log(user);



// let user = {
//     id: 100,
//     ism: "Ali",
//     familya: "Valiyev",
//     manzil: "O'zbekiston",
//     status: true,
//     getFullName: function() {
//         console.log(this.ism, this.familya);
//     }
// }

// let copyUser = user
// user = null

// let newCopyUser = copyUser
// copyUser = null

// newCopyUser.getFullName()

let obj = {
    id: 1,
    name: "Eshmat",
    surname: "Toshmat",
    age: 25
}

for(let a in obj){
    console.log(`${a} this is a ${typeof(a)}`);
    
}