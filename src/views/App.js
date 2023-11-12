import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent.js';
/**
*  2 components: class component / function component
*  JSX
**/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ChauDao Hello World with React
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <MyComponent />
      </header>
    </div>
  );
}

export default App;
