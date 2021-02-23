import Link from "next/link";

import {
  Button,
  CssBaseline,
  TextField,
  Paper,
  Box,
  Grid,
  Typography,
} from "@material-ui/core";

import { ArrowBack } from "@material-ui/icons";

import { useStyles } from "../../styles/signup";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Made by "}
      <Link href="https://github.com/mateussatoh">Mateus Satoh.</Link>
    </Typography>
  );
}

const Signup = () => {
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
          <img src="/nasa-logo.png" width="300px" />
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Seu melhor e-mail"
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
              label="Crie uma senha"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Repita sua senha"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Criar conta
            </Button>
            <Grid container>
              <Grid item xs align="center">
                <Link href="/signin">Já tenho uma conta.</Link>
              </Grid>
            </Grid>
            <Box mt={10}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Signup;
