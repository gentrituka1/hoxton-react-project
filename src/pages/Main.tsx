import { useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import { Game } from "../App";

type Props = {
  games: Game[];
  setGames: (games: Game[]) => void;
};

export function Main({ games, setGames }: Props) {
  useEffect(() => {
    fetch("http://localhost:4000/games")
      .then((res) => res.json())
      .then((gamesFromServer) => {
        setGames(gamesFromServer);
      });
  }, []);

  return (
    <main className="main-section">
      <div className="main-section-top">
        <div className="whats-new">
          <h2>What's New</h2>
          <div className="whats-new-arrows">
            <h1
            className="clickable"
              onClick={(event) => {
                let clickedIndex = 0;
                if (clickedIndex < 2) {
                  clickedIndex++;
                  event.target.style.marginLeft = `-190*${clickedIndex}px`;
                }
              }}
            >
              ←
            </h1>
            <h1
            className="clickable"
              onClick={(event) => {
                let clickedIndex = 0;
                if (clickedIndex > 0) {
                  clickedIndex--;
                  event.target.style.marginLeft = `-190*${clickedIndex}px`;
                }
              }}
            >
              →
            </h1>
          </div>
        </div>
          <div className="main-section-top-news" >
            {games.map((game) => (
              <AliceCarousel mouseTracking games={games} />
            ))}
        </div>
      </div>
      <div className="main-section-bottom"></div>
    </main>
  );
}
