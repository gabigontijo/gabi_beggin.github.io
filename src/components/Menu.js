import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import FilterIcon from "@mui/icons-material/Filter";


import "../style/Menu.css";

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);



  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const copyToClipboard = (element) => {
    var str = element.target.innerText;
    document.getElementById("inputCopy").style.display = "block";
    document.getElementById("inputCopy").value = str;
    var copyTextInput = document.getElementById("inputCopy");
    copyTextInput.select();
    document.execCommand("copy");
    document.getElementById("inputCopy").style.display = "none";
    alert("Text copied to clipboard");
  };

  return (
    <div className="menu_div">
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        className="menu_icon"
      >
        <MenuIcon sx={{ fontSize: "3rem", color: "#ecf0f1" }} />
      </IconButton>
      <Menu
        className="menu"
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            height: "55vh",
            width: "23dvw",
            backgroundColor: "#fffff",
          },
        }}
      >
        <section className="section_menu">
          <div>
            <h1 className="titles_menu">Menu</h1>
            <MenuItem className="item_menu">
              <ReceiptOutlinedIcon
                sx={{ fontSize: "2rem", color: "var(--title-color)" }}
              />
              <a
                href="https://gabigontijo.github.io/dev/"
                target="_blank"
                rel="noreferrer"
              >
                Home
              </a>
            </MenuItem>
            <MenuItem className="item_menu">
              <FilterIcon
                sx={{ fontSize: "2rem", color: "var(--title-color)" }}
              />
              <a
                href="https://gabigontijo.github.io"
                target="_blank"
                rel="noreferrer"
              >
                Exhibition
              </a>
            </MenuItem>
            <MenuItem className="item_menu">
              <FolderOpenIcon
                sx={{ fontSize: "2rem", color: "var(--title-color)" }}
              />
              <a
                href="https://github.com/gabigontijo?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                Repositories
              </a>
            </MenuItem>
          </div>
          <div>
            <h1 className="titles_menu">Get in touch</h1>
            <MenuItem className="item_menu" onClick={copyToClipboard}>
              <MailOutlineIcon
                sx={{ fontSize: "2rem", color: "var(--title-color)" }}
              />
              <p>dev.gabigontijo@gmail.com</p>
            </MenuItem>
            <MenuItem className="item_menu" onClick={copyToClipboard}>
              <PhoneIcon
                sx={{ fontSize: "2rem", color: "var(--title-color)" }}
              />
              <p>+351 915-204-569</p>
            </MenuItem>
            <MenuItem className="item_menu">
              <HomeIcon
                sx={{ fontSize: "2rem", color: "var(--title-color)" }}
              />
              <a
                href="https://www.google.com/maps/place/Braga/@41.5472536,-8.4814611,12z/data=!3m1!4b1!4m6!3m5!1s0xd24febc6cf5d867:0xbc5d054162d1e218!8m2!3d41.5454486!4d-8.426507!16zL20vMDI2eGdz?entry=ttu"
                target="_blank"
                rel="noreferrer"
              >
                Braga - Portugal
              </a>
            </MenuItem>
            <input
              id="inputCopy"
              type="text"
              style={{ display: "none" }}
            ></input>
          </div>
        </section>
      </Menu>
    </div>
  );
}
