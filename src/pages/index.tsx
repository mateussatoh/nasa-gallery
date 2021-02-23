import {
  Button,
  CssBaseline,
  Grid,
  Typography,
  Paper,
} from "@material-ui/core";
import { useStyles } from "../styles/home";

export default function Index() {
  const classes = useStyles();

  return (
    <>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={12} sm={6} md={3} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <img src="/nasa-logo.png" width="300px" />
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
}
