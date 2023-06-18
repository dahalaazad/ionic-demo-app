import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonBackButton,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import { Link } from "react-router-dom";
import { caretBack } from "ionicons/icons";

const DetailPage: React.FC = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Details Page</IonTitle>
          <IonButtons slot="start">
            <IonBackButton text="Previous" icon={caretBack}></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <p>List out all the details</p>
      </IonContent>
    </>
  );
};

export default DetailPage;
