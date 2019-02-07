import React, { Component } from 'react';
import './App.css';
import Quiz from './components/Quiz';

/* QuizContainer has a state 
   Navigation sends which question is to be rendered
   QuestionConteiner recieves state from QuizContainer and renders question
*/


class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="header">
          <p className="header__title">Quiz historyczny</p>
          <p className="header__credits">Żródło zdjęć: Wikimedia Commons</p>
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
