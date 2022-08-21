import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";

export function Header() {
  return (
    <header>
      <div className="header-left">
        <IoMdArrowRoundBack className="header-font" />
        <IoMdArrowRoundForward className="header-font" />
        <h1>Store</h1>
        <h1>Library</h1>
        <h1>Community</h1>
        <h1>Profile</h1>
      </div>
      <div className="user">
        <img />
        <h1>User</h1>
      </div>
    </header>
  );
}
