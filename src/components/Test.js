import React from 'react'
import TestQuestion from './TestQuestion'
import TestQuestionForm from './TestQuestionForm'

const Test = React.createClass({
  render() {
    return (
      <div className="test-page">
        <TestQuestion />
        <TestQuestionForm />
      </div>
    )
  }
})


export default Test;


