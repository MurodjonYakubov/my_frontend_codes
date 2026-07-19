// for (let i = 1; i <= 10; i++){
//     console.log(i,"x",1,"=",i*1);
//     console.log(i,"x",2,"=",i*2);
//     console.log(i,"x",3,"=",i*3);
//     console.log(i,"x",4,"=",i*4);
//     console.log(i,"x",5,"=",i*5);
//     console.log(i,"x",6,"=",i*6);
//     console.log(i,"x",7,"=",i*7);
//     console.log(i,"x",8,"=",i*8);
//     console.log(i,"x",9,"=",i*9);
//     console.log(i,"x",10,"=",i*10);
//     console.log("-----------");
// }

// for (let i = 1; i <= 9; i++) {
//     for(let k = 1; k <= 10; k++){
//         console.log(i,"x",k,"=",i*k);
//     }
//     console.log("============================");
// }

// tashqiLoop:for (let i = 1; i <= 9; i++) {
//     for(let k = 1; k <= 10; k++){
//         if(i === 5) break tashqiLoop
//         console.log(i,"x",k,"=",i*k);
//     }
//     console.log("============================");
// }

// let toq = 0
// let juft = 0
// for(let i = 1; i<=20; i++){
//     if(i%2){
//        toq+=i
//     }else{
//        juft+=i
//     }
// }
// console.log(toq);
// console.log(juft);

// let ikki = 0
// let uch = 0
// for(let i = 1; i<=20; i++){
//     if(i%2==0){
//         ikki+=i
//     }else if(i%3==0){
//         uch+=i
//     }else{
//         uch+=0
//     }
// }
// console.log(ikki+uch);


let bir = 1
let ikki = 0
for(let i = 1; i<=20; i++){
    if(i<10){
        bir*=i
    }else if(i>=10){
        ikki+=i
    }else{
    }
}
console.log(bir,ikki);
