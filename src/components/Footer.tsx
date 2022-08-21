import { BiMessageRoundedAdd } from "react-icons/bi";
import { RiAddBoxLine } from "react-icons/ri";

export function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <RiAddBoxLine className="font" />
        <p>ADD A GAME</p>
      </div>
      <div className="footer-mid">
        <p>Downloads</p>
      </div>
      <div className="footer-right">
        <div className="footer-right-friends">
          <span className="friends">Friends</span>
          <span className="chat">& Chat</span>
        </div>
        <BiMessageRoundedAdd className="font" />
      </div>
    </footer>
  );
}
