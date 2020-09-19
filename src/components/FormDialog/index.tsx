import React, { SyntheticEvent, useContext } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import FirebaseContext, {
  FireBaseMessage,
  Messages,
} from "../../containers/FireBaseContext";
import routes from "../App/routes";
import { FormControlLabel, Switch } from "@material-ui/core";

/**
 *
 * @param open if true display the Dialog
 * @param onSave Callback when data are successfully saved
 */
export default function FormDialog({
  open = false,
  onSave,
}: {
  open?: boolean;
  onSave: (m: Messages) => void;
}) {
  const history = useHistory();
  const handleClose = () => {
    history.push(routes.index());
  };
  const firebase = useContext(FirebaseContext);

  // As a simple form, we use the uncontrolled type for our inputs
  const handleSave = (evt: SyntheticEvent) => {
    evt.preventDefault();
    const form = evt.currentTarget as HTMLFormElement;
    const body: any = {
      createdAt: Date.now(),
    };
    Array.prototype.forEach.call(form.elements, (element: HTMLInputElement) => {
      element.name &&
        (body[element.name] =
          element.type === "checkbox" ? element.checked : element.value);
    });

    const uid = uuidv4();
    firebase!
      .messages()
      .doc(uid)
      .set(body)
      .then(() => {
        onSave(body);
      });
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <form onSubmit={handleSave}>
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Entrez votre message et cliquez sur sauvegarder
          </DialogContentText>
          <FormControlLabel
            control={<Switch name="private" />}
            label="Message prive"
          />
          <TextField
            autoFocus
            margin="dense"
            id="author"
            name="author"
            label="Votre nom"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="content"
            name="content"
            label="Contenu"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Annuler
          </Button>
          <Button type="submit" color="primary">
            Sauvegarder
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
