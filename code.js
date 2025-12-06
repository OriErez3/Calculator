
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

let first_num = null;
let second_num = null;
let temp_num = null; 
let ans = null;
let operation = "";
let next_num = false; 
const container = document.getElementById("oppscontainer");
const opps_list = ["+", "-", "*", "/"]
const calc_container = document.getElementById("calc_container");
const screen = document.getElementById("screen");
for (let i = 0; i < 4; i++){
    const opps = document.createElement("button");
    opps.classList.add("opperator");
    opps.textContent = opps_list[i];
    opps.addEventListener("click", ()=>{
        if (first_num != null && second_num != null){
            ans = operate(first_num, second_num, operation);
            screen.value = ans;
            first_num = ans; 
            second_num = null;
            next_num = false;
        }
        operation = opps_list[i]
        next_num = true;
    });
    container.appendChild(opps);
}
for (let i = 0; i < 10; i++){
    const nums = document.createElement("button");
    nums.classList.add("numbers");
    nums.textContent = i;
    nums.addEventListener("click", ()=>{
        if (first_num == null && next_num==false){
            first_num = Number(String(i));
            screen.value = first_num;
        }
        else if (first_num != null && next_num==false){
            first_num = Number(String(first_num)+String(i));
            screen.value = first_num;
        }
        else if (second_num == null && next_num==true){
            second_num = Number(String(i));
            screen.value = second_num;
        }
        else if (second_num != null && next_num==true){
            second_num = Number(String(second_num)+String(i));
            screen.value = second_num;
        }
       
 } );
    container.appendChild(nums);
}

const equals = document.createElement("button");
equals.classList.add("numbers");
equals.textContent = "=";
equals.addEventListener("click", ()=>{
    ans = operate(first_num, second_num, operation);
    screen.value = ans;
    first_num = ans;
    second_num = null; 
});
container.appendChild(equals);

const clear = document.createElement("button");
clear.classList.add("numbers");
clear.textContent = "CE";
clear.addEventListener("click", ()=>{
    first_num = null;
    second_num = null;
 temp_num = null; 
 ans = null;
 operation = "";
 next_num = false; 
 screen.value = "0";
})
container.appendChild(clear);