import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RiListSettingsFill } from "react-icons/ri";

export type Game = {
  id: number;
  name: string;
  logo: string;
  favorite: boolean;
};

export function LeftSection() {
  const [games, setGames] = useState<Game[]>([]);
  const [toggle, setToggle] = useState(false);
  const [toggleFavorite, setToggleFavorite] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/games")
      .then((res) => res.json())
      .then((gamesFromServer) => {
        setGames(gamesFromServer);
      });
  }, []);

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
          />
        </div>
        <RiListSettingsFill className="left-section-font" />
      </div>
      <div className="left-section-bottom">
        <div className="left-section-bottom-menu">
          <h2>Favorites</h2>
          <div className="left-section-bottom-favorite-list">
            {games.map((game) => {
              if (game.favorite === true) {
                return (
                  <li key={game.id}>
                    <img src={game.logo} alt={game.name} width={40} height={40}/>
                    <p>{game.name}</p>
                  </li>
                );
              }
            })}
        </div>
        </div>
        <div className="left-section-bottom-menu">
          <h2
          onClick={() => {
            if(toggle === false) {
                let list = document.getElementById("list")
                list.style.display = "none"
                setToggle(true)
            } else {
                let list = document.getElementById("list")
                list.style.display = "block"
                setToggle(false)
            }
            
          }}
          >Uncategorized</h2>
          <div className="left-section-bottom-uncategorized-list" id="list">
            {games.map((game) => {
              return (
                <li key={game.id}
                onDoubleClick={() => {
                    fetch(`http://localhost:4000/games/${game.id}`, {
                        method: "PATCH",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            favorite: !game.favorite
                        })
                    })
                    .then(res => res.json())
                    .then(game => {
                        setGames(games.map(g => g.id === game.id ? game : g))
                    })
                }}
                >
                {game.favorite === false ? 
                <>
                <img src={game.logo} alt={game.name} width={40} height={40} /><p>{game.name}</p>
                </> :
                null
                }
                  
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
