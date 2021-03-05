import React from "react";

// material ui
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2rem",
    textAlign: "center"
  }
}));

const footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Typography variant="caption" component="p">
        &copy; Devotnes blog - 2020
      </Typography>
    </footer>
  );
};

export default footer;
