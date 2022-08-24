import { Link, useNavigate } from "react-router-dom";
import { LeftSection, Props } from "../components/LeftSection";
import { SiSteam } from "react-icons/si";
import "./SignIn.css";

export function SignIn({ games, setGames }: Props) {

    let navigate = useNavigate()

  return (
    <>
      <LeftSection games={games} setGames={setGames} />
      <main className="main-signin-section">
        <div className="signin-container">
          <div className="steam-logo">
            <SiSteam className="steam-logo-icon" />
            <span>Steam</span>
          </div>
          <form className="signin-form">
            <label>
              Username
              <input type="text" placeholder="Username or Email..." />
            </label>
            <label>
              Password
              <input type="password" placeholder="Password..." />
            </label>
            <div className="signin-form-buttons">
              <button>Login</button>
              <button onClick={() => {
                navigate("/library")
              }}>Cancel</button>
            </div>
          </form>
          <div className="signin-container-footer">
            <span>Don't have a Steam account?</span>
            <Link to="/signup">
              <button>CREATE A NEW ACCOUNT</button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
