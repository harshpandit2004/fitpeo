import React from "react";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import EmojiFoodBeverageRoundedIcon from "@mui/icons-material/EmojiFoodBeverageRounded";
import "./navigation.css";

const NavigationItem = ({ icon: Icon, color, text, textcolor }) => {
  return (
    <div className="navigation-item">
      <div className="icon-wrapper" style={{ background: color }}>
        <Icon sx={{ fontSize: "2rem", color: textcolor }} />
      </div>
      <h2 className="item-text">{text}</h2>
      <ArrowForwardIosRoundedIcon />
    </div>
  );
};

function Navigation() {
  return (
    <div className="navigation">
      <NavigationItem
        icon={FlagCircleIcon}
        color="#5F3237"
        textcolor="#EF6C37"
        text="Goals"
      />

      <NavigationItem
        icon={LunchDiningIcon}
        color="#2A3367"
        textcolor="#47559E"
        text="Popular Dishes"
      />
      <NavigationItem
        icon={EmojiFoodBeverageRoundedIcon}
        color="#214960"
        textcolor="#3389B5"
        text="Menus"
      />
    </div>
  );
}

export default Navigation;
