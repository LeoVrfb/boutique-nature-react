import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Jardin from './components/pages/Jardin';
import Decoration from './components/pages/Decoration';
import SignUp from './components/pages/SignUp';
import Mineraux from './components/pages/Mineraux';
import Bijoux from './components/pages/Bijoux';
import Bois from './components/pages/Bois';
import Divers from './components/pages/Divers';
import Bougies from './components/pages/Bougies';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/jardin' component={Jardin} />
          <Route path='/decoration' component={Decoration} />
          <Route path='/mineraux' component={Mineraux} />
          <Route path='/bijoux' component={Bijoux} />
          <Route path='/bois' component={Bois} />
          <Route path='/divers' component={Divers} />
          <Route path='/bougies' component={Bougies} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
