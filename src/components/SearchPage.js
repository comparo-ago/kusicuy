import { Chip, makeStyles, Slider, Typography } from "@material-ui/core";
import { HighlightOffTwoTone } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import mockData, { chips } from "../mockData";
import Results from "./Results";
import { useSelector } from "react-redux/es/exports";
import { selectStart } from "../features/startSlice";
import { selectEnd } from "../features/endSlice";

const SearchPage = () => {
  const classes = useStyle();
  const [value, setValue] = useState(400);
  const start = useSelector(selectStart);
  const end = useSelector(selectEnd);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h5" gutterBottom>
        Available Rooms
      </Typography>
      <div className={classes.chips}>
        {chips.map(({ key, label }) => {
          let icons = <HighlightOffTwoTone />;
          return (
            <Chip
              label={label}
              key={key}
              icon={icons}
              className={classes.chip}
            />
          );
        })}
      </div>
      <div className={classes.selector}>
        <Typography gutterBottom> Prices</Typography>
        <Slider
          value={value}
          onChange={handleChange}
          aria-labelledby="continuous-slider"
          min={500}
          max={100000}
          valueLabelDisplay="auto"
          color="secondary"
        />
      </div>
      {mockData
        .filter((data) => data.cat === "room")
        .filter((data) => data.price < value)
        .filter(
          (data) => end < data.notAvailableStart || start > data.notAvailableEnd
        )
        .map(({ src, title, description, price, stock }, index) => (
          <Results
            title={title}
            key={index}
            src={src}
            description={description}
            price={price}
            stock={stock}
          />
        ))}
    </div>
  );
};
const useStyle = makeStyles((theme) => ({
  root: {},
  chips: {
    padding: theme.spacing(1),
  },
  chip: {
    margin: theme.spacing(2),
  },
  selector: {
    width: "300px",
    margin: theme.spacing(3),
  },
}));

export default SearchPage;
