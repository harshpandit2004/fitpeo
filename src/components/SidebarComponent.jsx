import React from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InsertChartRoundedIcon from "@mui/icons-material/InsertChartRounded";
import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import FitpeoIcon from "./fitpeo-icon.jpg";
import "./sidebar.css";

function Sidebar() {
  const [active, setActive] = React.useState(1);
  const buttons = [
    <HomeRoundedIcon />,
    <InsertChartRoundedIcon />,
    <ListAltRoundedIcon />,
    <AccountBalanceWalletRoundedIcon />,
    <LocalMallRoundedIcon />,
  ]; // Array of button ids

  return (
    <div className="sidebar-wrapper">
      <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        <img src={FitpeoIcon} alt="FitPeo" />
      </div>
      <div className="sidebar">
        {buttons.map((el, index) => (
          <div
            key={index}
            className={`element${active === index ? " active" : ""}`}
            onClick={() => setActive(index)}
          >
            {el}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
