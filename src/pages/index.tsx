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
              <Typography variant="h6">
                O nitrogênio em nosso DNA, o cálcio em nossos dentes, o ferro em
                nosso sangue, o carbono em nossas tortas de maçã foi feito no
                interior das estrelas em colapso. Nós somos feitos da poeira de
                estrelas.
              </Typography>
              <Typography variant="h5"></Typography>
              <Typography variant="h5"> - Carl Sagan</Typography>
              <Button
                href="/gallery"
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                className={classes.submit}
              >
                se aventure na galeria
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={false} sm={6} md={9} className={classes.image} />
      </Grid>
    </>
  );
}
