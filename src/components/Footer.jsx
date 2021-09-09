import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/About">
          <li>About</li>
        </Link>
        <Link to="/Developers">
          <li>Developer</li>
        </Link>
      </ul>
      <span className="footgold" style={{ float: "center" }}>
        <em>Copyright &copy; 2021</em>
      </span>
    </div>
  );
};

export default Footer;
