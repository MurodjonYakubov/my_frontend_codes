// let num = Math.random()
// console.log(`+998 ${Math.trunc(num*100)} ${Math.trunc(num*1000)} ${Math.trunc(num*100)} ${Math.trunc(num*100)}`);


let getPhoneNumber = function(){
    let num1 = Math.trunc(Math.random()*10)
    let num2 = Math.trunc(Math.random()*10)

    let num = `${num1}${num2}`

    if (num!="99" || num!="91" || num!="90" || num!="93" || num!="94" || num!="50" || num!="33" || num!="77" || num!="78") {
        return getPhoneNumber()
    }

    let a = Math.trunc(Math.random()*10)
    let b = Math.trunc(Math.random()*10)
    let c = Math.trunc(Math.random()*10)

    let d = Math.trunc(Math.random()*10)
    let e = Math.trunc(Math.random()*10)

    let f = Math.trunc(Math.random()*10)
    let g = Math.trunc(Math.random()*10)

    return `+998 ${num} ${a}${b}${c} ${d}${e} ${f}${g}`
}

console.log(getPhoneNumber());
