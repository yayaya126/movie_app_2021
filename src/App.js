import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Movie from "./components/Movie";
import Detail from "./routes/Detail";
import TopMenu from "./components/TopMenu";
//import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <TopMenu />
      {/* <Navigation /> */}
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/about" component={About} />
          <Route path="/movie" component={Movie} />
          <Route path="/movie/:Id" component={Detail} />
        </ Switch>
    </BrowserRouter>
  );
}

export default App;