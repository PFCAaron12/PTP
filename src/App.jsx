import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Signup, Login, Home, HipHop, RBSoul, Pop, Other, TestPage } from './pages';
import HH2 from './pages/HH2'
import Dashboard from './Dashboard/Dashboard';
import { Navbar } from './components/Navbar';
import Chat from './Chat/Chat';
import { UseAuth } from './hooks/useAuth';


export default function App() {
  return (
    <div className="App">
     
     <UseAuth>
      <Router>
      <Navbar />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Signup" exact component={Signup} />
            <Route path="/Dashboard" exact component={Dashboard} />
            <Route path="/Chat" exact component={Chat} />
            <Route path="/RBSoul" exact component={RBSoul} />
            <Route path="/HipHop" exact component={HH2} />
            <Route path="/Other" exact component={Other} />
            <Route path="/Login" exact component={Login} />
            <Route path="/Pop" exact component={Pop} />
            <Route path="/TestPage" exact component={TestPage} />
        </Switch>
      </Router>
      </UseAuth>
     
    </div>
  );
}