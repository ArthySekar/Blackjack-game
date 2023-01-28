let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = true
let message = " "
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let player = {
    name: "Arthy: ",
    coins: 145
}

let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + "$" + player.coins

function getRandomnumber(){
    let mathOps = Math.floor(Math.random()*13)+1
    if(mathOps===1){
        return 11
    }
        else if(mathOps>10){
            return 10
    }else
    return mathOps
}




function startGame(){
   
    let isAlive = true
    let firstCard = getRandomnumber()
    let secondCard = getRandomnumber()
    console.log(firstCard, secondCard)
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: " 
    for(let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    
    }

    sumEl.textContent = "Sum: " + sum

if(sum<=20){
    message = "Do you want to draw another card?"
    
}else if(sum === 21){
    message = "Whoo! you got 21"

}else{
    message = "oops! You've lost"
    isAlive = false
    
}
messageEl.textContent = message
}

function newGame(){
    message = "Want to play a round?"
    messageEl.textContent = message
    cardsEl.textContent = "Cards: " 
    sumEl.textContent = "Sum: " 
    isAlive = true
}

function newCard(){
    if(isAlive === true && hasBlackjack === false){
    let thirdCard = getRandomnumber()
    console.log(thirdCard)
    sum += thirdCard
    cards.push(thirdCard)
    renderGame()
}
}
