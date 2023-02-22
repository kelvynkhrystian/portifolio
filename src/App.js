import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Profile from './pages/Profile'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Projectid from './pages/Projectid'
import NotFound from './pages/NotFound';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/projects" component={ Projects } />
      <Route path="/projects/:id" component={ Projectid } />
      <Route path="/skills" component={ Skills } />
      <Route path="/profile" component={ Profile } />
      <Route path="*" component={ NotFound } />
    </Switch>
  );
}

export default App;
