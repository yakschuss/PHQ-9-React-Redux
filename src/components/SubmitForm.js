import React from 'react'
import { Link } from 'react-router'

const SubmitForm = (props) => {
  let formType;

  if(props.continue) {
    formType = <button type='submit' className='button'>Submit</button>
  } else {
    formType = (
      <Link to="/result">
        <button type='submit' className='result-button'>Result</button>
      </Link>
    )
  }

  return (
    <div className='submit-button'>
      {formType}
    </div>
  )

}

export default SubmitForm;


