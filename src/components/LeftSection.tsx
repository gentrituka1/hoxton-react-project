import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RiListSettingsFill } from "react-icons/ri";
import { Game } from "../App";
import 'react-alice-carousel/lib/alice-carousel.css'

type Props = {
  games: Game[];
  setGames: (games: Game[]) => void;
}

export function LeftSection({ games, setGames }: Props) {
  const [value, setValue] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <section className="left-section">
      <div className="left-section-top">
        <div className="left-section-top-top">
          <AiOutlineSearch className="left-section-font" />
          <input
            name="search"
            type="text"
            onMouseEnter={(event) => {
              event.target.placeholder = "Search by Names";
            }}
            onMouseLeave={(event) => {
              event.target.placeholder = "";
            }}
            onChange={(event) => {
              setValue(event.target.value);
            }}
          />
        </div>
        <RiListSettingsFill className="left-section-font" />
      </div>
      <div className="left-section-bottom">
        <div className="left-section-bottom-menu">
          <h2
            onClick={(event) => {
              if (toggle === false) {
                let list = document.getElementById("list1");
                list.style.display = "none";
                setToggle(true);
              } else {
                let list = document.getElementById("list1");
                list.style.display = "block";
                setToggle(false);
              }

              event.target.textContent = toggle ? "- Favorites" : "+ Favorites";
            }}
          >
            - Favorites
          </h2>
          <div className="left-section-bottom-favorite-list">
            <div id="list1">
              {games.filter(game => game.name.toLowerCase().includes(value)).map((game) => {
                if (game.favorite === true && game.bought === true) {
                  return (
                    <li
                      key={game.id}
                      onDoubleClick={() => {
                        fetch(`http://localhost:4000/games/${game.id}`, {
                          method: "PATCH",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({
                            favorite: !game.favorite,
                          }),
                        })
                          .then((res) => res.json())
                          .then((game) => {
                            setGames(
                              games.map((g) => (g.id === game.id ? game : g))
                            );
                          });
                      }}
                    >
                      <img
                        src={game.logo}
                        alt={game.name}
                        width={40}
                        height={40}
                      />
                      <p>{game.name}</p>
                    </li>
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div className="left-section-bottom-menu">
          <h2
            onClick={(event) => {
              if (toggle === false) {
                let list = document.getElementById("list2");
                list.style.display = "none";
                setToggle(true);
              } else {
                let list = document.getElementById("list2");
                list.style.display = "block";
                setToggle(false);
              }

              event.target.textContent = toggle
                ? "- Uncategorized"
                : "+ Uncategorized";
            }}
          >
            - Uncategorized
          </h2>
          <div className="left-section-bottom-uncategorized-list" id="list2">
            {games.filter(game => game.name.toLowerCase().includes(value)).map((game) => {
              if (game.favorite === false && game.bought === true) {
              return (
                <li
                  key={game.id}
                  onClick={() => {}}
                  onDoubleClick={() => {
                    fetch(`http://localhost:4000/games/${game.id}`, {
                      method: "PATCH",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        favorite: !game.favorite,
                      }),
                    })
                      .then((res) => res.json())
                      .then((game) => {
                        setGames(
                          games.map((g) => (g.id === game.id ? game : g))
                        );
                      });
                  }}
                >
                  {game.favorite === false ? (
                    <>
                      <img
                        src={game.logo}
                        alt={game.name}
                        width={40}
                        height={40}
                      />
                      <p>{game.name}</p>
                    </>
                  ) : null}
                </li>
              );
            }})}
          </div>
        </div>
      </div>
    </section>
  );
}
