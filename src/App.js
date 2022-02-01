import React from "react";
import routes from "./routes/routes";
import Layout from "./layout/layout";
import "./App.css"
import { Route, Switch } from "react-router";


const App = () => {

  return (
    <>
      <Layout>
        <Switch>
          {routes.map((route, index) => {
            return <Route {...route} key={index} />;
          })}
        </Switch>
      </Layout>
    </>
  );

};

export default App;
