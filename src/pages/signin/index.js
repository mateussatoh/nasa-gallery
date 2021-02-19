import Link from "next/link";

import useStyles from "./styles";
import {
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Paper,
  Box,
  Grid,
  Typography,
} from "@material-ui/core";

import { ArrowBack } from "@material-ui/icons";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Made by "}
      <Link color="inherit" href="https://github.com/mateussatoh">
        Mateus Satoh.
      </Link>
    </Typography>
  );
};

const Signin = () => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Button
            href="/"
            variant="outlined"
            color="primary"
            size="small"
            className={classes.return}
          >
            <ArrowBack />
          </Button>

          <img src="/nasa-logo.png" width="300px" objectfit="cover" />
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Mantenha-me conectado"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Entrar
            </Button>
            <Grid container>
              <Grid item xs>
                <Typography variant="body2">
                  <Link href="/fotgot_password">Esqueceu sua senha?</Link>
                </Typography>
              </Grid>
              <Grid item>
                <Link href="/signup">Não tenho uma conta.</Link>
              </Grid>
            </Grid>
            <Box mt={15}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Signin;
