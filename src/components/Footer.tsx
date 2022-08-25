import { BiMessageRoundedAdd } from "react-icons/bi";
import { RiAddBoxLine } from "react-icons/ri";
import { Props } from "./LeftSection";

export function Footer({ games, setGames }: Props) {
  return (
    <footer>
      <div className="footer-left dropup">
        <div className="add-game" id="dropbtn">
          <RiAddBoxLine className="font" />
          <p>ADD A GAME</p>
        </div>
        <form
          className="dropup-content form"
          onSubmit={(event) => {
            event.preventDefault();
            fetch("http://localhost:4000/games", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: event.target.name.value,
                logo: event.target.image.value,
                description: "",
                favorite: false,
                installed: false,
                bought: true,
                platform: "PC",
                time: "Just Now",
              }),
            })
              .then((res) => res.json())
              .then((gamesFromServer) => {
                setGames(gamesFromServer);
              });
              //@ts-ignore
            event.target.reset();
            
            location.reload();
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Name..."
            required
            minLength={3}
          />
          <input
            type="url"
            name="image"
            placeholder="Image..."
            required
            minLength={5}
          />
          <button>Add Game</button>
        </form>
      </div>
      <div className="footer-mid">
        <p>Downloads</p>
      </div>
      <div className="footer-right">
        <div className="footer-right-friends">
          <span className="friends">Friends</span>
          <span className="chat">& Chat</span>
        </div>
        <BiMessageRoundedAdd className="font" />
      </div>
    </footer>
  );
}
