import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteInspiration,
  setCurrentInspiration,
} from "../redux/inspirationSlice";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const inspirationList = useSelector(
    (state) => state?.inspiration?.inspirationList
  );
  console.log(inspirationList, "inspirationList from HomePage.....");
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>HomePage</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonList>
          {inspirationList.map((item, index) => (
            <div key={index}>
              <div
                onClick={() =>
                  dispatch(setCurrentInspiration({ ...item, currentIndex: index }))
                }
              >
                <Link to="/details" key={index}>
                  <p>{item.title} </p>
                </Link>
              </div>

              <IonButton onClick={() => dispatch(deleteInspiration(index))}>
                Delete
              </IonButton>
            </div>
          ))}
        </IonList>

        <Link to="/add-inspiration">
          <IonButton fill="solid">Add Inspiration </IonButton>
        </Link>
      </IonContent>
    </IonPage>
  );
};

export default Home;
