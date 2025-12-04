
function operate(x, y, operator){
    if (operator == "+"){
        return x+y;
}
    else if (operator == "-"){
        return x-y;
}
    else if (operator == "*"){
        return x*y;
}
    else if (operator == "/"){
        return x/y;
}
}
first_num = 0
second_num = 0
operation = ""
const container = document.getElementById("container");
const opps_list = ["+", "-", "*", "/"]
for (let i = 0; i < 4; i++){
    const opps = document.createElement("button");
    opps.classList.add("opperator");
    opps.textContent = opps_list[i];
    opps.addEventListener("click", ()=>{
        operation = opps_list[i]
    });
    container.appendChild(opps);
}


