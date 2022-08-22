import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <div className="header-left">
        <IoMdArrowRoundBack className="header-font" />
        <IoMdArrowRoundForward className="header-font" />
        <h1>Store</h1>
        <Link className="links" to={"/library"}><h1>Library</h1></Link>
        <h1>Community</h1>
      </div>
      <div className="user">
        <img />
        <h1>Profile</h1>
      </div>
    </header>
  );
}
