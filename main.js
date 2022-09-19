console.log('Hi!!!');



const play = document.querySelector(".startPlay");
const text = document.querySelector('.text')
const playerTwoDeck = document.querySelector(".playerTwocovered");
const playerOneDeck = document.querySelector(".playerOnecovered");

const player1Shown = document.querySelector(".playerOne");
const player2Shown = document.querySelector(".playerTwo");



function freshDeck(){
    let deck0 =[];
    for(let i=1; i<=52 ; i++){
        deck0.push(i);
    }
  shuffle();
function shuffle(){
        for(let i=0; i<deck0.length; i++){
            let temp= deck0[i];
            let rand = Math.floor(Math.random()*(deck0.length-3));
            deck0.splice(i,1);
            deck0.splice(rand, 0, temp);
        }
    
    }
    return deck0;
}
    

// Create a shuffled deck of cards;
class Deck {
    constructor(cards = freshDeck()){
        this.cards = cards
    }

 }


 //const deck = new Deck()


let player1Deck, player2Deck, gameOn=true, gameOver
const Player = function({name}={}){
    this.name = name;
    this.hand = [];
}

play.addEventListener('click', () =>{
console.log(gameOver,'playOn!!!!' ,gameOn);
   if(gameOver) {
    console.log('game Ended');
     startGame();
     return;
    }
    else if(gameOn) {
        console.log('yes it is on!!!');
        cleanBoard();
        flipCard();
    }
})

startGame();

function startGame(){

    const player1 = prompt("Enter player one's name: ");
    const player2 = prompt("Enter player two's name: ");
    this.player1 = new Player({name: player1});
    this.player2 = new Player({name: player2});
    pulledCards = 1;
    staged=[];
   

    this.deck = new Deck();
    
    console.log(this.deck);

    function splitDeck(){

    player1Deck = deck.cards.slice(0,26);
    player2Deck = deck.cards.slice(26-52);
    }
    splitDeck()

    console.log(deck , player1Deck, player2Deck)

    gameOver= false;

}




function shownCards(num){

    ///// function to read the card number from 1 to 13 spades. 14-26 diamons, 27 to39 hearts, 40 to 52 clubs
  
        if(num <= 13){
            value = num;
            color = '♦︎';
        } else if(14 <= num &&  num <=26){
            value = num - 13;
            color = '♠︎';
        }else if(27 <= num &&  num <= 39){
            value = num - 26;
            color = '♥︎';
        }else {
            value = num - 39;
            color = '♣︎';
        }
        //console.log( value, color);
        let displayvalue= 0;
    
        if(value === 13 ){
            displayvalue = 'A';
        }else if(value === 10){
            displayvalue = 'J';
        }else if (value === 11){
            displayvalue = 'Q';
        }else if(value === 12){
            displayvalue = 'K';
        } else{
            displayvalue = value+1;
            
        }
        return [shown2 = [displayvalue, color] , value];
    }


function flipCard(){
    gameOn = true;
    console.log(pulledCards);
    if(player1Deck.length < 1){
        gameOver=true;
        gameOn=false;
        text.innerHTML= `GAMEOVER  ${this.player2.name}  "Wins the Game!"`;
    } 
    if(player2Deck.lengh < 1){
        gameOver=true;
        gameOn=false;
        text.innerHTML= `GAMEOVER  ${this.player1.name}  "Wins the Game!"`;
    }

    this.player1.hand = player1Deck[pulledCards-1];
    this.player2.hand = player2Deck[pulledCards-1];
   let N = player2Deck.length;
    playerOneDeck.innerText = player1Deck.length;
    playerTwoDeck.innerText = player2Deck.length;
    // console.log(this.player1.hand, this.player2.hand);
    let TR1 = this.player1.hand;
    player1Shown.appendChild(getHTML(TR1));
    player2Shown.appendChild(getHTML());

    handWinner();
    return this.player1.hand, this.player2.hand;
    
}

function handWinner(){
    if(shownCards(this.player1.hand)[1]>shownCards(this.player2.hand)[1] ){
        text.innerHTML =`${this.player1.name} + "Wins the hand!"`;
        player1Deck.push(staged);
        player1Deck = player1Deck.flat(2);
        staged= [];
        pulledCards = 1;
        
    } else if(shownCards(this.player2.hand)[1]>shownCards(this.player1.hand)[1]){
        text.innerHTML = `${this.player2.name} + "Wins the hand!"`;
        player2Deck.push(staged);
        player2Deck = player2Deck.flat(2);
        staged = [];
        pulledCards = 1;
    } else {
        text.innerHtml = "CARDS WAR!!!!";
        if(player1Deck.length < 4){
            gameOver=true;
            gameOn=false;
            text.innerHTML= `GAMEOVER + ${this.player2.name} + "Wins the Game!"`;
        } else if(player2Deck.lengh < 4){
            gameOver=true;
            gameOn=false;
            text.innerHTML= `GAMEOVER + ${this.player1.name} + "Wins the Game!"`;
        } else { pulledCards = 4;

        }
    }
    return player1Deck, player2Deck;

}

function deckStage(){
    
    staged.push(player1Deck.slice(0, pulledCards));
    console.log(staged)
    staged.push(player2Deck.slice(0, pulledCards));
    console.log(staged)
    player1Deck.splice(0,pulledCards);
    player2Deck.splice(0, pulledCards);

    //staged = staged.flat();


    console.log("Staged =",staged ,player1Deck, "player1", player2Deck);

    return staged


}

function cleanBoard(){
    deckStage();
    


}

// class shown{

//      //shownCards()


//     function getHTML(){
//         const shownDiv = document.createElement("div")
//         shownDiv.innerText = shownCards[1]
//         shownDiv.classList.add("showncard")
//         shownDiv.dataset.value = shownCards[0] , shownCards[1]
//         return shownDiv

//     }
// // }

// {/* <div cards-open class="shown" ></div>
// <div class="shownCard " data-value="10 ♠︎"></div> */}


