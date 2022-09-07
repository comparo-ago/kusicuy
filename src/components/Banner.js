import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import backImage from "../images/forest-covered-trees-dry-leaves-sunlight-autumn.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <div className={classes.info}>
        <Typography variant="h4">Plan your getaway!</Typography>
        <Link to="/search">
          <Button variant="contained">Check our rooms</Button>
        </Link>
      </div>
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  root: {
    height: "100hv",
    position: "relative",
    backgroundImage: `url(${backImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  info: {
    backgroundColor: "#000",
    color: "#fff",
    width: "350px",
    padding: theme.spacing(12),
    "& h2": {
      marginBottom: theme.spacing(2),
    },
    "& button": {
      backgroundColor: "rgba(235,103,31,0.4)",
      color: "#fff",
      textTransform: "inherit",
      fontSize: "1.1rem",
      fontWeight: "bold",
    },
    "& button:hover": {
      backgroundColor: "#fff",
      color: "rgba(255,103,31,0.4)",
    },
  },
}));

export default Banner;
