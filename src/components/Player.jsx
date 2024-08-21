import { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [beforeName, afterName] = useState(name);
  const [isEditing, setisEditing] = useState(false);

  function handleEditClick() {
    setisEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, beforeName);
    }
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={beforeName}
            onChange={function (event) {
              return afterName(event.target.value);
            }}
          ></input>
        ) : (
          <span className="player-name">{beforeName}</span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
