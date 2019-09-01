import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import blogRoutes from "./__generated__/blogRoutes";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Redirect from="/" to="/about/me" />
      <Switch>
        {blogRoutes}
        <Route path="/about" component={LandingPage} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
