import React from 'react';
import './App.css';
import Quiz from './components/Quiz';

function App() {
  return (
    <div className="app">
      <header className="header">
        <span>
          View code on{' '}
          <a
            href="https://github.com/eremina-official/quiz-app-react"
            alt="source-code"
          >
            GitHub
          </a>
        </span>

        <span className="header__credits">
          Żródło zdjęć{' '}
          <a
            href="https://commons.wikimedia.org/wiki/Main_Page"
            alt="images-source"
          >
            Wikimedia Commons
          </a>
        </span>
      </header>

      <div className="quiz-wrapper">
        <h1>Quiz historyczny</h1>

        <p className="subtitle">Zgadnij kim jest ta postać</p>

        <div className="quiz">
          <Quiz />
        </div>
      </div>
    </div>
  );
}

export default App;
