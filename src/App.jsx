import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare() {
    setActivePlayer((currActivePlayer) => 
    currActivePlayer == 'X' ? 'O' : 'X');
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}></Player>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}></Player>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}></GameBoard>
      </div>
      <Log></Log>
    </main>
  );
}

export default App;
