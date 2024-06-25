import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [PlayerName, setPlayername] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function HandleEditClick() {
        setIsEditing((editing) => !editing);
        if (isEditing) {
            onChangeName(symbol, PlayerName);
        }
    }

    function handleChange(event) {
        setPlayername(event.target.value);

    }

    let editableplayername = <span className="player-name">{PlayerName}</span>

    if (isEditing) {
        editableplayername = (<input type="text" required value={PlayerName} onChange={handleChange} />);
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editableplayername}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={HandleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>

    );
}