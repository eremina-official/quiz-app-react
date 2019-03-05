import React, { Component } from 'react';
import Navigation from './Navigation';
import Question from './Question';
import Result from './Result';
import questionsData from '../quiz-data/questions-data';
import classNames from '../quiz-data/classNames';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionIndex: 0,
      counterRight: 0,
      counterWrong: 0,
      questionsData: questionsData,
      classNames: classNames,
      imageClassName: 'question__image visible'
    };
  }

  /* function declarations for components rendering */
  getQuestionOrResult() {
    const currentQuestionIndex = this.state.currentQuestionIndex;
    const closingQuestionIndex = this.state.questionsData.length - 1;
    let questionOrResult
    if (currentQuestionIndex > closingQuestionIndex) {
      questionOrResult = this.renderResult();
    } else {
      questionOrResult = this.renderQuestion(currentQuestionIndex);
    }
    return questionOrResult;
  }

  renderQuestion(currentQuestionIndex) {
    return (
      <Question 
        questionsData={this.state.questionsData[currentQuestionIndex]}
        classNames={this.state.classNames[currentQuestionIndex]} 
        imageClassName={this.state.imageClassName}
        onClick={(e) => this.handleQuestionClick(currentQuestionIndex, e)}
      />
    );
  }

  renderResult() {
    const totalAnswerCount = this.state.counterRight + this.state.counterWrong;
    let result;
    if (totalAnswerCount === this.state.questionsData.length) {
      result = <Result 
                counterRight={this.state.counterRight} 
                questionNumber={this.state.questionsData.length} 
                onClick={() => this.handleResetQuizClick()}
               />
    } else {
      result = <Result 
                message={'Proszę odpowiedzieć na wszystkie pytania.'} 
                onClick={() => this.handleResetQuizClick()}
               />
    }

    return (
      <div>
        {result}
      </div>
    );
  }

  /* navigate the questions */
  handleNavigationClick(e) {
    let currentQuestionIndex = this.state.currentQuestionIndex;
    if (e.target.className === 'prev' && currentQuestionIndex > 0) {
      currentQuestionIndex = currentQuestionIndex - 1;
    }
    if (e.target.className === 'next' && currentQuestionIndex < this.state.questionsData.length) {
      currentQuestionIndex = currentQuestionIndex + 1;
    }
    const imageClassName = 'question__image';
    this.setState({currentQuestionIndex: currentQuestionIndex, imageClassName: imageClassName}, this.handleImageLoad);
  }

  /* apply transition effect for image on load */
  handleImageLoad() {
    const imageClassName = 'question__image visible';
    /* although handleImageLoad() is passed as a callback, the animation defined for the visible class
    does not work properly without setting this class for the image with a setTimeout() method */
    setTimeout(() => { this.setState({imageClassName: imageClassName}) }, 50);
  }

  /* function declarations for processing quiz answers */
  handleQuestionClick(currentQuestionIndex, e) {
    if (e.target.tagName !== 'LI' || this.state.classNames[currentQuestionIndex].done === 'question-is-done') {
      return;
    }
    
    /* When an array of objects is copied with .slice() method 
       or with a spread operator (const classNames = [...this.state.classNames]) 
       the properties of the objects in the new array should not be changed directly via an assignment 
       because it will change these values in the this.state as well. The objects in the array should be copied first, the copied objects changed and used in the setState() call. */
    const classNames = this.state.classNames.slice();
    classNames[currentQuestionIndex] = { ...classNames[currentQuestionIndex] };
    const objectKeyTarget = e.target.id;

    if (e.target.textContent === this.state.questionsData[currentQuestionIndex].correctVariant) {
      /* bracket notation is used to embed a variable */
      classNames[currentQuestionIndex][objectKeyTarget] = 'answer right';
      this.runCounter('right');
    } else {
      classNames[currentQuestionIndex][objectKeyTarget] = 'answer wrong';
      this.runCounter('wrong');
    }

    classNames[currentQuestionIndex].done = 'question-is-done';
    this.setState({classNames: classNames});
  }

  runCounter(counter) {
    let { counterRight, counterWrong } = this.state;
    if (counter === 'right') {
      /* Direct assignment here is valid because we copied the counterRight 
      to a separate variable and primitive data types in JavaScript are copied 
      by value (not by reference) */
      counterRight = counterRight + 1;
      this.setState({counterRight: counterRight});
    } else {
      counterWrong = counterWrong + 1;
      this.setState({counterWrong: counterWrong});
    }
  }

  /* reset quiz */
  handleResetQuizClick() {
    const currentQuestionIndex = 0;
    const counterRight = 0;
    const counterWrong = 0;
    const classNames = this.state.classNames.map(item => {
      item.answerOne = 'answer';
      item.answerTwo = 'answer';
      item.answerThree = 'answer';
      item.done = '';
      return item;
    });

    this.setState({
      currentQuestionIndex: currentQuestionIndex,
      counterRight: counterRight,
      counterWrong: counterWrong,
      classNames: classNames
    });
  }
  
  render() {
    return (
      <div>
        <Navigation className="navigation" onClick={(e) => this.handleNavigationClick(e)} />
        {this.getQuestionOrResult()}
        <Navigation className="navigation navigation-bottom" onClick={(e) => this.handleNavigationClick(e)} />
      </div>
    );
  }
}

export default Quiz;
