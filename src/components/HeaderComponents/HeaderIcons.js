import React from "react";
import PropTypes from "prop-types";

import "./Header.css";

const HeaderIcons = props => {
  return (
    <div className="header-icons">
      <img src="images/discover.png" alt="Discover" />
      <img src="images/heart-off.png" alt="Following data" />
      <img src="images/user.png" alt="User settings" />
      <button
        className="logout-btn"
        name="logout-btn"
        onClick={props.handleClick}
      >
        Log Out
      </button>
    </div>
  );
};

HeaderIcons.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default HeaderIcons;
