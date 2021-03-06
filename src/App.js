import React, { Component } from 'react';
import './App.css';
import Quiz from './components/Quiz';

/* Quiz Component has a state 
   Navigation sends info about which question is to be rendered
   Question receives props from Quiz and renders question 
   Result receives props from Quiz and renders result
*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <p className="header__title">Quiz historyczny</p>
          <p className="header__credits">Żródło zdjęć: <br></br> Wikimedia Commons</p>
        </header>

        <h1>Zgadnij kim jest ta postać</h1>

        <div className="quiz-container">
          <Quiz />
        </div>
      </div>
    );
  }
}

export default App;
