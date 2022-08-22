import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Game } from "../App";

type Props = {
  games: Game[];
  setGames: (games: Game[]) => void;
};

export function Main({ games, setGames }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [toggleSelected, setToggleSelected] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/games")
      .then((res) => res.json())
      .then((gamesFromServer) => {
        setGames(gamesFromServer);
      });
  }, []);

  useEffect(() => {
    const game = games[selectedIndex];
    const gameEl = document.querySelector(`#game-${game.id}`);
    if (gameEl) {
      gameEl.scrollIntoView({ inline: "center" });
    }
  }, [games, selectedIndex]);

  function previous() {
    let newIndex = selectedIndex === 0 ? games.length - 1 : selectedIndex - 1;
    setSelectedIndex(newIndex);
  }

  function next() {
    let newIndex = selectedIndex === games.length - 1 ? 0 : selectedIndex + 1;
    setSelectedIndex(newIndex);
  }

  return (
    <main className="main-section">
      <div className="main-section-top">
        <div className="whats-new">
          <h2>What's New</h2>
          <div className="whats-new-arrows">
            <h1
              className="clickable"
              onClick={() => {
                previous();
              }}
            >
              ←
            </h1>
            <h1
              className="clickable"
              onClick={() => {
                next();
              }}
            >
              →
            </h1>
          </div>
        </div>
        <div className="main-section-top-news scroller">
          {games.map((game, index) => (
            <div
              onClick={() => {
                setToggleSelected(!toggleSelected);

                toggleSelected ? setSelectedIndex(index) : setSelectedIndex(0);
              }}
              key={game.id}
              className={`scroll-item ${
                selectedIndex === index ? "selected" : ""
              }`}
              id={`game-${game.id}`}
            >
              <h4>This Week</h4>
              <img src={game.logo} />
              <p>{game.description}</p>
              <h3>{game.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="main-section-bottom"></div>
    </main>
  );
}
