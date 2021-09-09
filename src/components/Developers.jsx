import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircleOutlined";
import LocationOnIcon from "@material-ui/icons/LocationOnOutlined";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import CodeIcon from "@material-ui/icons/Code";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusicOutlined";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Developers = () => {
  return (
    <div id="developer">
      <div className="avatar-card">
        <span>
          <img
            src="/dan-farrell-FnR2U1lXsBQ-unsplash.jpg"
            alt="Avatar"
            className="avatar"
          ></img>
        </span>

        <h1>
          <AccountCircleIcon style={{ fontSize: 32, color: "teal" }} />
          Caleb Boluwade
        </h1>

        <h1>
          <LocationOnIcon style={{ fontSize: 32, color: "teal" }} />
          Lagos, Nigeria
        </h1>
        <h1>
          <CodeIcon style={{ fontSize: 32, color: "teal" }} /> HTML, CSS,
          JavaScript & React
        </h1>
        <h1>
          <LibraryMusicIcon style={{ fontSize: 32, color: "teal" }} />
        </h1>
      </div>

      <h1>Social</h1>
      <span>
        <ul className="social-links">
          <Link to="www.twitter.com/lagosvibess">
            <li>
              <TwitterIcon
                className="twitter"
                style={{ fontSize: 28, padding: 5 }}
              />
            </li>
          </Link>
          <Link to="instagram.com/">
            <li>
              <InstagramIcon
                className="instagram"
                style={{ fontSize: 28, padding: 5 }}
              />
            </li>
          </Link>
          <Link to="/Github.com/CalebBoluwade">
            <li>
              <GitHubIcon className="github" style={{ fontSize: 34 }} />
            </li>
          </Link>
        </ul>
      </span>
      <span>
        <Link to="mailto:calebb@gmail.com">
          <button className="hire-me">Hire Me</button>
        </Link>
      </span>
      <div style={{ height: 200, position: "relative" }}></div>
      <Footer />
    </div>
  );
};

export default Developers;
