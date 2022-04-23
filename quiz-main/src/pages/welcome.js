import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  box: {
    backgroundColor: "#333",
    paddingTop: "10%",
    height: "100vh",
  },
  innerBox: {
    width: "30%",
    margin: "auto",
    backgroundColor: "#3d035d",
    height: "50vh",
    padding: "40px !important",
    borderRadius: "10px",
  },
  title: {
    color: "#fff",
    marginBottom: "40px !important",
  },
  list: {
    width: "100%",
    maxWidth: "450px !important",
    backgroundColor: "#3d035d",
    margin: "auto",
  },
  listItem: {
    borderRadius: "5px !important",
    textAlign: "center !important",
    backgroundColor: "#CD1C6C !important",
    color: "#fff !important",
    marginBottom: "10px !important",
  },
});

const Welcome = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box className={classes.box}>
            <Box className={classes.innerBox}>
              <Typography
                align="center"
                variant="h5"
                gutterBottom
                component="div"
                className={classes.title}
              >
                Choose What You Want To Audit
              </Typography>
              <List className={classes.list} component="nav">
                <ListItemButton className={classes.listItem}>
                  <ListItemText primary="Home Page Audit" />
                </ListItemButton>
                <ListItemButton className={classes.listItem}>
                  <ListItemText primary="Landing Page Audit" />
                </ListItemButton>
                <ListItemButton className={classes.listItem}>
                  <ListItemText primary="Product Page Audit" />
                </ListItemButton>
                <ListItemButton className={classes.listItem}>
                  <ListItemText primary="Cart Page Audit" />
                </ListItemButton>
              </List>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Welcome;
