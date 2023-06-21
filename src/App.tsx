import { Redirect, Route, Switch } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import LoginGoogle from "./pages/LoginGoogle";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import DetailPage from "./pages/DetailPage";
import AddInspiration from "./pages/AddInspiration";
import { useState } from "react";
setupIonicReact();

export interface IList {
  title: string;
  description: string;
}

export interface ISetInspirationProp {
  inspirationList: IList[];
  setInspirationList: React.Dispatch<React.SetStateAction<IList[]>>;
}

const App: React.FC = () => {
  const [inspirationList, setInspirationList] = useState<IList[]>([]);
  return (
    <IonApp>
      <IonReactRouter>
        <Switch>
          <Route path="/login" render={() => <LoginGoogle />} />

          <Route path="/home" render={() => <Home />} />

          <Route path="/details" render={() => <DetailPage />} />
          <Route path="/add-inspiration" render={() => <AddInspiration />} />

          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
