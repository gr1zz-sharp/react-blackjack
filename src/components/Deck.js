import Hand from "./Hand";

class Deck {
    constructor(){
        this.deck = [];
        this.hand = new Hand();
        this.cards = 52;
        this.suits = ['clubs', 'diamonds', 'hearts', 'spades'];
        this.rank = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    }

    buildDeck() {
        for(let i = 0; i < this.rank.length; i++){
            for(let j = 0; j < this.suits.length; j++){
                let card = {rank: this.rank[i], suit: this.suits[j]};
                this.deck.push(card);
            }
        }
    }

    shuffleDeck() {
        let currentIndex = this.deck.length, randomIndex;

        while(currentIndex != 0){
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [this.deck[currentIndex], this.deck[randomIndex]] = [this.deck[randomIndex], this.deck[currentIndex]];
        }
        console.log(this.deck);
    }

    drawCard() {
        let card = this.deck.pop();
        this.hand.addCard(card);

        console.log(this.hand)
    }

    numCardsLeft() {
        let cardNum = this.deck.length;

        console.log(cardNum);
    }
}

export default Deck;
