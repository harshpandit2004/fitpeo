import React from "react";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import LocalPizzaRoundedIcon from "@mui/icons-material/LocalPizzaRounded";
import EmojiFoodBeverageRoundedIcon from "@mui/icons-material/EmojiFoodBeverageRounded";
import "./navigation.css";

const NavigationItem = ({ icon: Icon, color, text }) => {
  return (
    <div className="navigation-item">
      <div className="icon-wrapper" style={{ background: color }}>
        <Icon sx={{ fontSize: "2rem" }} />
      </div>
      <h2 className="item-text">{text}</h2>
      <ArrowForwardIosRoundedIcon />
    </div>
  );
};

function Navigation() {
  return (
    <div className="navigation">
      <NavigationItem icon={FlagCircleIcon} color="#5F3237" text="Goals" />
      <NavigationItem
        icon={LocalPizzaRoundedIcon}
        color="#2A3367"
        text="Popular Dishes"
      />
      <NavigationItem
        icon={EmojiFoodBeverageRoundedIcon}
        color="#214960"
        text="Menus"
      />
    </div>
  );
}

export default Navigation;
