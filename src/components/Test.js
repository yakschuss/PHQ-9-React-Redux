import React from 'react';
import TestQuestion from './TestQuestion';
import TestQuestionForm from './TestQuestionForm';
import { connect } from 'react-redux';
import { updateTestProgress } from '../redux/actionCreators';

const Test = React.createClass({
  handleSubmit (e) {
    const checkedBox = document.querySelector('input[type="radio"]:checked');
    const value = checkedBox.value;
    this.props.dispatch(updateTestProgress(parseInt(value, 10)));
    checkedBox.checked = false;
    e.preventDefault();
  },

  render () {
    return (
      <div className='page-overlay'>
        <TestQuestion question={this.props.question} hideElement={this.props.continue} />
        <TestQuestionForm handleSubmit={this.handleSubmit} />
      </div>
    );
  }
});

const mapStateToProps = (state) => {
  return {
    questionCount: state.questionCount,
    question: state.question,
    continue: state.continue
  };
};

export default connect(mapStateToProps)(Test);

