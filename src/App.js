import { Route, Switch } from 'react-router';
import './App.css';
import { LandigPage } from './pages/LandingPage/LandingPage';
import { Proyects } from './pages/Proyect/Proyects';



function App() {
  return (
    <div>
      <Switch>
        <Route path="/add-proyect">
          <Proyects />
        </Route>
        <Route path="/">
          <LandigPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
