let countHome = 0
let countGuest = 0

function countOneHome(){
    const boardHome = document.getElementById("board-home")
    countHome += 1
    boardHome.textContent = countHome
}

function countTwoHome(){
    const boardHome = document.getElementById("board-home")
    countHome += 2
    boardHome.textContent = countHome
}

function countThreeHome(){
    const boardHome = document.getElementById("board-home")
    countHome += 3
    boardHome.textContent = countHome
}

function countOneGuest(){
    const boardGuest = document.getElementById("board-guest")
    countGuest += 1
    boardGuest.textContent = countGuest
}

function countTwoGuest(){
    const boardGuest = document.getElementById("board-guest")
    countGuest += 2
    boardGuest.textContent = countGuest
}

function countThreeGuest(){
    const boardGuest = document.getElementById("board-guest")
    countGuest += 3
    boardGuest.textContent = countGuest
}


function newGame(){
    countHome = 0
    countGuest = 0
    document.getElementById("board-home").textContent = countHome
    document.getElementById("board-guest").textContent = countGuest
    document.getElementById("winner").textContent = ""
}

function submit(){
    if (countHome > countGuest){
        document.getElementById("winner").textContent = "The home team won!"
    } else if(countHome < countGuest){
        document.getElementById("winner").textContent = "The guest team won!"
    } else{
        document.getElementById("winner").textContent = "Its a tie!"
    }
}