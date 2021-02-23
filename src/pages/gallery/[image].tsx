import {
  Button,
  CssBaseline,
  Grid,
  Typography,
  Paper,
  Card,
} from "@material-ui/core";

import { ArrowBack } from "@material-ui/icons";

import Image from "next/image";

import { useStyles } from "../../styles/images";

const Index = ({ apod }) => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item>
        <Image
          src={apod.hdurl}
          quality={100}
          layout="fill"
          objectFit="contain"
          objectPosition="center "
        />
        <Button
          href="/gallery"
          variant="outlined"
          size="large"
          className={classes.return}
        >
          <ArrowBack />
        </Button>
      </Grid>
    </Grid>
  );
};

export async function getServerSideProps(context) {
  const apodDate = context.params.image;
  const API_KEY = process.env.API_KEY;
  const apodRes = await fetch(
    `https://api.nasa.gov/planetary/apod?date=${apodDate}&api_key=${API_KEY}`
  );
  const apod = await apodRes.json();

  return {
    props: {
      apod,
    },
  };
}

export default Index;
