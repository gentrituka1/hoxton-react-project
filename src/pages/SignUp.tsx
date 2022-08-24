import { Link } from "react-router-dom";
import { LeftSection, Props } from "../components/LeftSection";
import { SiSteam } from "react-icons/si";
import "./SignUp.css";

export function SignUp ({ games, setGames }: Props) {
    return (
        <>
          <LeftSection games={games} setGames={setGames} />
          <main className="main-signup-section">
            <div className="signup-container">
              <div className="steam-logo">
                <SiSteam className="steam-logo-icon" />
                <span>Steam</span>
              </div>
              <form className="signup-form">
                <label>
                  Nickname 
                  <input name="nickname" type="text" placeholder="Username..." />
                </label>
                <label>
                  Email
                  <input type="text" placeholder="Email..." />
                </label>
                <label>
                  Password
                  <input type="password" placeholder="Password..." />
                </label>
                <div className="signup-form-buttons">
                  <button>SIGNUP</button>
                  <button>Cancel</button>
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