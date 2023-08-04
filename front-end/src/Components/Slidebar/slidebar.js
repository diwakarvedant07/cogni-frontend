import React from "react";
import { Link } from "react-router-dom";
import { FaTags } from "react-icons/fa";
import classes from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <ul className={classes.sidebarList}>
        <li>
          <Link to="/ticket" className={classes.sidebarLink}>
            <FaTags className={classes.icon} />
            Tickets
          </Link>
        </li>
        <li>
          <Link to="/leaveMgmt" className={classes.sidebarLink}>
            <FaTags className={classes.icon} />
            Leave Application
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
