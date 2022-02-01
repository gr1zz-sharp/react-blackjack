import Card from "./Card";
import Hand from "./Hand";
import Deck from "./Deck";

const Medium = () => {
    let myDeck = new Deck();

  return (<div className="container">
      <div className="myCard">
          {myDeck.buildDeck()}
          {myDeck.shuffleDeck()}
          {myDeck.drawCard()}
          {myDeck.drawCard()}
          {myDeck.numCardsLeft()}
      </div>
  </div>);
}

export default Medium;
