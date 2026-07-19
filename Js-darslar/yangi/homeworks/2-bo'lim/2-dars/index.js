let a = 102
let b = 2179

// if (a>b) {
//     console.log("a soni b sonidan katta");
    
// } else {
//     console.log("b soni a sonidan katta");
// }


let c = function(an){
    let sum = 0
    for(let key in an){
        sum += key
    }
    return sum
}

console.log(c(b));

