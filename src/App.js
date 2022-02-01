// import Small from "./components/Small";
// import Medium from "./components/Medium";
import main from "./components/main";

function App() {

  return (
    <div className="message-box" id="messages"></div>,
    <div className="table">
      <div className="player">
        <label className="player-name">Dealer: 
          <span id="dealer-points" className="points"></span>
        </label>
        <div id="dealer-hand" className="hand">
          {/* <!-- Dealer Hand --> */}
        </div>
      </div>
      <div className="player">
        <label className="player-name">Player: 
          <span id="player-points" className="points"></span>
        </label>
        <div id="player-hand" className="hand">
          {/* <!-- Player Hand --> */}
        </div>
      </div>
      <div className="buttons">
        <button id="deal-button" type="button">Deal</button>
        <button id="hit-button" type="button">Hit</button>
        <button id="stand-button" type="button">Stand</button>
        <button id="playAgain-button" type="button">Play Again?</button>
      </div>
    </div>
  );
}

export default App;
