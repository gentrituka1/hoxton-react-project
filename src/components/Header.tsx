import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { User } from "../App";

type Props = {
  signedIn: boolean;
  signOut: () => void;
  user: User | null;
}

export function Header({signedIn, signOut, user}: Props) {
  return (
    <header>
      <div className="header-left">
        <IoMdArrowRoundBack
          className="header-font"
          onClick={() => {
            history.back();
          }}
        />
        <IoMdArrowRoundForward
          className="header-font"
          onClick={() => {
            history.forward();
          }}
        />
        <NavLink className="links" to="/store">
          <h1>Store</h1>
        </NavLink>
        <NavLink className="links" to="/library">
          <h1>Library</h1>
        </NavLink>
      </div>
      <div className="user">
        <img />
        
          { signedIn && user !== null ? 
          <div className="log">
            <NavLink className="links" to="/">
              <h1>{user.username}</h1>
            </NavLink>
            <div className="links" onClick={() => {
              signOut();
            }}>
              <h1>Sign Out</h1>
            </div>
          </div>
          :
          <div className="log">
            <NavLink className="links" to="/signin">
              <h1>Sign In</h1>
            </NavLink>
            <NavLink className="links" to="/signup">
              <h1>Sign Up</h1>
            </NavLink>
          </div>
}
 
      </div>
    </header>
  );
}
