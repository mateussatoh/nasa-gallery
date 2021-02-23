import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
    height: "100vh",
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  image: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
  },
  return: {
    alignSelf: "flex-start",
    color: "white",
  },
}));
