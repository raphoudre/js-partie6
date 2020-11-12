let firstNb = 0
let secondNb = 100
const list = document.getElementById("ourList")

for (let number = firstNb; number <= secondNb; number++) {
    if(number % 15 == 0){
        console.log(`...`)
    } else {
        console.log(number);
    }
}