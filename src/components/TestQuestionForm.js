import React from 'react';
import { connect } from 'react-redux';
import SubmitForm from './SubmitForm';

const TestQuestionForm = React.createClass({
  render () {
    let testQuestion;

    if (this.props.continue) {
       testQuestion = 'selection'
    } else {
       testQuestion = 'selection hidden'
    }

    return (
      <div className='test-question-form'>
        <form className='question-form' onSubmit={this.props.handleSubmit} >
          <div className={testQuestion}>
            <input className='radio-select' type='radio' id='notAtAll' name='test-response' value='0' />
            <label className='test-response' htmlFor='notAtAll'>Not At All</label>

            <input className='radio-select' type='radio' id='severalDays' name='test-response' value='1' />
            <label className='test-response' htmlFor='severalDays' checked='checked'>Several of the Days</label>

            <input className='radio-select' type='radio' id='moreThanHalf' name='test-response' value='2' />
            <label className='test-response' htmlFor='moreThanHalf' >More Than Half of The Days</label>

            <input className='radio-select' type='radio' id='nearlyEveryDay' name='test-response' value='3' />
            <label className='test-response' htmlFor='nearlyEveryDay' >Nearly Every Day</label>
          </div>

          <SubmitForm continue={this.props.continue} />

        </form>

      </div>
    );
  }
});

const mapStateToProps = (state) => {
  return {
    continue: state.continue
  };
};

export default connect(mapStateToProps)(TestQuestionForm);

