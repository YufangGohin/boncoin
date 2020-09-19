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

interface IMessageProps extends FireBaseMessage {
  children: ReactNode | string;
}

export default ({ children, author, createdAt }: IMessageProps) => (
  <Card>
    <CardHeader
      avatar={<Avatar aria-label="recipe">{author[0].toUpperCase()}</Avatar>}
      title={author}
      subheader={new Date(createdAt).toISOString()}
    />
    <CardMedia
      component="img"
      alt="Kitten"
      height="140"
      image="https://placekitten.com/408/140"
      title="Random Kitten"
    />
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
        {children}
      </Typography>
    </CardContent>
  </Card>
);
