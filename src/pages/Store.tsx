import "./Store.css"
import { LeftSection, Props } from "../components/LeftSection";
import { useNavigate } from "react-router-dom";



export function Store ({games, setGames}: Props) {

    let navigate = useNavigate()

    return (
        <>
        <LeftSection games={games} setGames={setGames}/>
        <main className="main-store-section">
            <div className="store-container">
                {games.map((game) => (
                    <div className="store-all-game" key={game.id}>
                        <img src={game.logo} alt={game.name} width={200} height={170}/>
                        <div className="store-game-info">
                            <div className="buy-game">
                                <h2>{game.name}</h2>
                                <button
                                onClick={() => {
                                    fetch(`http://localhost:4000/games/${game.id}`, {
                                        method: "PATCH",
                                        headers: {
                                            "Content-Type": "application/json"
                                            },
                                            body: JSON.stringify({
                                                bought: true,
                                            })
                                    }).then((res) => res.json())
                                    .then((gamesFromServer) => {
                                        setGames(gamesFromServer);
                                    })
                                    

                                    location.reload()
                                }}
                                >{game.bought ? "Already in Library" : "Buy"}</button>
                            </div>
                            <div className="store-game-info-price">
                                <h3>{game.price === "Free" ? "Free" : `${game.price}$`}</h3>
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