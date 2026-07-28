let str = "Men Oxfordda IT o'qiyman!"

let reverse = ""

for(let i = str.length - 1; i >= 0; i--){
    reverse += str.at(i)
}
console.log(reverse);