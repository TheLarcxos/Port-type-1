let home = document.getElementById("home-el")
let num1 = 0
let guest = document.getElementById("guest-el")
let num2 = 0

function home1() {
    num1 += 1
    home.textContent = num1
    
}
function home2() {
    num1 += 2
    home.textContent = num1
}
function home3() {
    num1 += 3
    home.textContent = num1
}


function guest1() {
    num2 += 1
    guest.textContent = num2
    
}
function guest2() {
    num2 += 2
    guest.textContent = num2
}
function guest3() {
    num2 += 3
    guest.textContent = num2
}

function num() {
    num1 = 0
    num2 = 0
    guest.textContent = num2
    home.textContent = num1
}