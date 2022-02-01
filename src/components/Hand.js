class Hand {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.points = 0;
    }

    addCard(card) {
        this.hand.push(card);
        return card;
    }

    emptyHand() {
        this.hand = [];
    }

    getPoints() {
        this.points = 0;
        this.hand.map((card) => {
            let point = card.rank;
            if (point > 10){
                point = 10;
            }
            this.points += point;
            return null;
        });
        return this.points;
    }
}

export default Hand;