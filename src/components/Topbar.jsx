import React from "react";
import Input from "@mui/joy/Input";
import SearchIcon from "@mui/icons-material/Search";
import EmailIcon from "@mui/icons-material/Email";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Avatar from "@mui/material/Avatar";
import "./topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <Input
        variant="outlined"
        sx={{
          backgroundColor: "#2a2a32",
          color: "#ffffff",
          "& input::placeholder": {
            color: "#9C9F9F",
          },
        }}
        startDecorator={<SearchIcon />}
        placeholder="Search"
      />
      <div className="topbar-menu">
        <EmailIcon className="icon" />
        <SettingsIcon className="icon" />
        <NotificationsActiveIcon className="icon" />
        <Avatar
          src={
            "https://d.newsweek.com/en/full/1610730/cul-ps-kermit.jpg?w=1280&f=5fc16e63abb1093b42f12c6d1eb2c34e"
          }
          sx={{ marginLeft: "1rem", width: "2.5rem", height: "2.5rem" }}
        />
      </div>
    </div>
  );
};

export default Topbar;
