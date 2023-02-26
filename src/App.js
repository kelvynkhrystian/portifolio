import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Projectid from './pages/Projectid';
import NotFound from './pages/NotFound';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Switch location={location}>
        <Route exact path="/" component={ Home } />
        <Route exact path="/projects" component={ Projects } />
        <Route path="/projects/:id" component={ Projectid } />
        <Route path="/skills" component={ Skills } />
        <Route path="/profile" component={ Profile } />
        <Route path="*" component={ NotFound } />
      </Switch>
    </div>
  );
}

export default App;
