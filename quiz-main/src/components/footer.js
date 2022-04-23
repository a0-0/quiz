import React from "react";
import Background from "../assets/imgs/share-bg.png";
import LogoBackground from "../assets/imgs/footer-bg.png";
import Logo from "../assets/imgs/logo.png";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  footer: {
    padding: "100px 0px 0px 0px",
    textAlign: "center",
    backgroundImage: `url(${Background})`,
    backgroundSize: "100% 100%",
  },
  heartIcon: {
    color: "#CD1C6C",
  },
  head: {
    fontSize: "18px !important",
    fontWeight: "semi-bold !important",
    color: "#fff",
    marginBottom: "20px",
    marginTop: "10px",
    width: "40% !important",
    margin: "auto !important",
  },
  inputDiv: {
    width: "100%",
    justifyContent: "center",
    marginTop: "20px",
  },
  textField: {
    backgroundColor: "rgba(255,255,255, .5)",
    borderRadius: "5px",
    justifyContent: "center",
    marginRight: "10px !important",
    marginLeft: "10px !important",
    width: "300px",
  },
  shareBtn: {
    backgroundColor: "#CD1C6C !important",
    boxShadow: "none !important",
    height: "2.8em",
  },
  logoWrapper: {
    padding: "100px 0px",
    textAlign: "center",
    backgroundImage: `url(${LogoBackground})`,
    backgroundSize: "100% 100%",
    marginTop: "5%",
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <FavoriteBorderIcon fontSize="large" className={classes.heartIcon} />
      <Typography
        align="center"
        gutterBottom
        component="div"
        className={classes.head}
      >
        Know someone who could do with a free CRO audit? Enter their email below
        to share this tool with them
      </Typography>
      <div className="input-wrapper">
        <div className={classes.inputDiv}>
          <TextField
            className={classes.textField}
            hiddenLabel
            id="filled-hidden-label-small"
            size="small"
          />
          <Button variant="contained" className={classes.shareBtn}>
            Share
          </Button>
        </div>
      </div>
      <div className={classes.logoWrapper}>
        <img src={Logo} alt="logo" />
      </div>
    </footer>
  );
};

export default Footer;
