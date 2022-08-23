import { useState, useEffect } from "react";
import { Game } from "../App";
import {MdDelete} from "react-icons/md";

type Props = {
    games: Game[];
    setGames: (games: Game[]) => void;
  };

export function Main ({ games, setGames }: Props) {
    const [selectedIndex, setSelectedIndex] = useState(0);


    useEffect(() => {
      if(games.length === 0) return
      const game = games[selectedIndex];
      const gameEl = document.querySelector(`#game-${game.id}`);
      if (gameEl) {
        gameEl.scrollIntoView({ block: "center",  inline: "center" });
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
          <h2>WHAT'S NEW</h2>
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
                setSelectedIndex(index);
              }}
              key={game.id}
              className={`scroll-item ${
                selectedIndex === index ? "selected" : ""
              }`}
              id={`game-${game.id}`}
            >
              <h4>{game.time}</h4>
              <img src={game.logo} width={200} height={100}/>
              <p>{game.description}</p>
              <h3>{game.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="main-section-bottom">
        <div className="main-section-bottom-all-games">
          <h2>ALL GAMES({games.length})</h2>
            <div className="main-section-bottom-all-games-list">
              {games.map((game) => 
                <div className="main-section-bottom-all-games-item">
                    <img src={game.logo} width={200}/>
                    <MdDelete className="delete-item" onClick={() => {
                        if(window.confirm("Are you sure you want to delete this game?")) {
                        fetch(`http://localhost:4000/games/${game.id}`, {
                            method: "DELETE",
                        }).then(r => r.json())
                        .then(data => {
                            setGames(data);
                        })
                        location.reload()
                      } else return
                    }}/>
                </div>
              )}
            </div>
          </div>
      </div>
    </main>
    )
}