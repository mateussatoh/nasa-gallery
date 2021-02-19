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
import { makeStyles } from "@material-ui/core";

import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  return: {
    color: "white",
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(3),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    cursor: "pointer",
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Gallery({ apodImagesJson }) {
  const classes = useStyles();

  return (
    <>
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
            {apodImagesJson.map((apod) => (
              <Grid item key={apod} xs={12} sm={6} md={6}>
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
      {/* Footer */}
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
      {/* End footer */}
    </>
  );
}

const secondsInDay = 60 * 60 * 24;

export async function getStaticProps() {
  const API_KEY = process.env.API_KEY;
  const apodRes = await fetch(
    `https://api.nasa.gov/planetary/apod?start_date=2020-10-01&thumbs=true&api_key=${API_KEY}`
  );
  const apodJson = await apodRes.json();

  const apodImagesJson = await apodJson.filter(
    (apod) => apod.media_type !== "video"
  );

  return {
    props: {
      apodImagesJson,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: secondsInDay, // In seconds
  };
}
