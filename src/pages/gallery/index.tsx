import {
  Container,
  AppBar,
  Button,
  Card,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";

import Link from "next/link";
import { GetStaticProps } from "next";

import { useStyles } from "../../styles/gallery";

interface NasaResponse {
  copyright?: string;
  date: string;
  explanation?: string;
  hdurl?: string;
  media_type?: string;
  service_version?: string;
  title?: string;
  url: string;
}

export default function Gallery({ apodImagesJson }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Button
            href="/"
            variant="text"
            size="small"
            className={classes.return}
          >
            <ArrowBack />
          </Button>
          <Typography variant="h6" color="inherit" noWrap>
            NASA APOD Gallery
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container className={classes.cardGrid}>
          <Grid container spacing={2}>
            {apodImagesJson.map((apod: NasaResponse, index) => (
              <Grid key={index} item xs={12} sm={6} md={6}>
                <Card className={classes.card}>
                  <Link href={`/gallery/${apod.date}`}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={apod.url}
                      title="Image title"
                    />
                  </Link>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </footer>
    </div>
  );
}

const SECONDS_IN_DAY = 60 * 60 * 24;

export const getStaticProps: GetStaticProps = async () => {
  const API_KEY = process.env.API_KEY;
  const apodRes = await fetch(
    `https://api.nasa.gov/planetary/apod?start_date=2020-10-01&thumbs=true&api_key=${API_KEY}`
  );

  const apodJson = await apodRes.json();
  const apodImagesJson = await apodJson.filter(
    (apod: NasaResponse) => apod.media_type !== "video"
  );
  return {
    props: {
      apodImagesJson,
    },
    revalidate: SECONDS_IN_DAY,
  };
};
