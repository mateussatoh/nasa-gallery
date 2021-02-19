import {
  Button,
  CssBaseline,
  Grid,
  Typography,
  Paper,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  image: {
    backgroundImage: "url(purple_nebula.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  hero: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(4),
  },
  submit: {
    margin: theme.spacing(8, 0, 0),
  },
  paper: {
    margin: theme.spacing(2, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const Index = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={12} sm={6} md={3} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <img src="/nasa-logo.png" width="300px" objectfit="cover" />
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
                href="/gallery"
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
};

export default Index;
