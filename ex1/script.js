function checkBissextile(year){
    if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
        return true;
    } else {
        return false;
    }
}

const yearList = document.getElementById("yearList");
let startYear = 2020;
let endYear = 2030;

for(let year = startYear; year <= endYear; year++){
    if (checkBissextile(year)){
        yearList.innerHTML += `<li class="text-danger">${year}</li>`;
    } else {
        yearList.innerHTML += `<li>${year}</li>`;
    }
}
