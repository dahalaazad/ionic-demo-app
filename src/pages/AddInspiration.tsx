import {
  IonContent,
  IonPage,
  IonText,
  IonInput,
  IonButton,
  IonCheckbox,
  IonItem,
  IonLabel,
  IonTextarea,
} from "@ionic/react";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ISetInspirationProp } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { setInspiration } from "../redux/inspirationSlice";
import { usePhotoGallery } from "../hooks/photoGallery";

interface IFormInput {
  title: String;
  description: String;
}

const AddInspiration: React.FC = () => {
  const dispatch = useDispatch();

  const { takePhoto } = usePhotoGallery();

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const registerUser: SubmitHandler<IFormInput> = (data) => {
    console.log("creating a new user account with: ", data);
    reset({ title: "", description: "" });
    dispatch(setInspiration(data));
  };
  return (
    <IonPage>
      <IonContent>
        <div>
          <IonText color="muted">
            <h2>Add your Inspiration</h2>
          </IonText>
          <form onSubmit={handleSubmit(registerUser)}>
            <IonInput
              {...register("title", {
                required: true,
                validate: (value) => value.trim() !== "",
              })}
              aria-invalid={errors.title ? "true" : "false"}
              label="Title"
              labelPlacement="stacked"
            />
            {errors.title && <p role="alert">Title cannot be empty</p>}
            <IonTextarea
              {...register("description")}
              label="Description"
              labelPlacement="stacked"
            />

            <IonButton fill="solid" type="submit">
              ADD
            </IonButton>
          </form>
        </div>
      </IonContent>
      <IonButton onClick={takePhoto}>Open Camera</IonButton>
    </IonPage>
  );
};

export default AddInspiration;
