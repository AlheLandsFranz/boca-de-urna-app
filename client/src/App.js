import { BrowserRouter, Route, Switch } from 'react-router-dom';
import VoteForm from './components/VoteForm';
import './App.css';
import AllVotes from './components/AllVotes';
import Gracias from './components/Gracias';

function App() {
  return (
    <BrowserRouter>
    <div className="App" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', 
    flexDirection: 'column', flexWrap: 'wrap'}}>
    <h1 style={{paddingTop: '0.7em', margin: '0px', display: 'inline-block'}}>Elecciones 2022</h1> 
      <Switch>
      <Route path='/total-votes-sgo' component={AllVotes}/>
        <Route exact path='/gracias' component={Gracias}/>
        <Route exact path='/' component={VoteForm}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
