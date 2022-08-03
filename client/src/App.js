import { BrowserRouter, Route, Switch } from 'react-router-dom';
import VoteForm from './components/VoteForm';
import './App.css';
import AllVotes from './components/AllVotes';

function App() {
  return (
    <BrowserRouter>
    <div className="App" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', 
    flexDirection: 'column', flexWrap: 'wrap'}}>
    <h1 style={{paddingTop: '0.7em', margin: '0px', display: 'inline-block'}}>Boca de Urna App</h1> 
      <Switch>
        <Route exact path='/' component={VoteForm}/>
        <Route path='/total-votes-sgo' component={AllVotes}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
