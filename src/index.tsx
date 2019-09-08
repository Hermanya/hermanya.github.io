import React from "react";
import ReactDOM from "react-dom";
import * as _ from "styled-components/cssprop";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import blogRoutes from "./__generated__/blogRoutes";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {blogRoutes}
        <Route path="/about" component={LandingPage} />
        <Redirect exact from="/" to="/about/me" />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
