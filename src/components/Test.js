import React from 'react'
import TestQuestion from './TestQuestion'
import TestQuestionForm from './TestQuestionForm'
import { questions } from '../fixtures/testQuestions'

const Test = React.createClass({
  render () {
    console.log(questions)
    return (
      <div className='test-page'>
        <TestQuestion questions={questions} />
        <TestQuestionForm />
      </div>
    )
  }
})

export default Test

