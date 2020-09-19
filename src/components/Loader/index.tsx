import React from "react";
import { CircularProgress, withStyles, Box } from "@material-ui/core";
import styles from "./styles";

interface IProps {
  classes: any;
}

const Loader = ({ classes }: IProps) => {
  return (
    <Box component="span" className={classes.loader}>
      <CircularProgress color="secondary" />
    </Box>
  );
};

export default withStyles(styles, { withTheme: true })(Loader);
