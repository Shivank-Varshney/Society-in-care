import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Navbar from "./assets/component/Navbar";
import Home from "./assets/component/Home";
import Footer from "./assets/component/Footer";
import RegistrationForm from "./assets/component/RegistrationForm";
import LodgeGrievance from "./assets/component/LodgeGrievance";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return(
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Become-a-volunteer" component={RegistrationForm} />
        <Route exact path="/lodge-public-grievance" component={LodgeGrievance} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;