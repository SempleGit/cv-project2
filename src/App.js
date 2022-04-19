import './App.css';
import General from './components/General';
import Experience from './components/Experience';
import Education from './components/Education';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <General />
        <Experience />
        <Education />
      </div>
    );
  }
}

export default App;
