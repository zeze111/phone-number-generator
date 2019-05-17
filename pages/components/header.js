import Link from "next/link";
import "../styles/index.css";

const Header = () => (
  <header>
    <ul className="nav">
      <li className="nav-link">
        <a className="nav-list" href=""> TELECOMMS</a>
      </li>
      <li className="nav-link2 profile">
        <a className="nav-list3" href=""> Admin</a>
      </li>
    </ul>
  </header>
);

export default Header;
