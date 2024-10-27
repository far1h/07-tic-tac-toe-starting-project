import { useState } from "react";

export default function GameBoard({ onSelectSquare, board }) {
  
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
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol!== null?true:false }>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
