import React, { Suspense } from "react";
import {
  ThemeProvider,
  CssBaseline,
  createMuiTheme,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppBar from "../AppBar";
import routes from "./routes";
import Loader from "../Loader";
import IndexPage from "../../pages/Index";

const theme = createMuiTheme();
const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
}));

const App = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={<Loader />}>
        <AppBar>
          <Typography variant="h6">BonCoin - Test</Typography>
        </AppBar>
        <Container className={classes.offset}>
          <Router>
            <Switch>
              <Route path={routes.index()} component={IndexPage}></Route>
            </Switch>
          </Router>
        </Container>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
