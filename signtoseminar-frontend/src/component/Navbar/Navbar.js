import React from 'react';
import './Navbar.css';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import firebase from '../../firebase';
import PersonIcon from '@material-ui/icons/Person';

function Navbar() {
  const user = useSelector((state) => state.user.user);
  const history = useHistory();

  return (
    <div className='topnav'>
      <div className='topnav__left'>
        <Link to='/'> Home </Link>
        <Link to='/seminar'> Seminarie </Link>
        <Link to='/about'> About </Link>
        {/* <a href="seminarie.html">Seminarie</a> */}
      </div>
      <div className='topnav__right'>
        {user && (
          <Link to='/user/seminar'>
            <div className='topnav__user'>
              <PersonIcon />
              <h4>{user.firstName}</h4>
            </div>
          </Link>
        )}
        {!user ? (
          <Link to='/login'>Login</Link>
        ) : (
          <Link
            onClick={() => {
              history.push('/');
              firebase.auth().signOut();
            }}
          >
            Sign Out
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
