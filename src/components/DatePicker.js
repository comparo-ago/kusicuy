import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { Button, InputBase, makeStyles, Typography } from "@material-ui/core";
import { People } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

const selectionRange = {
  startDate: new Date(2022, 8, 17),
  endDate: new Date(2022, 8, 17),
  key: "selection",
};

const DatePicker = () => {
  const classes = useStyle();
  const handleSelect = () => {};
  const navigate = useNavigate();

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
        </div>
        <Button onClick={()=> navigate("/search")}  >Search Rooms</Button>
      </div>
    </div>
  );
};
const useStyle = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "13vh",
    left: "30vw",
    [theme.breakpoints.down("sm")]: {
      top: "16vh",
      left: "10vw",
    },
    inputSection:{
        display:"flex",
        flexDirection:"column",
        backgroundColor: "#fff",
        "& h5":{
            textAlign:"center",
        },
        "& button:hover":{
            backgroundColor:"rgba(255,103,31,0.4)",
            
        }
    },
    input:{

    }
  },
}));
export default DatePicker;
