import { Link, useNavigate } from "react-router-dom";
import { LeftSection, Props } from "../components/LeftSection";
import { SiSteam } from "react-icons/si";
import "./SignUp.css";

export function SignUp ({ games, setGames }: Props) {

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
              <form className="signup-form" onSubmit={(event) => {
                event.preventDefault()
                fetch("http://localhost:4000/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username: event.target.username.value,
                        password: event.target.password.value,
                        email: event.target.email.value,
                        avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/ffe63e7b-6c8d-4f7c-b991-5caf1da1e61c-profile_image-300x300.jpg",
                        loggedIn: false
                    })
                }).then((res) => res.json())
                .then((user) => {
                    localStorage.setItem("user", JSON.stringify(user))
                    navigate("/library")
                })
              }}>
                <label>
                  Nickname 
                  <input name="nickname" type="text" placeholder="Username..." />
                </label>
                <label>
                  Email
                  <input name="email" type="text" placeholder="Email..." />
                </label>
                <label>
                  Password
                  <input name="password" type="password" placeholder="Password..." />
                </label>
                <div className="signup-form-buttons">
                  <button>SIGNUP</button>
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