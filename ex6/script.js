let firstNumber = 2;
let secondNumber = 6;
let result = 0;
const myList = document.getElementById("bodyList");

function shadyx(){
    result = secondNumber / firstNumber;
    secondNumber = result;
    return result;
}

while (shadyx() > 1){
    myList.innerHTML += `<li>${result}</li>`;
    console.log(result);
}