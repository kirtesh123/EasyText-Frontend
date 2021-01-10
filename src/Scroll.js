
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "./Scroll.css"
import GitHubIcon from '@material-ui/icons/GitHub';
 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function ButtonAppBar( props ) {
  const { username } = props;
  const classes = useStyles();

  return (
    <div className="scroll">
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          EasyText | Hello {username}!
          </Typography>
          <Button  target="_blank" href="https://github.com/kirtesh123/EasyText-Backend" color="inherit" variant="outlined">Backend<GitHubIcon fontSize="small" /></Button>
          <Button  target="_blank" href="https://github.com/kirtesh123/EasyText-Frontend" color="inherit" variant="outlined">Frontend<GitHubIcon fontSize="small" /></Button>
        </Toolbar>
      </AppBar>
    </div>
    </div>
  );
}
