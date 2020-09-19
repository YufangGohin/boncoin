import React, { ReactNode } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

interface IAppBarProps {
  children: ReactNode | string;
}
const AppNavBar = ({ children }: IAppBarProps) => (
  <AppBar position="static">
    <Toolbar>{children}</Toolbar>
  </AppBar>
);

export default AppNavBar;
