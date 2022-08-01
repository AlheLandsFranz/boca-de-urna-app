import VoteForm from './components/VoteForm';
import './App.css';

function App() {
  return (
    <div className="App" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', 
    flexDirection: 'column', flexWrap: 'wrap'}}>
          <h1 style={{paddingTop: '0.7em', margin: '0px', display: 'inline-block'}}>Boca de Urna App</h1> 
      <VoteForm></VoteForm>
    </div>
  );
}

export default App;
