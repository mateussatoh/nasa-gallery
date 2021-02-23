import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
    height: "100%",
  },
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
