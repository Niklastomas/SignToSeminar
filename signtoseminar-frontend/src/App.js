import React from "react";
import "./App.css";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Login from "./component/Login/Login";
import Navbar from "./component/Navbar/Navbar";
import Registration from "./component/Registration/Registration";
import SeminarList from "./component/Seminar/SeminarList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SeminarInfo from "./component/Seminar/SeminarInfo";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/seminar/info">
            <SeminarInfo />
          </Route>

          <Route path="/about">
            <About />
          </Route>
          <Route path="/seminar">
            <SeminarList />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
