import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './component/Home/Home';
import About from './component/About/About';
import Login from './component/Login/Login';
import Navbar from './component/Navbar/Navbar';
import Registration from './component/Registration/Registration';
import SeminarList from './component/Seminar/SeminarList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SeminarInfo from './component/Seminar/SeminarInfo';
import firebase from './firebase';

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);

  return (
    <div className='app'>
      <h1>{user.email}</h1>
      <Router>
        <Navbar />

        <Switch>
          <Route path='/seminar/info/:id'>
            <SeminarInfo
            // title='Matte'
            // location='Goterborg'
            // date='2020-12-23:12:00'
            />
          </Route>

          <Route path='/about'>
            <About />
          </Route>
          <Route path='/seminar'>
            <SeminarList />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Registration />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
