import React from 'react'

const TestQuestionForm = React.createClass({
  render () {
    return (
      <div className='test-question-form'>
        <form className='question-form' >
          <div className='selection'>
            <input className='radio-select' type='radio' id='notAtAll' name='test-response' value='0' />
            <label className='test-response' htmlFor='notAtAll'>Not At All</label>

            <input className='radio-select' type='radio' id='severalDays' name='test-response' value='1' />
            <label className='test-response' htmlFor='severalDays' checked='checked'>Several of the Days</label>

            <input className='radio-select' type='radio' id='moreThanHalf' name='test-response' value='2' />
            <label className='test-response' htmlFor='moreThanHalf' >More Than Half of The Days</label>

            <input className='radio-select' type='radio' id='nearlyEveryDay' name='test-response' value='3' />
            <label className='test-response' htmlFor='nearlyEveryDay' >Nearly Every Day</label>
          </div>

          <div className='submit-button'>
            <button type='submit' className='button'>Next</button>
          </div>
        </form>

      </div>
    )
  }
})

export default TestQuestionForm

