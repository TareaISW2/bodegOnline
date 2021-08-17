import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Signup } from "../Signup";
import { PantallaInicio } from "../PantallaInicio";
import { Pricing } from "../Pricing";
import { Login } from "../Login";
import { DashBoard } from "../DashBoard";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={PantallaInicio} />
          <PrivateRoute exact path="/DashBoard" component={DashBoard} />

          <Redirect to="/home" />
        </Switch>
      </div>
    </Router>
  );
};
