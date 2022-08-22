import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Props } from "../components/LeftSection";



export function Store ({games, setGames}: Props) {
    return (
        <>
        <Header />
        {games.map((game) => (
            <div key={game.id}>
                <img src={game.logo} alt={game.name} />
            </div>
        ))}
        <Footer games={games} setGames={setGames}/>
        </>
    )
}