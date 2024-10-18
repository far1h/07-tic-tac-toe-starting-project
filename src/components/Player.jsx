import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
    const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  let playerNameContent = <span className="player-name">{playerName}</span>;
  let buttonName = "Edit";
  if (isEditing) {
    playerNameContent = <input type="text" required value={playerName} onChange={handleChange} />;
    buttonName = "Save";
  }
  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }
  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  return (
    <li className={isActive?'active':undefined}>
      <span className="player">
        {playerNameContent}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonName}</button>
    </li>
  );
}
