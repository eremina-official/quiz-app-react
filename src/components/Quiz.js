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
      counterRight: 0,
      counterWrong: 0,
      questionsData: questionsData,
      classNames: classNames,
      imageClassName: 'question__image'
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
    let totalAnswerCount = this.state.counterRight + this.state.counterWrong;
    let result;

    if (totalAnswerCount === this.state.questionsData.length) {
      result = <Result 
                counterRight={this.state.counterRight} 
                questionNumber={this.state.questionsData.length} 
                onClick={(e) => this.handleResetQuizClick(e)}
               />
    } else {
      result = <Result 
                message={'Proszę odpowiedzieć na wszystkie pytania.'} 
                onClick={(e) => this.handleResetQuizClick(e)}
               />
    }

    return (
      <div>
        {result}
      </div>
    );
  }

  handleNavigationClick(e) {
    let currentQuestionIndex = this.state.currentQuestionIndex;

    if (e.target.className === 'prev' && currentQuestionIndex > 0) {
      currentQuestionIndex = currentQuestionIndex - 1;
    }

    if (e.target.className === 'next' && currentQuestionIndex < 2) {
      currentQuestionIndex = currentQuestionIndex + 1;
    }

    this.setState({currentQuestionIndex: currentQuestionIndex});
  }

  handleQuestionClick(currentQuestionIndex, e) {

    if (e.target.tagName === 'LI' && this.state.classNames[currentQuestionIndex].done === '') {

      const classNames = this.state.classNames.slice();
      let objectKeyTarget = e.target.id;
      console.log(e.target.textContent);
      console.log(this.state.questionsData[currentQuestionIndex].correctVariant);

      if (e.target.textContent === this.state.questionsData[currentQuestionIndex].correctVariant) {
        classNames[currentQuestionIndex][objectKeyTarget] = 'answer right';
        this.runCounter('right');
      } else {
        classNames[currentQuestionIndex][objectKeyTarget] = 'answer wrong';
        this.runCounter('wrong');
      }

      classNames[currentQuestionIndex].done = 'question-is-done';
      this.setState({classNames: classNames});
    }
  }

  runCounter(counter) {
    let { counterRight, counterWrong } = this.state;
    
    if (counter === 'right') {
      counterRight = counterRight + 1;
      this.setState({counterRight: counterRight});
      console.log(counterRight)
    } else {
      counterWrong = counterWrong + 1;
      this.setState({counterWrong: counterWrong});
      console.log(counterWrong)
    }
  }

  handleResetQuizClick(e) {
    if (e.target.className === 'button-reset') {
      let { currentQuestionIndex, counterRight, counterWrong, classNames } = this.state;

      currentQuestionIndex = 0;
      counterRight = 0;
      counterWrong = 0;

      classNames.forEach((item) => {
        item.answerOne = 'answer';
        item.answerTwo = 'answer';
        item.answerThree = 'answer';
        item.done = '';
      });

      this.setState({
        currentQuestionIndex: currentQuestionIndex,
        counterRight: counterRight,
        counterWrong: counterWrong,
        classNames: classNames
      });
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
        <Navigation className="navigation" onClick={(e) => this.handleNavigationClick(e)} />
        {questionOrResult}
        <Navigation className="navigation navigation-bottom" onClick={(e) => this.handleNavigationClick(e)} />
      </div>
    );
  }

}

export default Quiz;
