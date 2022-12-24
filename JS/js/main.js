function printfun() {
    document.getElementById("demo").innerHTML = "Today        was      " + Date()
}

function Clear() {
    document.getElementById("input1").innerHTML = 0
}

function numfun(x) {
    var y = document.getElementById("input1").textContent

    document.getElementById("input1").innerHTML = 10*y + x
}

function zerofun(x) {
    if(x == "doublezero") {
        var y = document.getElementById("input").textContent

        document.getElementById("input").innerHTML = 10*y
    }

    else if(x == "zero") {
        var y = document.getElementById("input").textContent

        document.getElementById("input").innerHTML = 100*y
    }
}