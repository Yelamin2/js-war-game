// shift the cards randomly and stor to 2 different stacks.
 let N = 52;
//
let cards = mycard(N);

function mycard(N){
    var deck=[];
    for (let i=1; i <=N; i++){
    
        deck.push(i);
    }
    return deck;
}
// shuffle cards
function shuffle(arr){
    for(let i=0; i<arr.length; i++){
        let temp= arr[i];
        let rand = Math.floor(Math.random()*(arr.length-3));
        arr.splice(i,1);
        arr.splice(rand, 0, temp);
    }
    return arr;
}
///// function to read the card number from 1 to 13 spades. 14-26 diamons, 27 to39 hearts, 40 to 52 clubs
function cardvalue(num){
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
    console.log( value, color);
    let displayvalue= 0;

    if(value === 1 ){
        displayvalue = 'A';
    }else if(value === 11){
        displayvalue = 'J';
    }else if (value === 12){
        displayvalue = 'Q';
    }else if(value === 13){
        displayvalue = 'K';
    } else{
        displayvalue = value;
    }
    return [shown2 = [displayvalue, color] , value];
}
//deckShuffle = shuffle(cards)
// slice cards;

deckone = cards.slice(0,26);
decktwo = cards.slice(26-52);
//
//// assign deck to player

// If stack==52 game ends; if < 52 continue.

// game step shift cards from one hand to the other

function show(arr){
    console.log(arr[0]);
}
//
function deckupdate(arr){
    arr.splice(1);
}
//
function shift(arr1, arr2, num){
    let staged=[];
    staged = arr1.slice(0,num);
    staged;
    let n= arr2.slice(0,num);
    staged.push(n);
    staged;
    console.log(staged);
    arr1 = arr1.slice(num)
    arr1.push(staged);
    arr1 =arr1.flat(2);
    arr2 = arr2.slice(num);
    console.log(arr1, 'array1');
    console.log(arr2, 'Array2');

}

function Player({name, deck, decksize52 = false}={}){
    this.name = name;
    this.deck = deck;
    this.decksize52 = decksize52;
   
}

// const Player = function({name} = {}) {
//     this.name = name;
//     this.hand = [];
//   }
  
//   const Game = function() {
//     const player1 = prompt("Enter player one's name: ");
//     const player2 = prompt("Enter player two's name: ");
  
//     this.player1 = new Player({name: player1});
//     this.player2 = new Player({name: player2});
  
//     this.deck = new Deck();
//   }
  
//   const game = new Game();

//function Game({})

class shown2 {
    constructor(value, color){
        this.color = color
        this.value =value
    }

 getHTML() {
        const shownDiv = document.createElement('div');
        shownDiv.InnerText = this.color;
        shownDiv.classList.add("shown2", this.color);
        shownDiv.dataset.value = `${this.value} ${this.color}`;
        return shownDiv;
        }
}
const shown = document.querySelector(".shown");

shown.appendChild(getHTML('kliu'))


{/* <div class="shownCard " data-value="10 ♠︎"> */}

console.log('ABC');
                  

