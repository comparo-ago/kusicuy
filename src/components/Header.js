import React, { useEffect } from "react";
import {
  AppBar,
  makeStyles,
  Toolbar,
  InputBase,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  Avatar,
} from "@material-ui/core";
import { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import Logo from "../images/kusiLogo.png";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom"


const Header = () => {
  
  const [tablet, setTablet] = useState(true);
  const [droweropen, setDroweropen] = useState(true);
  const classes = useStyle();

  useEffect(()=>{
    const responsiveness = ()=>
      window.innerWidth < 900 ? setTablet(true) : setTablet(false)
    responsiveness();
    window.addEventListener("resize", ()=>responsiveness())
  },[])

  const displayTablet = () => {
    const handleDrawerOpen = () => {
      setDroweropen(true);
    };
    const handleDrawerClose = () => {
      setDroweropen(false);
    };

    const headersData = ["My account", "Previous bookings", "Log Out"];

    const getDrowerChoices = () => {
      return headersData.map((data) => {
        return (
          <List>
            <ListItem> {data} </ListItem>
          </List>
        );
      });
    };
    return (
      <Toolbar className={classes.toolbar} >
        <IconButton
          {...{
            edge: "start",
            color: "primary",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
        <Drawer
          {...{
            anchor: "left",
            open: droweropen,
            onClose: handleDrawerClose,
          }}
        >
          <div> {getDrowerChoices()} </div>
        </Drawer>
        <Link to="/" >
        <img src={Logo} className={classes.logo} alt="logo"/>
        </Link>
        <div className={classes.right}>
        <Typography> sign in </Typography>
        <Avatar className={classes.avatar} />
      </div>
        
      </Toolbar>
    );
  };

  const displayDesktop = () => (
    <Toolbar className={classes.toolbar}>
      <Link to="/" >
      <img src={Logo} alt="Logo" className={classes.logo} />
      </Link>
      <div className={classes.center}>
        <InputBase
          fullWidth
          placeholder="search here.."
          inputProps={{ className: classes.input }}
        />
        <SearchIcon />
      </div>
      <div className={classes.right}>
        <Typography> sign in </Typography>
        <Avatar className={classes.avatar} />
      </div>
    </Toolbar>
  );
  return (
    <AppBar className={classes.root}>
      {tablet ? displayTablet() : displayDesktop()}
    </AppBar>
  );
};

const useStyle = makeStyles((theme) => ({
  root: {
    position: "sticky",
    top: 0,
    backgroundColor: "#fff",
    zIndex: 90,
    width: "100vw",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    height: "70px",
    margin: theme.spacing(0, 0, 0, 1),
    borderRadius: "10px",
  },
  center: {
    display: "flex",
    alignItems: "center",
    border: "1px solid lightgray",
    borderRadius: "999px",
    minWidth: "300px",
    padding: theme.spacing(1),
    margin: theme.spacing(1),
  },
  input: {
    fontSize: "1.2rem",
    padding: theme.spacing(1, 5, 1, 5),
  },
  right: {
    color: "#333",
    display: "flex",
    alignItems: "center",
    marginLeft: theme.spacing(2),
  },
  avatar: {
    marginLeft: theme.spacing(2),
  },
}));

export default Header;
