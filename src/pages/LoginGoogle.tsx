import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import { Link } from "react-router-dom";

const LoginGoogle: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>This is the login page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Link style={{ textDecoration: "none" }} to="/home">
          <IonButton fill="solid">Login with google</IonButton>
        </Link>
      </IonContent>
    </IonPage>
  );
};

export default LoginGoogle;
