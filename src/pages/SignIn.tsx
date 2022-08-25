import { Link, useNavigate } from "react-router-dom";
import { Props } from "../App";
import { LeftSection } from "../components/LeftSection";
import { SiSteam } from "react-icons/si";
import "./SignIn.css";
import { User } from "../App";

export function SignIn({signIn, games, setGames }: Props) {

    let navigate = useNavigate()


    function handleSubmit (event: any) {
      event.preventDefault()
      let username = event.target.username.value 
      let password = event.target.password.value
  
      fetch(`http://localhost:4000/users/${username}`)
      .then(r => r.json())
      .then((user: User) => {
       if (user.password === password)  {
        signIn(user)
       } else {
         alert("Your password/username is incorrect. Please try again.")
       }
      })
  
    }
  return (
    <>
      <LeftSection games={games} setGames={setGames} />
      <main className="main-signin-section">
        <div className="signin-container">
          <div className="steam-logo">
            <SiSteam className="steam-logo-icon" />
            <span>Steam</span>
          </div>
          <form className="signin-form" onSubmit={handleSubmit}>
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
