import { Link, useNavigate } from "react-router-dom";
import { SiSteam } from "react-icons/si";
import "./SignUp.css";
import { Game, User } from "../App";
import { LeftSection } from "../components/LeftSection";

type Props = {
    games: Game[];
    setGames: (games: Game[]) => void;
    setUsers: (users: User[]) => void;
    users: User[];
  };

export function SignUp ({ games, setGames, setUsers, users }: Props) {

    let navigate = useNavigate()

    return (
        <>
          <LeftSection games={games} setGames={setGames} />
          <main className="main-signup-section">
            <div className="signup-container">
              <div className="steam-logo">
                <SiSteam className="steam-logo-icon" />
                <span>Steam</span>
              </div>
              <form className="signup-form" id="form" onSubmit={(event) => {
                event.preventDefault()
                fetch("http://localhost:4000/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        id: users.length + 1,
                        username: document.getElementById("nickname")?.value,
                        password: document.getElementById("password")?.value,
                        email: document.getElementById("email")?.value,
                        avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/ffe63e7b-6c8d-4f7c-b991-5caf1da1e61c-profile_image-300x300.jpg",
                        loggedIn: false
                    })
                }).then((res) => res.json())
                .then((user) => {
                    localStorage.setItem("userId", JSON.stringify(user.id)) 
                    setUsers([...users, user])
                })
                navigate("/library")
              }}>
                <label>
                  Nickname 
                  <input name="nickname" id="nickname" type="text" placeholder="Username..." required minLength={5}/>
                </label>
                <label>
                  Email
                  <input name="email" id="email" type="text" placeholder="Email..." required/>
                </label>
                <label>
                  Password
                  <input name="password" id="password" type="password" placeholder="Password..." required minLength={6}/>
                </label>
                <div className="signup-form-buttons">
                  <button type="submit" form="form">SIGNUP</button>
                  <button onClick={() => {
                    navigate("/library")
                  }}>Cancel</button>
                </div>
              </form>
              <div className="signup-container-footer">
                <span>Already have an account?</span>
                <Link to="/signin">
                  <button>LOGIN IN</button>
                </Link>
              </div>
            </div>
          </main>
        </>
      );
}