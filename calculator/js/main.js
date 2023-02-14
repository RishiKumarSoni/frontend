let Arr = [];
let Action = ['+', '-', '*', '/', '%'];

let tempA = 0;
let tempAction = null;
let tempB = 0;

let temp = 0;
let count = 0;

function numfun(x) {

    if(Arr.length == 0){
        Arr.push(x);
    }
    else if(Arr.includes(x)) {
        Arr.push(x)
    }
    else {
        temp = Arr.pop();
        temp = 10*temp + x;

        Arr.push(temp);
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