let homeEl = document.getElementById("homescore-el")
let guestEl = document.getElementById("guestscore-el")
let hcount = 0
let gcount = 0

function add1() {
    hcount += 1
    homeEl.textContent = hcount
}

function add2() {
    hcount += 2
    homeEl.textContent = hcount
}

function add3() {
    hcount += 3
    homeEl.textContent = hcount
}

function guestAdd1() {
    gcount += 1
    guestEl.textContent = gcount
}

function guestAdd2() {
    gcount += 2
    guestEl.textContent = gcount
}

function guestAdd3() {
    gcount += 3
    guestEl.textContent = gcount
}

function reset() {
    hcount = 0
    gcount = 0
    homeEl.textContent = 0
    guestEl.textContent = 0
}