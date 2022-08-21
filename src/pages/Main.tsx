import { useEffect } from "react";
import { Game } from "../components/LeftSection";

type Props = {
    games: Game[];
    setGames: (games: Game[]) => void;
}

export function Main ({ games, setGames }: Props) {

    useEffect(() => {
        fetch("http://localhost:4000/games")
            .then((res) => res.json())
            .then((gamesFromServer) => {
                setGames(gamesFromServer);
            }
            );
    }, [])

    return (
        <main className="main-section">
            <div className="main-section-top">
                <div className="what's-new">
                    <h2>What's New</h2>
                </div>
                <div className="main-section-top-news">
                    {games.map((game) => 
                    <li>
                        <h4>This Week</h4>
                        <img src={game.logo} />
                        <p>{game.description}</p>
                        <h3>{game.name}</h3>
                    </li> 
                    )}
                </div>
            </div>
        </main>
    );
}