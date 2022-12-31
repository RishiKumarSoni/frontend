let Arr = [];
let Action = ['+', '-', '*', '/', '%'];

let tempA = null;
let tempAction = null;
let tempB = null;

let temp = null;
let count = 0;

function numfun(x) {
    
    if (Number.isInteger(x) && count == 0){
        count = 1;
        Arr.push(x);
    }
    else if (Number.isInteger(x) && count == 1){
        temp = Arr.pop();

        temp = 10*temp + x;
        Arr.push(temp);
    }
    
    else {
        Arr.push(x);
        count = 0;
        temp = 0;
    }

    document.getElementById("input").innerHTML = Arr.join('');
}

function calculator() {
    for(let i=0; i<Arr.length; ++i) {

        if(!tempA) {
            tempA = Arr[i];
        }
        else if(Action.includes(Arr[i])) {
            tempAction = Arr[i];
        }
        else if (tempA && tempAction) {
            tempB = Arr[i];
            tempA = calculate(tempA, tempAction, tempB);
            tempAction = null;
        }
    }
    document.getElementById("input").innerHTML = tempA;
}

function calculate(a, action, b) {
    a = Number(a);
    b = Number(b);

    let result = null;
    if (action === '+') {
        result = a + b;
    } else if(action === '-') {
        result = a - b;
    } else if(action === '*') {
        result = a * b;
    } else if(action === '/') {
        result = a / b;
    } else if(action === '%') {
        result = a % b;
    }
    return result;
}

function Clear() {
    document.getElementById("input").innerHTML = '';
    Arr = [];
    tempA = 0;
    tempAction = 0;
    tempB = 0;
    temp = 0;
}