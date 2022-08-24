import { Link } from "react-router-dom";
import { LeftSection, Props } from "../components/LeftSection";
import {SiSteam} from "react-icons/si";
import "./SignIn.css";

export function SignIn ({games, setGames}: Props) {
    return (
        <>
            <LeftSection games={games} setGames={setGames}/>
            <main className="main-signup-section">
                <div className="signin-container">
                    <div className="steam-logo">
                        <SiSteam className="steam-logo-icon" />
                        <span>Steam</span>
                    </div>
                    <form className="signin-form">
                        <label>Account name<input type="text" placeholder="Email or username..."/></label>
                        <label>Password<input type="password" placeholder="Password..."/></label>
                        <div className="signin-form-buttons">
                            <button>Login</button>
                            <button>Cancel</button>
                        </div>
                    </form>
                    <div className="signin-container-footer">
                        <span>Don't have a Steam account?</span> 
                        <Link to="/signup"><button>CREATE A NEW ACCOUNT</button></Link>
                    </div>
                </div>
            </main>
        </>
    )
}