// importando a função de pilhas de carta
import Deck from './cartas.js';

//Pontuação das cartas
 const valorCartas ={
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "10":10,
  "J": 11,
  "Q": 12,
  "K": 13,
  "A": 14,

 }

 
const computerCardSlot = document.querySelector(".computer-card-slot");
const playerCardSlot = document.querySelector(".player-card-slot");
const computerDeckElement = document.querySelector(".computer-deck");
const playerDeckElement = document.querySelector(".player-deck");
const text = document.querySelector(".text");

let playerDeck, computerDeck, inRound, stop;
// inRound estado inicial do jogo false

//Função de inciar ao clicar

document.getElementById("btn").addEventListener ('click', () =>{
if(stop){
    startGame();
    return
}
    if(inRound){
       limparJogo()

    } else{
        //função para virar as cartas
        virarCartas()

    }
})


//Inciando Jogo
startGame()

function startGame(){
const deck = new Deck()
deck.shuffle()

//Criando Pilha de cartas dividindo 52 cartas
const deckMidpoint =Math.ceil(deck.numberOfCards / 2);
playerDeck = new Deck(deck.cards.slice(0, deckMidpoint));
computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards));
inRound = false;
stop = false;


//Chamando a Função para limpar jogo
limparJogo()

}
//Função para limpar jogo
function limparJogo(){
   
    inRound = false;
    computerCardSlot.innerHTML = '';
    playerCardSlot.innerHTML ='';
    text.innerHTML =''

    //chamando função para atualizar quantidade de cartas
    updateDeckCount()

}
//função para virar cartas
function virarCartas(){
    inRound = true;

    const playerCard = playerDeck.pop()
    const computerCard = computerDeck.pop()

    playerCardSlot.appendChild(playerCard.getHTML())
    computerCardSlot.appendChild(computerCard.getHTML())


//chamando a função de contagem de cartas
updateDeckCount()


if(vencedorDaRodada(playerCard, computerCard)){
    text.innerHTML = " Você Ganhou !"
    playerDeck.push(playerCard)
    playerDeck.push(computerCard)
}
  else if(vencedorDaRodada(computerCard, playerCard)){
    text.innerHTML = " O Computador Ganhou !"
    computerDeck.push(playerCard)
    computerDeck.push(computerCard)

}else{    
    text.innerHTML = " Empate!"
    playerDeck.push(playerCard)
    computerDeck.push(computerCard)
}

 if(gameOver(playerDeck)){
     text.innerHTML = "Você perdeu!!!"
     stop =true;

 }else if(gameOver(computerDeck)){
     text.innerHTML = "Você Ganhou !!!"
     stop =true;
 }

}

// Função para atualizar quantidade de cartas
function updateDeckCount(){
    computerDeckElement.innerHTML = computerDeck.numberOfCards;
    playerDeckElement.innerHTML = playerDeck.numberOfCards;


}

//função para determinar o vencedor
function vencedorDaRodada(cardOne, cardTwo){
    return valorCartas [cardOne.value] > valorCartas [cardTwo.value]

}

//Game Over

function gameOver(deck){
    return deck.numberOfCards === 0
}

