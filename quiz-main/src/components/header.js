import React from "react";
import Background from "../assets/imgs/header-bg.png";
import Logo from "../assets/imgs/logo.png";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    padding: "50px",
    textAlign: "center",
    backgroundImage: `url(${Background})`,
    backgroundSize: "100% 100%",
    position: "relative"
  },
  subHead: {
    color: "#fff",
    marginBottom: "20px !important",
    marginTop: "40px !important",
  },
  question: {
    color: "#fff",
    maxWidth: "60% !important",
    margin: "auto !important",
    fontWeight: "bold !important",
    paddingBottom: "90px",
  },
  loadingWrapper: {
    position: "absolute",
    bottom: "-10%",
    display: "block",
    margin: "auto",
    textAlign: "center",
    width: "94%",
  },
  circle: {
    backgroundColor: "#E9F5F7",
    borderRadius: "50%",
    border: "12px solid #E9F5F7",
    color: "#32CCA7 !important",
    width: "120px !important",
    height: "120px !important",
  },
  circleContent: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  progress: {
    margin: "0",
    fontWeight: "bold",
    fontSize: "30px",
  },
  divider: {
    display: "block",
    margin: "5px",
    backgroundColor: "#333",
    border: "2px solid #3333",
  },
  total: {
    margin: "0",
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <img src={Logo} alt="logo"/>
      <Typography
        align="center"
        variant="h6"
        gutterBottom
        component="div"
        className={classes.subHead}
      >
        Audit Your Landing Page
      </Typography>
      <Typography
        align="center"
        variant="h4"
        gutterBottom
        component="div"
        className={classes.question}
      >
        Is your page structured to address the following 7 key elements?
      </Typography>
      {/* Loading */}
      <Box className={classes.loadingWrapper}>
        <CircularProgress
          variant="determinate"
          value={50}
          className={classes.circle}
        />
        <Box className={classes.circleContent}>
          <div>
            <p className={classes.progress}>10%</p>
            <span className={classes.divider}></span>
            <p className={classes.total}>2/15</p>
          </div>
        </Box>
      </Box>
    </header>
  );
};

export default Header;
