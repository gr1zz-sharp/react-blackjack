import { Image } from "react-bootstrap";

class Card  {
    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }

    displayCard() {
        return <h3>{this.rank} of {this.suit}</h3>
    }

    getImageUrl() {
        switch(this.rank) {
            case 1: 
                this.rank = 'ace'; 
                break;
            case 11:
                this.rank = 'jack';
                break;
            case 12:
                this.rank = 'queen';
                break;
            case 13:
                this.rank = 'king';
                break;
            default:
        }
        let src = `./images/${this.rank}_of_${this.suit}.png`;
        let altText = `${this.rank} of ${this.suit}`;

        return <Image src={src} />
        
    }
}

export default Card;