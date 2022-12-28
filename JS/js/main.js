function Clear() {
    document.getElementById("input").innerHTML = ''
    // working fine
}

// var count = 0
// var display = [0, '-', 0]

// function numfun(x) {
//     // display.append(x)

//     // var y = document.getElementById("input").textContent

//     if (count == 0){
//         display[0] = 10*display[0] + x
//         document.getElementById("input").innerHTML = string(display[0])
//     }
//     else if (count==1) {
//         display[2] = 10*display[2] + x
//         document.getElementById("input").innerHTML = string(display[0]) + string(display[1]) + string(display[2])
//     }

//     // document.getElementById("input").innerHTML = 10*y + x

//     //numbers are working fine 
// }

function zerofun(x) {
    if(x == "zz") {
        // var y = document.getElementById("input").textContent
        if(c == 0){
            a = 100*a;
            document.getElementById("input").innerHTML = a;
        }
        else if(c == 1){
            b = 100*b
            document.getElementById("input").innerHTML = b;

        }
    }

    else if(x == "z") {
        // var y = document.getElementById("input").textContent

        if(c == 0){
            a = 10*a;
            document.getElementById("input").innerHTML = a;
        }
        else if(c == 1){
            b = 10*b;
            document.getElementById("input").innerHTML = b;

        }
    }

    // zeros are working fine
}

// function plus() {
//     var temp = document.getElementById("input").textContent

//     if (count == 0){
//         display[1] =  '+'
//         count = 1
//     }
//     else if(count ==1) {
//         display[0] = answer()
//         display[1] =  '+'
//         count = 0
//     }

//     document.getElementById("input").innerHTML = string(display[0]) + string(display[1])
// }

function minus() {
    document.getElementById("input").innerHTML = '-'
}
function multiply() {
    document.getElementById("input").innerHTML = '*'
}
function divide() {
    document.getElementById("input").innerHTML = '/'
}

function answer(){
    document.getElementById("input").innerHTML = 'answer'
}

// function symbol(x) {
//     var y = document.getElementsByTagName('button').textContent

//     var temp = x

//     var show = Array.from(String(document.getElementById("input")).value, temp)
// }

var c = 0
var a = 0
var o = ''
var b = 0

function numfun(x) {
    if (c == 0) {
        a = 10*a + x;

        // document.getElementById("input").innerHTML = string(a)
        document.getElementById("input").innerHTML = a
    }

    else if (c == 1) {
        b = 10*b + x;

        // document.getElementById("input").innerHTML = string(a) + string(o) + string(b)
        document.getElementById("input").innerHTML = a + o + b;

    }
}

function plus() {
    
    if (c == 0) {
        o = '+';
        c += 1;

        document.getElementById("input").innerHTML = a + o;
    }

}

function minus() {
    
    if (c == 0) {
        o = '-';
        c += 1;

        document.getElementById("input").innerHTML = a + o;
    }
}

function multiply() {
    
    if (c == 0) {
        o = '*';
        c += 1;

        document.getElementById("input").innerHTML = a + o;
    }
}

function divide() {
    
    if (c == 0) {
        o = '/';
        c += 1;

        document.getElementById("input").innerHTML = a + o;
    }
}


function answer(){
    if (o == '+') {

        let temp = a + b;
        document.getElementById("input").innerHTML = temp;
    }
    if (o == '-') {

        let temp = a - b;
        document.getElementById("input").innerHTML = temp;
    }
    if (o == '*') {

        let temp = a * b;
        document.getElementById("input").innerHTML = temp;
    }
    if (o == '/') {

        let temp = a / b;
        document.getElementById("input").innerHTML = temp;
    }

    a = 0;
    b = 0;
}
