//Colocar Funcionalidades Baralho 52 cartas
//Naipes
const NAIPES = [ "♠" ,  "♣" ,  "♥" ,  "♦" ];
const VALUES = [ "A" , "2", "3", "4", "5","6" ,"7" ,"8" ,"9" ,"10" ,"J" ,"Q" ,"K"];


// construindo as Pilha de cartas
export default class Deck{
    constructor(cards = freshDeck()){
        this.cards = cards
    }

   //Para numero de cartas do jogo
  get numberOfCards(){
      return this.cards.length
  }
 //função puxar cartas
 pop(){
     return this.cards.shift()

 }

 push(card){
     this.cards.push(card)
 }


   //Função para embaralhar as cartas aleatoriamente
    shuffle(){
        //configurando os indices e trocando os cartas usada no momento por outra
        for(let i = this.numberOfCards - 1; i > 0; i--){
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue


        }
    }

}
    
//Classe para cartas Naipes
 class Card{
    constructor(naipe, value){
        this.naipe = naipe
        this.value = value
    }
    //Mudando as cores dos naipes
   get color(){
    return this.naipe === "♣" || this.naipe === "♠" ? "black" : "red";
   }

    getHTML() {
        
        const cardDiv = document.createElement('div')
        cardDiv.innerHTML = this.naipe
        cardDiv.classList.add("card" ,this.color)
        cardDiv.dataset.value = `${this.value} ${this.naipe}`;
        return cardDiv
       
        
    }

}

//Função para percorre os valores para combinar os valores com o naipes
function freshDeck(){
    //o flatMap é para mesclar o array, ele vai juntar os arrays e criar um novo
    return NAIPES.flatMap(naipe =>{
       return VALUES.map(value =>{
           return new Card(naipe, value)
       })

    })

}