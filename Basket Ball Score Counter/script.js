// First we're writing the js for the Home 
let home = 0
let homeButton = document.getElementById('js__homeScore')
function homeOne() {
    home += 1
    homeButton.innerText = home
} 
function homeTwo() {
    home += 2
    homeButton.innerText = home
}
function homeThree() {
    home += 3
    homeButton.innerText = home
}


// Now we're writing the js for the guest
let guest = 0
let guestButton = document.getElementById('js__guestScore')
function guestOne() {
    guest += 1
    guestButton.innerText = guest
}
function guestTwo() {
    guest += 2
    guestButton.innerText = guest
}
function guestThree() {
    guest += 3
    guestButton.innerText = guest
}


// Now we're writing the js for reset button
function reset() {
    home = 0
    guest = 0
    homeButton.innerText = home
    guestButton.innerText = guest
}