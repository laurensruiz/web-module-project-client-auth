import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';

import Login from './components/Login';
import AddFriend from './components/AddFriend';
import FriendsList from './components/FriendsList';
import Logout from './components/Logout';

import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h2>Friends Database</h2>
          <Link className='link' to="/login">Login</Link>
          <Link className='link' to="/friends">Friends List</Link>
          <Link className='link' to="/friends/add">Add Friend</Link>
          <Link className='link' to="/logout">Logout</Link>
        </header>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route exact path="/login">
          <Redirect to ="/" />
        </Route>
        <PrivateRoute exact path="/friends" component={FriendsList} />
        <PrivateRoute exact path="/friends/add" component={AddFriend} />
        <PrivateRoute exact path="/logout" component={Logout} />

        {/* How you would normally do it without PrivateRoute:  but the buttons will click even if there is no token*/}
        {/* <Route exact path="/friends/add">
          <AddFriend />
        </Route>
        <Route exact path="/logout">
          <Logout />
        </Route> */}
      </div>
    </Router>
  );
}

export default App;
