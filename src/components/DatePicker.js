import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { Button, InputBase, makeStyles, Typography } from "@material-ui/core";
import { People } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectStart, setStart } from "../features/startSlice";
import { selectEnd, setEnd } from "../features/endSlice";

const DatePicker = () => {
  const classes = useStyle();
  const navigate = useNavigate();
  const start = useSelector(selectStart);
  const end = useSelector(selectEnd);
  const dispatch = useDispatch();

  const selectionRange = {
    startDate: start,
    endDate: end,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    dispatch(setStart(ranges.selection.startDate.getTime()));
    dispatch(setEnd(ranges.selection.endDate.getTime()));
  };

  return (
    <div className={classes.root}>
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <div className={classes.inputSection}>
        <Typography variant="h5">Number of guests</Typography>
        <div className={classes.people}>
          <InputBase
            placeholder="2 pax"
            inputProps={{ className: classes.input }}
          />
          <People />
          <Button onClick={() => navigate("/search")}>Search Rooms</Button>
        </div>
      </div>
    </div>
  );
};
const useStyle = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "16vh",
    left: "20vw",
    zIndex: "50",
    [theme.breakpoints.down("sm")]: {
      top: "16vh",
      left: 0,
    },
    inputSection: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#fff",
      height: "40px",
    },
    "& button:hover": {
      backgroundColor: "rgba(255,103,31,0.4)",
      color: "#fff",
    },
    "& h5": {
      textAlign: "center",
      backgroundColor: "#fff",
    },
    people: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      color: "smokewhite",
    },
    input: {
      width: "7vw",
      border: "3px solid #ccc",
      margin: theme.spacing(0, 1, 1, 0),
      padding: theme.spacing(1, 0, 1, 3),
      backgroundColor: "#fff",
    },
  },
}));
export default DatePicker;
