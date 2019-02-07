import React, { Component } from 'react';
import Navigation from './Navigation';
import Question from './Question';
import questionsData from '../questions-data';


class Quiz extends Component {

  constructor(props) {
    super(props);
    this.state = {
      questionsData: questionsData,
      classNames: [
                   {
                    answerOne: 'answer',
                    answerTwo: 'answer',
                    answerThree: 'answer',
                    done: ''
                   },
                   {
                    answerOne: 'answer',
                    answerTwo: 'answer',
                    answerThree: 'answer',
                    done: ''
                   },
                  ]
    };
  }

  renderQuestion(i) {
    return (
      <Question 
        value={this.state.questionsData[i]}
        answers={this.state.classNames[i]}
        onClick={(e) => this.handleClick(i, e)}
      />
    );
  }

  handleClick(i, e) {

    if (e.target.tagName === 'LI' && this.state.classNames[i].done === '') {

      const classNames = this.state.classNames.slice();
      let objectKeyTarget = e.target.id;

      if (e.target.textContent === this.state.questionsData[i].correctVariant) {
        classNames[i][objectKeyTarget] = 'answer right';
      } else {
        classNames[i][objectKeyTarget] = 'answer wrong';
      }
      classNames[i].done = 'question-is-done';
      this.setState({classNames: classNames});
      console.log(this.state.classNames);
      console.log(i)
    }
  }

  render() {
    return (
      <div>
        <Navigation />
        {this.renderQuestion(0)}
        {this.renderQuestion(1)}
      </div>
    );
  }

}

export default Quiz;
