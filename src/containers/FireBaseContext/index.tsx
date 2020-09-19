import React from "react";
import Firebase, { FirebaseService } from "../../services/firebase";

const FirebaseContext = React.createContext<FirebaseService | null>(
  new Firebase()
);

export type FireBaseMessage = {
  content?: string;
  author: string;
  createdAt: number;
};

export interface Messages extends FireBaseMessage {
  uid: string;
}

export default FirebaseContext;
