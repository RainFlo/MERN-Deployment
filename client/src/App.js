// import logo from './logo.svg';
import './App.css';
import { Router, Redirect } from '@reach/router'
import Dashboard from './views/Dashboard';
import NewPirate from './views/NewPirate';
import PirateInfo from './views/PirateInfo';

function App() {
  return (
    <div>
      <Router>
        <Redirect from="/" to="/pirates" noThrow/>
        <Dashboard path="/pirates"/>
        <NewPirate path="/pirate/new"/>
        <PirateInfo path="/pirate/:id"/>
      </Router>
    </div>
  );
}

export default App;
