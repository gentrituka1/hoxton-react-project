import "./Store.css"
import { LeftSection } from "../components/LeftSection";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Game } from "../App";

type Props = {
    games: Game[];
    setGames: (games: Game[]) => void;
}

export function Store ({games, setGames}: Props) {
    const [toggleBought, setToggleBought] = useState(false);

    let navigate = useNavigate()

    return (
        <>
        <LeftSection games={games} setGames={setGames}/>
        <main className="main-store-section">
            <div className="store-container">
                {games.map((game: Game) => (
                    <div className="store-all-game" key={game.id}>
                        <img src={game.logo} alt={game.name} width={200} height={170}/>
                        <div className="store-game-info">
                            <div className="buy-game">
                                <h2>{game.name}</h2>
                                <button
                                onClick={() => {
                                    setToggleBought(!toggleBought)
                                    if(toggleBought){
                                    fetch(`http://localhost:4000/games/${game.id}`, {
                                        method: "PATCH",
                                        headers: {
                                            "Content-Type": "application/json"
                                            },
                                            body: JSON.stringify({
                                                bought: !game.bought,
                                                favorite: false
                                            })
                                    }).then((res) => res.json())
                                    .then((gamesFromServer) => {
                                        setGames(gamesFromServer);
                                    })
                                } else {
                                    fetch(`http://localhost:4000/games/${game.id}`, {
                                        method: "PATCH",
                                        headers: {
                                            "Content-Type": "application/json"
                                            },
                                            body: JSON.stringify({
                                                bought: !game.bought,
                                                favorite: false
                                            })
                                    }).then((res) => res.json())
                                    .then((gamesFromServer) => {
                                        setGames(gamesFromServer);
                                    })
                                }

                                    location.reload()
                                }}
                                
                                >{game.bought ? "Already in Library" : "Buy"}</button>
                            </div>
                            <div className="store-game-info-price">
                               {game.discountedPrice ? 
                               
                                <div className="store-game-info-price-old">
                                    <h2 className="discounted-price">{game.price}</h2>
                                    <h2 className="price-tag">{game.discountedPrice}</h2>
                                </div>
                               
                               :
                                <h2 className="price-tag">{game.price}</h2>
                            }
                                <h3>{game.platform}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
        </>
    )
}