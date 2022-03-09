import logo from './logo.svg';
import './App.css';
import background from '../background.png';

function App() {
  return (
  <main className="App" style={{ backgroundImage: `url(${background})` }}></main>
    <div className="App-div">
      <header className="App-header"></header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
    
    </div>
  );
}

export default App;
