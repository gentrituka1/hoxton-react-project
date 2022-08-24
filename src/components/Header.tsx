import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
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
        <Link className="links" to="/store">
          <h1>Store</h1>
        </Link>
        <Link className="links" to="/library">
          <h1>Library</h1>
        </Link>
      </div>
      <div className="user">
        <img />
        
            <div className="log">
              <h1>Login</h1>
              <h1>Sign Up</h1>
            </div>
          
  
      </div>
    </header>
  );
}
