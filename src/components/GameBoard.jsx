import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare }) {
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handSelectSquare(rowIndex,colIndex) {
    //     setGameBoard((prevGameBoard)=>{
    //         // const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         const updatedBoard = structuredClone(prevGameBoard);
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     });

    //     onSelectSquare();
    // }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={onSelectSquare}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
