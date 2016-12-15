import React from 'react'
import TestQuestion from './TestQuestion'
import TestQuestionForm from './TestQuestionForm'
import { connect } from 'react-redux'
import { updateTestProgress } from '../redux/actionCreators'

const Test = React.createClass({
  handleSubmit(e) {
    const value = document.querySelector('input[type="radio"]:checked').value;
    this.props.dispatch(updateTestProgress(parseInt(value, 10)));
    e.preventDefault();
  },

  render () {
    return (
      <div className='test-page'>
        <TestQuestion question={this.props.question} />
        <TestQuestionForm handleSubmit={this.handleSubmit} />
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    questionCount: state.questionCount,
    question: state.question
  }
}

export default connect(mapStateToProps)(Test)

