import React, { Component } from 'react';
import Navigation from './Navigation';
import Question from './Question';
import Result from './Result';
import questionsData from '../questions-data';
import classNames from '../classNames';


class Quiz extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentQuestionIndex: 0,
      questionsData: questionsData,
      classNames: classNames
    };
  }

  renderQuestion(currentQuestionIndex) {
    return (
      <Question 
        value={this.state.questionsData[currentQuestionIndex]}
        answers={this.state.classNames[currentQuestionIndex]}
        onClick={(e) => this.handleQuestionClick(currentQuestionIndex, e)}
      />
    );
  }

  renderResult() {
    return (
      <Result
      />
    );
  }

  handleNavigationClick(e) {
    let currentQuestionIndex = this.state.currentQuestionIndex;

    if (e.target.className === 'prev' && this.state.currentQuestionIndex > 0) {
      currentQuestionIndex = currentQuestionIndex - 1;
    }

    if (e.target.className === 'next' && this.state.currentQuestionIndex < 2) {
      currentQuestionIndex = currentQuestionIndex + 1;
    }

    this.setState({currentQuestionIndex: currentQuestionIndex});
  }

  handleQuestionClick(currentQuestionIndex, e) {

    if (e.target.tagName === 'LI' && this.state.classNames[currentQuestionIndex].done === '') {

      const classNames = this.state.classNames.slice();
      let objectKeyTarget = e.target.id;

      if (e.target.textContent === this.state.questionsData[currentQuestionIndex].correctVariant) {
        classNames[currentQuestionIndex][objectKeyTarget] = 'answer right';
      } else {
        classNames[currentQuestionIndex][objectKeyTarget] = 'answer wrong';
      }

      classNames[currentQuestionIndex].done = 'question-is-done';
      this.setState({classNames: classNames});
      console.log(this.state.classNames);
      console.log(currentQuestionIndex)
    }
  }

  render() {
    let currentQuestionIndex = this.state.currentQuestionIndex;
    let questionsNumber = this.state.questionsData.length - 1;
    let questionOrResult;

    if (currentQuestionIndex > questionsNumber) {
      questionOrResult = this.renderResult();
    } else {
      questionOrResult = this.renderQuestion(currentQuestionIndex);
    }

    return (
      <div>
        <Navigation onClick={(e) => this.handleNavigationClick(e)} />
        {questionOrResult}
      </div>
    );
  }

}

export default Quiz;
