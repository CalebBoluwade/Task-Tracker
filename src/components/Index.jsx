import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "react-router-dom";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";

const Index = () => {
  let d = new Date();
  return (
    <div className="homebg">
      <h1>Monday</h1>
      <h1>
        <CalendarTodayIcon />
        {d.getDate()} / {d.getMonth()} / {d.getFullYear()}
      </h1>

      <div className="frontpage">
        <span></span>
        <h1>Welcome, User</h1>

        <span>
          <Link to="/Tracker">
            <button className="home-btn">
              Click to Proceed <ArrowForwardIcon className="arrow" />
            </button>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Index;
