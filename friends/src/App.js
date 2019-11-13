import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import { getToken } from './utils/axiosWithAuth';
import Login from './components/Login';
import Friend from './components/Friend';
import PrivateRoute from './components/PrivateRoute';
import AddFriend from './components/AddFriend';
import './App.css';



function App() {
  const signedIn = getToken();
  return (
    <div className='App'>
      <nav>
        <Link to='/'>Home</Link>
        {!signedIn && <Link to='/login'>Login</Link>}
        {signedIn && <Link to='/friends'>My Friends</Link>}
      </nav>
      <Route exact path='/Login' component={Login} />
      <PrivateRoute exact path='/friends' component={Friend} />
      <PrivateRoute exact path='/addfriend' component={AddFriend} />
    </div>
  );
}

export default withRouter(App);
