import { Route } from 'react-router-dom';
import Home from './pages/Home'
import Profile from './pages/Profile'
import Projects from './pages/Projects'
import Skills from './pages/Skills'

function App() {
  return (
    <>
      <Route path="/" component={ Home } />
      <Route path="/projects" component={ Projects } />
      {/* <Route path="/projects/id" component={ Projects } /> */}
      <Route path="/skills" component={ Skills } />
      <Route path="/profile" component={ Profile } />
    </>
  );
}

export default App;
