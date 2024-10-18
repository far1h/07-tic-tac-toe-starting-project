import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  let playerName = <span className="player-name">{name}</span>;
  let buttonName = "Edit";
  if (isEditing) {
    playerName = <input type="text" required value={name} />;
    buttonName = "Save";
  }
  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }
  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonName}</button>
    </li>
  );
}
