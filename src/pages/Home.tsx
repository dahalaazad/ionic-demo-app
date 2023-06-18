import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>HomePage</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Link to="/details">
          <IonButton fill="solid">See further details</IonButton>
        </Link>

        <Link to="/add-inspiration">
          <IonButton fill="solid">Add Inspiration </IonButton>
        </Link>
      </IonContent>
    </IonPage>
  );
};

export default Home;
