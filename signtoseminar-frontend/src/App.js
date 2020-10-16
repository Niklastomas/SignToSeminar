import React, { useEffect } from 'react';
import './App.css';
import Home from './component/Home/Home';
import About from './component/About/About';
import Login from './component/Login/Login';
import Navbar from './component/Navbar/Navbar';
import Registration from './component/Registration/Registration';
import SeminarList from './component/Seminar/SeminarList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SeminarInfo from './component/Seminar/SeminarInfo';
import firebase from './firebase';
import { setUser } from './userSlice';
import UserSeminar from './component/User/UserSeminar';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        fetch(`https://localhost:44320/api/user/${user.email}`)
          .then((response) => response.json())
          .then((json) => {
            dispatch(setUser(json));
          })
          .catch((error) => console.log(error));
      } else {
        dispatch(setUser(null));
      }
    });
  }, []);

  return (
    <div className='app'>
      <Router>
        <Navbar />

        <Switch>
          <Route path='/seminar/info/:id'>
            <SeminarInfo />
          </Route>

          <Route path='/about'>
            <About />
          </Route>
          <Route path='/seminar'>
            <SeminarList
              title={'Seminars'}
              url={'https://localhost:44320/api/seminar'}
            />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Registration />
          </Route>
          <Route path='/user/seminar'>
            <UserSeminar />
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
