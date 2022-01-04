import React, { Component } from 'react';
import Navigation from './Navigation';
import Question from './Question';
import Result from './Result';
import data from '../quiz-data/questions-data';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionIndex: 0,
      counterRight: 0,
      counterWrong: 0,
      questionsData: data,
      selectedVariants: Array(data.length),
    };

    this.handleNavigationClick = this.handleNavigationClick.bind(this);
    this.handleQuestionClick = this.handleQuestionClick.bind(this);
    this.handleResetQuizClick = this.handleResetQuizClick.bind(this);
  }

  /* navigate the questions */
  handleNavigationClick(value) {
    let { currentQuestionIndex } = this.state;
    if (value === 'prev' && currentQuestionIndex > 0) {
      currentQuestionIndex -= 1;
    }
    if (
      value === 'next' &&
      currentQuestionIndex < this.state.questionsData.length
    ) {
      currentQuestionIndex += 1;
    }
    this.setState({ currentQuestionIndex });
  }

  /* function declarations for processing quiz answers */
  handleQuestionClick(selectedVariant) {
    /* When an array of objects is copied with .slice() method 
       or with a spread operator (const classNames = [...this.state.classNames]) 
       the properties of the objects in the new array should not be changed directly via an assignment 
       because it will change these values in the this.state as well. The objects in the array should be 
       copied first, the copied objects changed and used in the setState() call. */

    const { selectedVariants, currentQuestionIndex } = this.state;
    const selectedVariantsCopy = [...selectedVariants];
    selectedVariantsCopy[currentQuestionIndex] = selectedVariant;

    if (
      selectedVariant ===
      this.state.questionsData[currentQuestionIndex].correctVariant
    ) {
      this.runCounter('right');
    } else {
      this.runCounter('wrong');
    }

    this.setState({ selectedVariants: selectedVariantsCopy });
  }

  /* reset quiz */
  handleResetQuizClick() {
    this.setState({
      currentQuestionIndex: 0,
      counterRight: 0,
      counterWrong: 0,
      selectedVariants: Array(data.length),
    });
  }

  runCounter(counter) {
    let { counterRight, counterWrong } = this.state;
    if (counter === 'right') {
      /* Direct assignment here is valid because we copied the counterRight 
      to a separate variable and primitive data types in JavaScript are copied 
      by value (not by reference) */
      counterRight += 1;
      this.setState({ counterRight });
    } else {
      counterWrong += 1;
      this.setState({ counterWrong });
    }
  }

  render() {
    const { currentQuestionIndex } = this.state;

    return (
      <div>
        <Navigation
          className="navigation"
          onClick={this.handleNavigationClick}
        />

        {currentQuestionIndex > this.state.questionsData.length - 1 ? (
          <Result
            counterRight={this.state.counterRight}
            questionNumber={this.state.questionsData.length}
            totalAnswerCount={this.state.counterRight + this.state.counterWrong}
            onClick={() => this.handleResetQuizClick()}
          />
        ) : (
          <Question
            questionsData={this.state.questionsData[currentQuestionIndex]}
            selectedVariant={this.state.selectedVariants[currentQuestionIndex]}
            onClick={this.handleQuestionClick}
          />
        )}

        <Navigation
          className="navigation navigation-bottom"
          onClick={this.handleNavigationClick}
        />
      </div>
    );
  }
}

export default Quiz;
