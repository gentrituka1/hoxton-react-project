import "./Store.css"
import { LeftSection, Props } from "../components/LeftSection";



export function Store ({games, setGames}: Props) {
    return (
        <>
        <LeftSection games={games} setGames={setGames}/>
        <main className="main-store-section">
            <div className="store-container">
                {games.map((game) => (
                    <div className="store-all-game" key={game.id}>
                        <img src={game.logo} alt={game.name} width={200} height={170}/>
                        <div className="store-game-info">
                            <h2>{game.name}</h2>
                            <div className="store-game-info-price">
                                <h3>{game.price}</h3>
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