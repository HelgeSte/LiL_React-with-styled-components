import React from "react";

// gameslist={nameOfList} as to be used instead of label={nameOfList}
const Games = ({gameslist}) => {
    return (
        <div>
            <ul>
                    <h3>My games from Games.js</h3>
                    {gameslist.map ((game) => (
                                <li key={game.id}>
                        {game.name}<br />
                        {game.publisher}<br />
                        {game.year}
                    </li>
                    ))}

            </ul>
            
        </div>
    );
}

export default Games;