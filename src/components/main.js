import Hand from './Hand';
import Deck from './Deck';
import Card from './Card';

const main = () => {

    window.addEventListener('DOMContentLoaded', function() {
        // Execute after page load
        const deal = document.querySelector('#deal-button');
        deal.addEventListener('click', dealCards);

        const hit = document.querySelector('#hit-button');
        hit.addEventListener('click', hitMe);

        const stand = document.querySelector('#stand-button');
        stand.addEventListener('click', iStand);

        const playAgain = document.querySelector('#playAgain-button');
        playAgain.addEventListener('click', restart);
        playAgain.disabled = true;
    })

    //Variables
    let deck = new Deck();
    let dealerHand = new Hand();
    let playerHand = new Hand();
    let playerPoint = 0;
    let dealerPoint = 0;
    let message = "";

    //Deal Cards
    function dealCards(event){
        deck.buildDeck();
        playerHand = new Hand();
        dealerHand = new Hand();

        for(let i = 0; i < 2; i++){
            let card = deck.drawCard();
            playerHand.addCard(card);
            for(let j = 0; j < 2; j++){
                let card = deck.drawCard();
                dealerHand.addCard(card);
            }
        }
        render(playerHand);
        render(dealerHand);
        document.querySelector('#deal-button').disabled = true;
    }

    //Deal Hit Cards
    function hitMe(event){
        let player = document.querySelector('#player-hand');
        let dealer = document.querySelector('#dealer-hand');

        if(dealerPoint < 17){
            let playerHitCard = deck.drawCard();
            let newPlayerCard = playerHitCard.getImageUrl();
            playerHand.addCard(playerHitCard);
            playerPoint = playerHand.getPoints();
            player.append(newPlayerCard);
            document.querySelector('#player-points').textContent = playerPoint;

            let dealerHitCard = deck.drawCard();
            let newDealerCard = dealerHitCard.getImageUrl();
            dealerHand.addCard(dealerHitCard);
            dealerPoint = dealerHand.getPoints();
            dealer.append(newDealerCard);
            document.querySelector('#dealer-points').textContent = dealerPoint;
        } else {
            let playerHitCard = deck.drawCard();
            let newPlayerCard = playerHitCard.getImageUrl();
            playerHand.addCard(playerHitCard);
            playerPoint = playerHand.getPoints();
            player.append(newPlayerCard);
            document.querySelector('#player-points').textContent = playerPoint;
        }
    }

    //Player Stands
    function iStand(event){
        let dealer = document.querySelector('#dealer-and');

        if(dealerPoint < 17){
            let dealerHitCard = deck.drawCard();
            let newDealerCard = dealerHitCard.getImageUrl();
            dealerHand.addCard(dealerHitCard);
            dealerPoint = dealerHand.getPoints();
            dealer.append(newDealerCard);
            document.querySelector('#dealer-points').textContent = dealerPoint;
        }
    }

    //Render Cards and Points
    function render(Hand){
        let player = document.querySelector('#player-hand');
        let dealer = document.querySelector('#dealer-hand');

        if(Hand == this.playerHand){
            for(let i = 0; i < playerHand.length; i++){
                let card = playerHand[i];
                let newCard = card.getImageUrl();
                player.append(newCard);
            }
            playerPoint = playerHand.getPoints();
            document.querySelector('#player-points').textContent = playerPoint;
        } else {
            for(let j = 0; j < dealerHand.length; j++){
                let card = dealerHand[j];
                let newCard = card.getImageUrl();
                dealer.append(newCard);
            }
            dealerPoint = dealerHand.getPoints();
            document.querySelector('#dealer-points').textContent = dealerPoint
        }
    }

    //End Game
    function gameOver(){
        if(dealerPoint >= 17 || playerPoint >= 17){
            if(dealerPoint >= 17 && playerPoint >= 17){
                if(dealerPoint > playerPoint){
                    message = 'Dealer Wins!';
                } else if(playerPoint > dealerPoint){
                    message = 'Player Wins!';
                } else if(playerPoint == dealerPoint){
                    message = 'Draw!'
                }
                document.querySelector('#playAgain-button').disabled = false;
                document.querySelector('#hit-button').disabled = true;
                document.querySelector('#stand-button').disabled = true;
            }
            if(playerPoint > 21 || dealerPoint > 21){
                if(playerPoint > 21 && dealerPoint > 21){
                    message = 'Player and Dealer Bust';
                } else if (playerPoint > 21){
                    message = "Player bust! You Lose!";
                } else {
                    message = 'Dealer bust! You Win!';
                }
                document.querySelector('#playAgain-button').disabled = false;
                document.querySelector('#hit-button').disabled = true;
                document.querySelector('#stand-button').disabled = true;
            }
        }
        document.querySelector('#messages').textContent = message;
    }

    //Restart Game
    function restart() {
        let player = document.querySelector('#player-hand');
        let dealer = document.querySelector('#dealer-hand');

        playerHand.emptyHand();
        dealerHand.emptyHand();
        playerPoint = 0;
        dealerPoint = 0;
        message = '';

        document.querySelector('#messages').textContent = message;
        player.textContent = '';
        dealer.textContent = '';

        document.querySelector('#hit-button').disabled = false;
        document.querySelector('#stand-button').disabled = false;
        document.querySelector('#playAgain-button').disabled = true;
        deck.buildDeck();
    }
}

export default main;