import "./Topbar.scss";
import { Person, Mail } from "@mui/icons-material";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"Topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#Eden" className="logo">
            Eden.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+234 70 376 162 91</span>

            <Mail className="icon-left" />
            <span>orisakwepeter@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
