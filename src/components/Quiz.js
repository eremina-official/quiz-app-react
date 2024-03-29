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
      questionsNumber: data.length,
      selectedVariants: Array(data.length),
    };

    this.handleNavigationClick = this.handleNavigationClick.bind(this);
    this.handleQuestionClick = this.handleQuestionClick.bind(this);
    this.handleResetQuizClick = this.handleResetQuizClick.bind(this);
  }

  handleNavigationClick(value) {
    this.setState((prevState) => ({
      currentQuestionIndex: prevState.currentQuestionIndex + value,
    }));
  }

  handleQuestionClick(selectedVariant) {
    const { selectedVariants, currentQuestionIndex } = this.state;

    // don't handle click if there is an answer for this question already
    if (selectedVariants[currentQuestionIndex]) return;

    const selectedVariantsCopy = [...selectedVariants];
    selectedVariantsCopy[currentQuestionIndex] = selectedVariant;

    this.setState({ selectedVariants: selectedVariantsCopy });
  }

  handleResetQuizClick() {
    this.setState({
      currentQuestionIndex: 0,
      selectedVariants: Array(data.length),
    });
  }

  render() {
    const { currentQuestionIndex, questionsNumber, selectedVariants } =
      this.state;

    return (
      <>
        <Navigation
          className="navigation"
          currentQuestionIndex={currentQuestionIndex}
          questionsNumber={questionsNumber}
          onClick={this.handleNavigationClick}
        />

        {currentQuestionIndex > questionsNumber - 1 ? (
          <Result
            questionsNumber={questionsNumber}
            totalAnswerCount={selectedVariants}
            onClick={() => this.handleResetQuizClick()}
          />
        ) : (
          <Question
            questionsData={data[currentQuestionIndex]}
            selectedVariant={selectedVariants[currentQuestionIndex]}
            onClick={this.handleQuestionClick}
          />
        )}

        <Navigation
          className="navigation navigation-bottom"
          currentQuestionIndex={currentQuestionIndex}
          questionsNumber={questionsNumber}
          onClick={this.handleNavigationClick}
        />
      </>
    );
  }
}

export default Quiz;
