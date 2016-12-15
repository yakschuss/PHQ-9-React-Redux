import React from 'react'
import { Link } from 'react-router'

const Landing = React.createClass({
  render () {
    return (
      <div className='landing-page'>
        <div className='header'>
          <h1 className='header-title'>PHQ-9 SELF ASSESSMENT</h1>
          <p className='header-explanation'>The Patient Health Questionnaire is a multiple-choice self-report inventory, that is used as a screening and diagnostic tool for mental health disorders of depression, anxiety, alcohol, eating, and somatoform disorders.</p>
        </div>
        <div className='button-submit'>
          <Link to='/test'>
            <button className='submit'>Take The Test!</button>
          </Link>
        </div>
      </div>
    )
  }
})

export default Landing

