import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { User } from "../App";

export function Header() {
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
        <div className="log">
          <NavLink className="links" to="/signin">
            <h1>Login</h1>
          </NavLink>
          <NavLink className="links" to="/signup">
            <h1>Sign Up</h1>
          </NavLink>
        </div>
      </div>
    </header>
  );
}
