import React from 'react'

const TestQuestion = React.createClass({
  render () {
    return (
      <div id="slide" className='test-question-card'>
        <p className='test-question-title'>Over the last two weeks, how often have you been bothered by any of the following problems?</p>
        <h1 className='test-question-text'>{this.props.question}</h1>
      </div>
    )
  }
})

export default TestQuestion

