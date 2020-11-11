import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor() {
    super();

    this.state = {
      str: 'Hello Sac'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
  
          hello
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload. { this.state.str}
          </p>
          <button onClick={() => {this.setState({str:'Hellooo !!!'})}}>Change Text</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
export default App;
