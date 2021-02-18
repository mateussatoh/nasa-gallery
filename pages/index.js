import Link from "next/link";

import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

import useStyles from "./styles";

export default function Album() {
  const classes = useStyles();

  return (
    <>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={12} sm={6} md={3} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <img src="/nasa-logo.png" width="300px" objectFit="cover" />
            <div className={classes.hero}>
              <Typography variant="h4">As melhores imagens</Typography>
              <Button
                href="/signup"
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                className={classes.submit}
              >
                Fazer login
              </Button>
              <Button
                href="/signup"
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                className={classes.submit}
              >
                Entrar como convidado
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={false} sm={6} md={9} className={classes.image} />
      </Grid>
    </>
  );
}
