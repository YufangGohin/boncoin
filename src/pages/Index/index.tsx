import React, { useContext, useEffect, useState } from "react";
import { Fab, Grid } from "@material-ui/core";
import { useRouteMatch } from "react-router-dom";
import routes from "../../components/App/routes";
import Message from "../../components/Message";
import FormDialog from "../../components/FormDialog";
import AddIcon from "@material-ui/icons/Add";
import { useHistory } from "react-router-dom";

import FirebaseContext, {
  FireBaseMessage,
  Messages,
} from "../../containers/FireBaseContext";

const IndexPage = () => {
  const openModal = useRouteMatch(routes.add());
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Messages[]>([]);
  const firebase = useContext(FirebaseContext);
  const fetchMessages = () =>
    firebase!
      .messages()
      .get()
      .then((docs: any) => {
        const datas: Messages[] = [];
        docs.forEach((doc: any) =>
          datas.push({ ...(doc.data() as FireBaseMessage), uid: doc.id })
        );
        setLoading(false);
        setMessages(datas);
      });

  useEffect(() => {
    fetchMessages();
  }, []);

  const history = useHistory();
  return loading ? (
    <span>loading</span>
  ) : (
    <>
      <Fab color="secondary" onClick={() => history.push(routes.add())}>
        <AddIcon />
      </Fab>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={8}
      >
        {messages.map(({ author, createdAt, content, uid }) => (
          <Grid item xs={12} lg={12} sm={12} key={uid}>
            <Message author={author} createdAt={createdAt}>
              {content}
            </Message>
          </Grid>
        ))}
      </Grid>

      <FormDialog
        open={!!openModal}
        onSave={(message) => setMessages(messages.concat(message))}
      />
    </>
  );
};
export default IndexPage;
