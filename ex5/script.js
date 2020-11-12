let firstNumber = 3;
let secondNumber = 9;
let result = 0;
let myList = document.getElementById("myList");

function shadyx(){
    result = firstNumber * secondNumber;
    secondNumber = result;
    return result;
}

while (shadyx() < 250){
    myList.innerHTML += `<li>${result}</li>`;
    console.log(result);
}