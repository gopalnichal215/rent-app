import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useState } from 'react';
import Login from './components/login';
import Register from './components/register';
import Navbar from './components/navbar';
import Rental from './components/rental';

function App() {

  localStorage.setItem("users", JSON.stringify([]));
  const [currentUser, setCurrentUser] = useState("");

  const handleCurrentUser = (user) => {
    setCurrentUser(user);
  }

  return (
    <>
      <Navbar currentUser={currentUser} />
      <div className="container">
        <Switch>
          <Route path="/login" render={props => <Login {...props} handleCurrentUser={handleCurrentUser} />}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/rentals" component={Rental}></Route>
          <Redirect from="/" exact to="/login"></Redirect>
        </Switch>
      </div>
    </>
  );
}

export default App;
