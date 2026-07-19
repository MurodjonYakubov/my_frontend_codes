// // //  Function 3 xil bo'ladi


// // let d= 10
// // // Function Declaretion
// // function func1(a=0,b=0,c=0){
// //     let d= 20
// //     let sum = a+b+c+d
// //     console.log(sum);
// // }
// // func1(10+5,30)


// // // Function Expression
// // let func2 = function (a,b,c){
// //     let sum = a+b+c
// //     console.log(sum);
// // }
// // func2(10+5,20,30)


// // // Arrow Function
// // let func3 = (a,b,c) => {
// //     let sum =a+b+c
// //     console.log(sum);
// // }
// // func3(10+5,20,30)

// let a = 10;
// let b = 20;

// let xisobla = (raqam1, raqam2) => {
//     let kopaytma = raqam1 *raqam2
//     return kopaytma;
// }

// let k = xisobla(a,b)

// console.log(k+200);


let a = 5
let b = 25

function check(start, stop){
    let sum=0
    for(start; start<=stop;start++){
        sum += start
    }
    return sum;
}

let i =check(a,b)
if (i%2) {
    console.log(i, "- Toq");
} else {
    console.log(i, "- Juft");
    
}
console.log();
