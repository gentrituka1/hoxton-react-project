import { AiOutlineSearch } from "react-icons/ai";
import { RiListSettingsFill } from "react-icons/ri";

export function LeftSection() {
  return (
    <section className="left-section">
      <div className="left-section-top">
        <div className="left-section-top-top">
          <AiOutlineSearch className="left-section-font" />
          <input
            name="search"
            type="text"
            onMouseEnter={(event) => {
              event.target.placeholder = "Search by Names";
            }}
            onMouseLeave={(event) => {
              event.target.placeholder = "";
            }}
          />
        </div>
        <RiListSettingsFill className="left-section-font" />
      </div>
      <div className="left-section-bottom">
        <div className="left-section-bottom-favorites">
          <h2>Favorites</h2>
        </div>
        <div className="left-section-bottom-uncategorized">
          <h2>Uncategorized</h2>
        </div>
      </div>
    </section>
  );
}
