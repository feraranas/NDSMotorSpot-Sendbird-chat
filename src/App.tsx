import './App.css';
import { Sendbird } from './components/SendBird';
import { NDSChat } from './components/NDSMotorSpotChat';

function App() {
  return (
    <div className="App">
      <p> Using SendbirdApp module: </p>
      <Sendbird></Sendbird>
      <br/><br/>
      <p> Using SendbirdProvider module: </p>
      <NDSChat></NDSChat>
      <br/><br/>
    </div>
  );
}

export default App;