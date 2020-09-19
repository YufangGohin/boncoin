import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React, { ReactNode } from "react";
import { FireBaseMessage } from "../../containers/FireBaseContext";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { red, green } from "@material-ui/core/colors";

interface IMessageProps extends FireBaseMessage {
  children: ReactNode | string;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    Red: {
      color: theme.palette.getContrastText(red[400]),
      backgroundColor: red[400],
    },
    Green: {
      color: theme.palette.getContrastText(green[400]),
      backgroundColor: green[400],
    },
  })
);

export default ({ children, author, createdAt, isPrivate }: IMessageProps) => {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            className={isPrivate ? classes.Red : classes.Green}
            aria-label="recipe"
          >
            {author[0].toUpperCase()}
          </Avatar>
        }
        title={author}
        subheader={new Date(createdAt).toISOString()}
      />
      <CardMedia
        component="img"
        alt="Kitten"
        height="140"
        image="https://placekitten.com/408/407"
        title="Random Kitten"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {children}
        </Typography>
      </CardContent>
    </Card>
  );
};
