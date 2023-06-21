import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonBackButton,
  IonInput,
  IonTextarea,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import { Link } from "react-router-dom";
import { caretBack } from "ionicons/icons";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { updateInspiration,setCurrentInspiration } from "../redux/inspirationSlice";

const DetailPage = () => {
  const dispatch = useDispatch();

  const currentInspiration = useSelector(
    (state) => state?.inspiration?.currentInspiration
  );
  const inspirationList = useSelector(
    (state) => state?.inspiration?.inspirationList
  );
  const currentIndex = currentInspiration?.currentIndex;

  console.log("currentInspiration", currentInspiration);

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const editInspiration = (data) => {
    dispatch(updateInspiration({ currentIndex, ...data }));
    dispatch(setCurrentInspiration(data));
  };
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inspiration Details Page</IonTitle>
          <IonButtons slot="start">
            <IonBackButton text="Previous" icon={caretBack}></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <p>{currentInspiration.title} </p>
        <p>{currentInspiration.description}</p>
      </IonContent>
      <form onSubmit={handleSubmit(editInspiration)}>
        <IonInput
          {...register("title", {
            required: true,
            validate: (value) => value.trim() !== "",
          })}
          aria-invalid={errors.title ? "true" : "false"}
          label="Title"
          labelPlacement="stacked"
          value={currentInspiration.title}
        />
        {errors.title && <p role="alert">Title cannot be empty</p>}
        <IonTextarea
          {...register("description")}
          label="Description"
          labelPlacement="stacked"
          value={currentInspiration.description}
        />

        <IonButton fill="solid" type="submit">
          Update
        </IonButton>
      </form>
    </>
  );
};

export default DetailPage;
